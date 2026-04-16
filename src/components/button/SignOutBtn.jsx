"use client"
import useAuth from '@/hooks/useAuth'
import React from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'


export default function SignOutBtn() {
    const {logOut}=useAuth()
    const router = useRouter()
    const handleSignOut=async()=>{
        try{
            await logOut()
            await fetch("/api/logout")
            await Swal.fire({
                    title: "Sign Out Successfully",
                    text: "You have been signed out successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                    background: "rgba(251,249,244,0.95)",
                    color: "#1b1c19",
                    iconColor: "#153721",
                    confirmButtonColor: "#34285a",
                    customClass: {
                      popup: "swal-care-popup",
                      title: "swal-care-title",
                      confirmButton: "swal-care-confirm",
                    },
                  });
            router.refresh()
            // router.push('/')
        }catch(error){
            console.log(error)
            Swal.fire({
                    title: "Sign Out Failed",
                    text: error?.message || "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                    background: "rgba(251,249,244,0.95)",
                    color: "#1b1c19",
                    iconColor: "#ba1a1a",
                    confirmButtonColor: "#34285a",
                    customClass: {
                      popup: "swal-care-popup",
                      title: "swal-care-title",
                      confirmButton: "swal-care-confirm",
                    },
                  });
        }
    }
  return (
    <button onClick={handleSignOut} className="text-sm font-bold text-primary uppercase tracking-wider px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Sign Out</button>
  )
}