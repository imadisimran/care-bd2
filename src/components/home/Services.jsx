import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Mortuary Freezer Van Service",
      desc: "We provide air-conditioned freezer van services for the transportation of your loved ones with dignity.",
      icon: "medical_services",
      tag1: "Ambulance",
      tag2: "Emergency",
    },
    {
      title: "Professional Physiotherapy at Home",
      desc: "Receive international standard physiotherapy services in the comfort of your own home by experts.",
      icon: "exercise",
      tag1: "Care",
      tag2: "Most Popular",
    },
    {
      title: "Professional Nurse Service",
      desc: "Our licensed and experienced nurses provide hospital-quality clinical care in the privacy of your home.",
      icon: "vaccines",
      tag1: "Care",
      tag2: "Most Popular",
    },
    {
      title: "Professional Nanny & Childcare Service",
      desc: "Our trained and caring Nanny provide dedicated, in-home support for children of all ages.",
      icon: "child_care",
      tag1: "Care",
      tag2: "Most Popular",
    }
  ];

  return (
    <section className="py-section px-8 lg:px-16 bg-surface-container-low/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">Our Comprehensive Care Services</h2>
          <p className="text-on-surface-variant/80 max-w-2xl mx-auto">Professional caregiving solutions with certified staff and 24/7 support across Bangladesh.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#84A98C] text-white rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> NSDA Certified
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#fcc434] text-[#1b1c19] rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> 24/7 Support
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-[#84A98C] text-white rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">check_circle</span> Licensed Professionals
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="service-card-glass rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-48 bg-[#c5eccc]/40 flex items-center justify-center">
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-2.5 py-1 bg-[#84A98C] text-white text-[10px] font-bold uppercase rounded-md">{service.tag1}</span>
                  <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-md">{service.tag2}</span>
                </div>
                <span className="material-symbols-outlined text-6xl text-[#84A98C]/60 group-hover:scale-110 transition-transform">{service.icon}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col space-y-4">
                <h3 className="text-lg font-bold text-primary leading-tight">{service.title}</h3>
                <p className="text-sm text-on-surface-variant/90 font-medium">{service.desc}</p>
                <div className="pt-4 flex gap-2 mt-auto">
                  <button className="flex-1 bg-[#84A98C] text-white py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:brightness-90 transition-all flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-xs">calendar_today</span> Book Now
                  </button>
                  <button className="flex-1 border border-[#84A98C]/30 text-[#84A98C] py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#84A98C]/10 transition-all">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-[#84A98C] text-[#84A98C] px-10 py-3.5 rounded-full text-sm font-black uppercase tracking-[0.15em] hover:bg-[#84A98C] hover:text-white transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
