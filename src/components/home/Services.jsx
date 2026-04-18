import Link from "next/link";
import ServiceCard from "../card/ServiceCard";
import { getServiceCardData } from "@/actions/server/service";


export default async function Services() {
  // Only show the first 4 services on the homepage
  const homeServices = await getServiceCardData({ skip: 0, limit: 4 })

  return (
    <section className="py-section px-8 lg:px-16 bg-base-100/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">Our Comprehensive Care Services</h2>
          <p className="text-neutral/80 max-w-2xl mx-auto">Professional caregiving solutions with certified staff and 24/7 support across Bangladesh.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-success text-white rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> NSDA Certified
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-warning text-base-content rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> 24/7 Support
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-success text-white rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> Licensed Professionals
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeServices.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        
        <div className="mt-16 text-center">
          <Link href="/services" className="border border-success text-success px-10 py-3.5 rounded-full text-sm font-black uppercase tracking-[0.15em] hover:bg-success hover:text-white transition-all duration-300">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
