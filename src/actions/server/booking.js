"use server"
import { ObjectId } from "mongodb"
import locations from "@/data/location.json"
import { collections, dbConnect } from "@/lib/dbConnect"
import { getAuthStatus } from "@/lib/getAuthStatus"

export const getDivisions = async () => {
    return locations.map(l => l.division)
}

export const getDistricts = async (division) => {
    const divisionData = locations.find(location => location.division === division)
    return divisionData ? divisionData.districts : []
}

export const createBooking = async (bookingData) => {
    
    try{
        const tokens=await getAuthStatus()
    if(!tokens){
        return {success:false,message:"You are not authorized to create booking"}
    }
    const {serviceId,duration,division,district,address}=bookingData
    const isExist=await dbConnect(collections.Bookings).findOne({serviceId,email:tokens.decodedToken.email})
    if(isExist){
        return {success:false,message:"You have already booked this service"}
    }
    const service=await dbConnect(collections.Services).findOne({_id:new ObjectId(serviceId)},{projection:{title:1,price:1,pricePer:1}})
    if(!service){
        return {success:false,message:"Service not found"}
    }
    console.log(service)
    const newBooking={
        serviceId,
        duration:Number(duration),
        address:{
            division,
            district,
            address
        },
        title:service.title,
        price:service.price*Number(duration),
        pricePer:service.pricePer,
        email:tokens.decodedToken.email,
        userId:tokens.decodedToken.uid,
        createdAt:new Date(),
    }
        const booking=await dbConnect(collections.Bookings).insertOne(newBooking)
        
        return {
            success: booking.acknowledged,
            message: booking.acknowledged ? "Booking created successfully" : "Failed to create booking"
        }
    }catch(error){
        return {success:false,message:error.message}
    }
}