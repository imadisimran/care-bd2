"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`font-['Manrope'] tracking-tight leading-relaxed text-sm uppercase transition-all duration-300 hover:text-[#34285a] hover:scale-105 ${
                isActive 
                    ? "font-bold text-[#34285a] border-b-2 border-[#153721]" 
                    : "font-medium text-[#1b1c19]/70"
            }`}
        >
            {children}
        </Link>
    );
}
