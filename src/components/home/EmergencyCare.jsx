import Link from "next/link";

export default function EmergencyCare() {
  return (
    <section className="py-section px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#C21807] to-[#8B0000] p-12 lg:p-20 text-center shadow-2xl whisper-shadow">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-[20px] border-white"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white"></div>
          </div>
          
          <div className="relative z-10 space-y-10">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-white flex items-center justify-center gap-4 tracking-tight">
                <span className="animate-pulse">🚨</span> Emergency Care Services Available 24/7
              </h2>
              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto font-medium">
                For immediate medical assistance or emergency transportation, our team is ready to respond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <a href="tel:+8801896020770" className="group emergency-glass-button flex items-center gap-4 px-10 py-6 rounded-2xl hover:scale-[1.05] transition-all duration-300 w-full sm:w-auto">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40">
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">ambulance</span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/70">Emergency</div>
                  <div className="text-xl font-bold text-white tracking-tight">+880-1896-020770</div>
                </div>
              </a>
              
              <a href="tel:+8809638119900" className="group emergency-glass-button flex items-center gap-4 px-10 py-6 rounded-2xl hover:scale-[1.05] transition-all duration-300 w-full sm:w-auto">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40">
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">call</span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-white/70">General</div>
                  <div className="text-xl font-bold text-white tracking-tight">+880-9638-119900</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
