import Link from "next/link";
import { MobileNavDropdown } from "@/components/button/DropdownMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 bg-[#fbf9f4]/85 backdrop-blur-md z-50 flex justify-between items-center border-b border-outline-variant/20 shadow-sm transition-all">
      <div className="flex items-center gap-12">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-[#34285a]">
          Songjog Care
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-['Manrope'] tracking-tight leading-relaxed text-sm font-bold uppercase text-[#34285a] border-b-2 border-[#153721]">
            Home
          </Link>
          <Link href="/about" className="font-['Manrope'] tracking-tight leading-relaxed text-sm font-medium uppercase text-[#1b1c19]/70 hover:text-[#34285a] hover:scale-105 transition-all duration-300">
            About
          </Link>
          <Link href="/services" className="font-['Manrope'] tracking-tight leading-relaxed text-sm font-medium uppercase text-[#1b1c19]/70 hover:text-[#34285a] hover:scale-105 transition-all duration-300">
            Services
          </Link>
          <Link href="/courses" className="font-['Manrope'] tracking-tight leading-relaxed text-sm font-medium uppercase text-[#1b1c19]/70 hover:text-[#34285a] hover:scale-105 transition-all duration-300">
            Courses
          </Link>
          <Link href="/contact" className="font-['Manrope'] tracking-tight leading-relaxed text-sm font-medium uppercase text-[#1b1c19]/70 hover:text-[#34285a] hover:scale-105 transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors p-2 md:p-0">
          language
        </button>
        <div className="hidden sm:flex items-center gap-4">
          <button className="text-sm font-bold text-primary uppercase tracking-wider px-4 py-2 hover:bg-primary/5 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="bg-tertiary-container text-on-tertiary-container px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Book Care Now
          </button>
        </div>
        <div className="flex md:hidden items-center">
          <MobileNavDropdown />
        </div>
      </div>
    </nav>
  );
}
