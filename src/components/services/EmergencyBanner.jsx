export default function EmergencyBanner() {
  return (
    <section>
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-error to-[#7a1111] p-12 text-white">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase mb-4">
              Immediate Response
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Facing an Emergency?</h2>
            <p className="text-white/80 text-lg md:text-xl">
              Our dispatch team is standing by 24/7. Get immediate medical transport and nursing assistance when every second counts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-error rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl" href="tel:+880123456789">
              <span className="material-symbols-outlined">call</span>
              +880 1234 567 89
            </a>
            <button className="flex items-center justify-center gap-3 px-8 py-5 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full font-bold text-xl hover:bg-white/30 transition-all">
              Live Support
            </button>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
