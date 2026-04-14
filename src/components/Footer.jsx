import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b1c19] text-white pt-section pb-12 px-8 lg:px-16 border-t border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-[#84A98C]">Songjog Care</Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Providing compassionate, professional caregiving services across Bangladesh. We blend medical excellence with personal compassion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-lg text-[#84A98C]">call</span>
                <span className="text-sm">+880-9638-119900</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-lg text-[#84A98C]">mail</span>
                <span className="text-sm">info@songjogcare.com</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84A98C] transition-colors">
                <img alt="Facebook" className="w-5 h-5 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGdHXPZYqUStjiT2Y2rkQJ4a19-V6CXlKXEyII_ekkLFM8cTfaiyXG2_qYf42_Tr5ZKrAykWva7yDInJ6yB06W1R_WHoXfJTxnjWU6oLIFgrMumxethKFDFX_k5Ie_GTs3pH6N14eSpcDOIYkSLqvpHo6zwGX4AAwQ-GY1nhOhQnWGqJFXi5KGdwRe3EkCGaIyL2A2pRCH_TSEHWBXRrvyvHc1jSe7hlHHAUHofOTKE_c8zcEI2SBBxTC8keoByGU6-s1BHMUWivc"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84A98C] transition-colors">
                <img alt="Twitter" className="w-5 h-5 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_wADXHCjmtZji-4Zusd56XSqcIBe46g_FhnMZv1NSzo3mmzLohKfYDTMTcsgYgyy7xskHmXWdiImzPApV-f1xsd1JGtQRJPq75aj0lgeEyX3VcNrVxv98k1A45zZQoG8cuzFbkCL-x2nThk0SkBbrmaIe7ksCHqar7ZkUQvEDIrddnuWP1hc7vmdEbpp2R0Hmvuyjz-chOWMRl4ptgFAtCQS04IKLQknTu5w6QeWuLXXPBE5D6uo1lveEmeBZ0IsbfMTq0L6GXkA"/>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84A98C] transition-colors">
                <img alt="LinkedIn" className="w-5 h-5 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiUQ3HKpipAWZzLOX9aSB5DMCFFoCuVIuRU2LUpzH_83ItVT-f9lTCQxANO0SHNs74fH1hfjh4zfsia4epa7fAZ_VwO2mBA1xruPAN_xIwN2zp8tCmjUYEYvDPKgqaEowVSusd9JG0grx6nGk5q5TQ2XyniVUv9HDJDWxNpc3Z-7J9l0phxbD7m28sxm07CxokjpQXBm57EkWr7EQZCTb2v0dj6Skme-irk1Pnj7rZ9WbL1iQbLP15HT4_OVEycJxfrryOD0spenY"/>
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Care Service</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Ambulance Service</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Oxygen Service</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Freezer Van</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Training</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Basic Caregiving</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Advanced Medical</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Elderly Care</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">NSDA Courses</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-bold tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">Book Service</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-[#84A98C] transition-colors text-sm">For Caregivers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <p className="text-white/40 text-[13px]">© 2026 Songjog Care. All rights reserved.</p>
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#fcc434]"><span className="w-1.5 h-1.5 rounded-full bg-[#fcc434]"></span> NSDA Accredited</span>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#84A98C]"><span className="w-1.5 h-1.5 rounded-full bg-[#84A98C]"></span> Licensed Healthcare Provider</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[13px] text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/" className="hover:text-white transition-colors">Help Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
