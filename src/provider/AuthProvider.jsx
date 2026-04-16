"use client"
import AuthContext from '@/context/AuthContext'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export default function AuthProvider({children}) {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const registerUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password).finally(()=>{
            setLoading(false)
        })
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password).finally(()=>{
            setLoading(false)
        })
    }
    const updateUser=(name)=>{
        return updateProfile(auth.currentUser,{displayName:name}).finally(()=>{
            setLoading(false)
        })
    }
    const logOut=()=>{
        return signOut(auth).finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
    const authInfo={
        registerUser,
        user,
        loading,
        signIn,
        updateUser,
        logOut
    }
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}
