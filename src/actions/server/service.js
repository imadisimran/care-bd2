"use server"
import { collections, dbConnect } from "@/lib/dbConnect";
import { cache } from "react";
import { ObjectId } from "mongodb";

const serviceCollection = dbConnect(collections.Services);

export const getServiceCardData = async ({ skip = 0, limit = 4 }) => {
    try {
        const cursor = serviceCollection.find({}, { projection: { title: 1, desc: 1, image: 1, tags: 1 } }).skip(skip).limit(limit)
        const services = await cursor.toArray();
        const formattedServices = services.map(service => ({
            ...service,
            _id: service._id.toString(),
        }));
        return formattedServices;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getTotalServices = async () => {
    try {
        const count = await serviceCollection.countDocuments();
        return count;
    } catch (error) {
        console.log(error);
        return 0
    }
}


export const getServiceDetails = cache(async (id) => {
    try {
        const service = await serviceCollection.findOne({ _id: new ObjectId(id) });
        if (service) {
            service._id = service._id.toString();
        }
        return service;
    } catch (error) {
        console.log(error);
        return null
    }
})