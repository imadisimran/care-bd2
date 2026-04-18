"use client"
import useAuth from '@/hooks/useAuth'
import React from 'react'
import { showErrorAlert, showSuccessAlert } from '@/lib/alert'
import { useRouter } from 'next/navigation'



export default function SignOutBtn() {
    const {logOut}=useAuth()
    const router = useRouter()
    const handleSignOut=async()=>{
        try{
            await logOut()
            await fetch("/api/logout")
            await showSuccessAlert({
                    title: "Sign Out Successfully",
                    text: "You have been signed out successfully.",
                  });
            router.refresh()
        }catch(error){
            console.log(error)
            showErrorAlert({
                    title: "Sign Out Failed",
                    text: error?.message || "Something went wrong. Please try again.",
                  });
        }
    }
  return (
    <button onClick={handleSignOut} className="text-sm font-bold text-primary uppercase tracking-wider px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">Sign Out</button>
  )
}