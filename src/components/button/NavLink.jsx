"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href} 
            className={`font-['Manrope'] tracking-tight leading-relaxed text-sm uppercase transition-all duration-300 hover:text-primary hover:scale-105 ${
                isActive 
                    ? "font-bold text-primary border-b-2 border-tertiary" 
                    : "font-medium text-on-background/70"
            }`}
        >
            {children}
        </Link>
    );
}
