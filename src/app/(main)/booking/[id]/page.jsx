import React from 'react'
import BookingPageClient from './BookingClient'
import { getServiceBookingInfo } from '@/actions/server/service'
import { getDivisions } from '@/actions/server/booking';

export default async function BookingPage({params}) {
    const {id} = await params;
    const service = await getServiceBookingInfo(id);
    const divisions= await getDivisions()
    // console.log(divisions)
    
  return (
    <BookingPageClient service={service} divisions={divisions}></BookingPageClient>
  )
}
