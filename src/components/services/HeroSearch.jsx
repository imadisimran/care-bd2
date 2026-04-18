export default function HeroSearch() {
  return (
    <section className="text-center">
      <label className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Our Expertise</label>
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-primary mb-8 max-w-3xl mx-auto">
        Compassionate care, tailored for your family.
      </h1>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-full max-w-2xl group">
          <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-neutral">search</span>
          <input 
            className="w-full pl-14 pr-6 py-5 bg-base-100 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all whisper-shadow text-lg" 
            placeholder="Search for nursing, ambulance, or specialized care..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-6 py-2 rounded-full bg-primary text-white font-bold transition-all shadow-lg">All Services</button>
          <button className="px-6 py-2 rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-all">Care</button>
          <button className="px-6 py-2 rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-all">Ambulance</button>
          <button className="px-6 py-2 rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-all">Oxygen</button>
          <button className="px-6 py-2 rounded-full bg-base-200 text-base-content hover:bg-base-300 transition-all">Others</button>
        </div>
      </div>
    </section>
  );
}
