import React from 'react'
import SignOutBtn from './button/SignOutBtn'
import useAuth from '@/hooks/useAuth'

export default function Profile() {
    const {user}=useAuth()
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            {user.photoURL ? <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL} /> : <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                {user.displayName.charAt(0).toUpperCase()}
            </div>}
          
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">{user.displayName}</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><SignOutBtn /></li>
      </ul>
    </div>
  )
}
