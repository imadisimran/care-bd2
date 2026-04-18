export default function MissionVision() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 rounded-2xl bg-tertiary-fixed-dim/10 backdrop-blur-md border border-tertiary-fixed-dim/30 group hover:bg-tertiary-fixed-dim/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-tertiary-fixed-dim rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">flag</span>
            </div>
            <h3 className="text-2xl font-bold text-tertiary">Our Mission</h3>
          </div>
          <p className="text-tertiary/80 leading-relaxed text-lg">
            To provide compassionate, professional, and culturally sensitive caregiving services that enable individuals to maintain their dignity, independence, and quality of life in the comfort of their own homes while supporting families throughout their care journey.
          </p>
        </div>
        
        <div className="p-10 rounded-2xl bg-primary-fixed/10 backdrop-blur-md border border-primary-fixed/30 group hover:bg-primary-fixed/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">visibility</span>
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
          </div>
          <p className="text-primary/80 leading-relaxed text-lg">
            To transform the caregiving landscape in Bangladesh, advocating for better care standards and empowering communities with the knowledge to provide excellent care for their loved ones.
          </p>
        </div>
      </div>
    </section>
  );
}
