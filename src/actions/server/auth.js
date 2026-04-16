"use server"
import { getAuthStatus } from "@/lib/getAuthStatus"
import { collections, dbConnect } from "@/lib/dbConnect"

const usersCollection=dbConnect(collections.Users)

export const postUser=async (payload)=>{
    try{

        const tokens=await getAuthStatus()
        if(!tokens){
            return {success:false,message:"Unauthorized"}
        }
        const newUser={
            userId:tokens.decodedToken.user_id,
            email:tokens.decodedToken.email,
            name:payload.name,
            role:"user",
            createdAt:new Date(),
            nid:payload.nid,            
        }
        const result = await usersCollection.insertOne(newUser)
        return {success:result?.acknowledged,message:"User created successfully"}
    }catch(error){
        console.log(error)
        return {success:false,message:"Failed to create user"}
    }
}