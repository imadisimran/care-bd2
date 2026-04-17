"use server"
import { getAuthStatus } from "@/lib/getAuthStatus"
import { collections, dbConnect } from "@/lib/dbConnect"

const usersCollection=dbConnect(collections.Users)

export const postUser=async (payload)=>{
    try{
        const tokens=await getAuthStatus()
        console.log(tokens)
        if(!tokens){
            return {success:false,message:"Unauthorized"}
        }
        const user=await usersCollection.findOne({userId:tokens.decodedToken.user_id},{
            projection:{_id:1}
        })
        if(user){
            return {success:false,message:"User already exists"}
        }
        const newUser={
            userId:tokens.decodedToken.user_id,
            email:tokens.decodedToken.email,
            name:payload.name,
            role:"user",
            createdAt:new Date(),
            nid:payload.nid,
            provider:tokens.decodedToken.source_sign_in_provider,       
        }
        const result = await usersCollection.insertOne(newUser)
        return {success:result?.acknowledged,message:"User created successfully"}
    }catch(error){
        console.log(error)
        return {success:false,message:"Failed to create user"}
    }
}

export const postUserGoogle=async()=>{
    try{
        const tokens=await getAuthStatus()
        // console.log(tokens)
        if(!tokens){
            return {success:false,message:"Unauthorized"}
        }
        const user=await usersCollection.findOne({userId:tokens.decodedToken.user_id},{
            projection:{_id:1}
        })
        if(user){
            return {success:true,message:"User already exists"}
        }
        const newUser={
            userId:tokens.decodedToken.user_id,
            email:tokens.decodedToken.email,
            name:tokens.decodedToken.name,
            role:"user",
            createdAt:new Date(),
            provider:tokens.decodedToken.source_sign_in_provider,
            picture:tokens.decodedToken.picture,        
        }
        const result = await usersCollection.insertOne(newUser)
        return {success:result?.acknowledged,message:"User created successfully"}
    }catch(error){
        console.log(error)
        return {success:false,message:"Failed to create user"}
    }
}