"use client"
import Link from "next/link";
import Image from "next/image";
import SignOutBtn from "./button/SignOutBtn";
import NavLink from "./button/NavLink";
import useAuth from "@/hooks/useAuth";


export default function Navbar() {
  const {user,loading}=useAuth()
  const navLinks=<>
  <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/services">Services</NavLink></li>
          <li><NavLink href="/my-bookings">My Bookings</NavLink></li>
          <li><NavLink href="/courses">Courses</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
  </>
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-base-100/85 backdrop-blur-md z-50 flex justify-between items-center border-b border-base-300/20 shadow-sm transition-all">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Care BD"
            width={160}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks}
        </ul>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="material-symbols-outlined text-base-content hover:text-primary transition-colors p-2 md:p-0">
          language
        </button>
        <div className="hidden sm:flex items-center gap-4 min-w-[80px] justify-center">
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          ) : user ? (
            <SignOutBtn />
          ) : (
            <Link
              href="/login"
              className="text-sm font-bold text-primary uppercase tracking-wider px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors"
            >
              Sign In
            </Link>
          )}
          <Link href="/services" className="bg-accent text-accent-content px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Book Care Now
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button 
            className="btn btn-ghost btn-circle" 
            popoverTarget="mobile-nav-popover" 
            style={{ anchorName: "--mobile-nav-anchor" }}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <ul 
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm border border-base-300/20"
            popover="auto" 
            id="mobile-nav-popover" 
            style={{ positionAnchor: "--mobile-nav-anchor" }}
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
