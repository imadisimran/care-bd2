"use client"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MobileNavDropdown() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="material-symbols-outlined text-on-surface p-2 focus:outline-none hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
          menu
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2 mr-4 bg-[#fbf9f4] border-outline-variant/20 shadow-2xl rounded-xl z-[60]" align="end">
        <DropdownMenuGroup className="p-2 gap-1 flex flex-col">
          {links.map((link) => (
            <DropdownMenuItem key={link.name} asChild className="cursor-pointer font-['Manrope'] font-bold uppercase text-[#34285a] hover:bg-primary/5 focus:bg-primary/5 py-2.5 px-4 rounded-md">
              <Link href={link.href}>
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-outline-variant/20 sm:hidden" />
        <div className="flex flex-col gap-2 p-2 sm:hidden">
          <button className="text-sm font-bold text-primary uppercase tracking-wider py-2.5 bg-primary/5 rounded-lg border border-primary/20 w-full hover:bg-primary/10 transition-colors">
            Sign In
          </button>
          <button className="bg-tertiary-container text-on-tertiary-container py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest w-full shadow-sm hover:scale-[1.02] transition-transform">
            Book Care Now
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
