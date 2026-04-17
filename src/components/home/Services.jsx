import Link from "next/link";
import ServiceCard from "../card/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Mortuary Freezer Van Service",
      desc: "We provide air-conditioned freezer van services for the transportation of your loved ones with dignity.",
      image: "AB6AXuAjA2NUlbj2ZTODfj_7wsAcv9f9RZ0IA0Ab7EiRtfuh7Z5VV2wVvp2bYljqvSHfEBC9R6wA24t_tThhq6obTo-tjbaO_1f9MQx_lOB9OqAEJrgZZyp65TyOsNiGD9RdC4hoESmOvWt4THN2Z_R8v4lPVOfLxX5RylRSMKOy4ySdS_NVEz_D-klUI2C9lnUNx0S8BogMemRovCK26OSsebxEDLlMTz5OsnAqKWy-CwiHc9eZk9eqOUKtNsC3wAgQQTNpIEOHF241cyk",
      tag1: "Ambulance",
      tag2: "Emergency",
    },
    {
      title: "Professional Physiotherapy at Home",
      desc: "Receive international standard physiotherapy services in the comfort of your own home by experts.",
      image: "AB6AXuDN6uOrBApioYeH1B39_jM83xa1mYhcr1Vww7Beyc5TWskJ6gy9C5aDz2kaJun6uQHx373lHDIhE1nrPXE_qVyR3L3HpEbN4NV7b6MRFWurVYZrw7DkuD2qwFSX7o-36LZGgPDm0lkvDJz8lgtywXtnUCGSaZ4vFuUO5Adg8d-MfK3PpJ7jC5WZqCqiv61HgB9V1LuBBjPzd8f40oImy6VVwifvWLkHjOJQ_qJb2H6ZLa_SLBzYbSTguH1qbPX2wqPCMzP_lspwXXs",
      tag1: "Care",
      tag2: "Most Popular",
    },
    {
      title: "Professional Nurse Service",
      desc: "Our licensed and experienced nurses provide hospital-quality clinical care in the privacy of your home.",
      image: "AB6AXuBZACOWmY_ksmrmVd9oG8Ca8D1hJyV3MKjjQ3BxH3X80sVEhXf6gH3eV8Q5XBJJ_MPdyOf7NeU7wKNhj3X5jfCvnQa8OMxbw0ZzI4oUDKV-aXDAO6GMBIB-m4Ltp5VtpdFc0quaRyB4MkRc88iDD6oDZH7u4UlApJQcpAhTs0dyTMFWrIXWeRV2IWvssQbRLVfo2zLlTW_6PHm7VB1V0zAWXzXIeuUln1G0cbuOQ8GJX7bqo3vhaZUayTaVAApzjZBeaXm3PVJpdpw",
      tag1: "Care",
      tag2: "Most Popular",
    },
    {
      title: "Professional Nanny & Childcare Service",
      desc: "Our trained and caring Nanny provide dedicated, in-home support for children of all ages.",
      image: "AB6AXuAo3xqpxpSSMQ_LxAycPsLZt7AS45WbVJmL_leUyAs9FH4lDHUaHEpIt_OrfH2P7V5tP8aDCkhJ0oT1aIVpEBf_VBWThGIqolgPN-oxYeuZ-imqIWsOui7vmflnSxpEE49tjCGzsrOYVcMRlTse9kKzJj41enGAMTU0322W5ke_Xwh4iYQVRrSscg_t70FbfXKj2tKR4TtaEEb3Jv3TxQ0R6aBYACVbT7RxFixV8uzXzwvbWdF5exQ57q03e9fVKDhsXYoD83JQaIA",
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
            <ServiceCard key={idx} service={service} />
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
