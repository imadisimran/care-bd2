"use server"
import locations from "@/data/location.json"

export const getDivisions = async () => {
    return locations.map(l => l.division)
}

export const getDistricts = async (division) => {
    const divisionData = locations.find(location => location.division === division)
    return divisionData ? divisionData.districts : []
}

export const createBooking = async (bookingData) => {
    console.log(bookingData)
}