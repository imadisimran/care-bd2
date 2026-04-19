"use client"
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

export default function NotReadyAlert({message }) {
    useEffect(()=>{
        Swal.fire(message)
    },[])
  return (
    null
  )
}
