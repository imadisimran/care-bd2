export default function OurJourney() {
  return (
    <section className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B3F72] tracking-tight">Our Journey</h2>
      </div>
      <div className="relative max-w-4xl mx-auto py-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30"></div>
        <div className="space-y-12">
          <div className="relative flex items-center justify-between group">
            <div className="w-[45%]">
              <div className="glass-card p-6 rounded-xl border-secondary-fixed/30 hover:bg-white/80 transition-all duration-300 text-right">
                <div className="flex items-center justify-end gap-2 mb-2">
                  <span className="text-secondary font-bold text-2xl">2020</span>
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-sm text-on-surface/70 leading-relaxed">Care BD launched as a COVID-19 response initiative under Songjog Foundation.</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary-fixed z-10"></div>
            <div className="w-[45%]"></div>
          </div>

          <div className="relative flex items-center justify-between group">
            <div className="w-[45%]"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary-fixed z-10"></div>
            <div className="w-[45%]">
              <div className="glass-card p-6 rounded-xl border-primary-fixed/30 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-primary font-bold text-2xl">2023</span>
                </div>
                <p className="text-sm text-on-surface/70 leading-relaxed">Developed Bangladesh's first caregiving curriculum with NSDA and launched accredited training programs.</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between group">
            <div className="w-[45%]">
              <div className="glass-card p-6 rounded-xl border-tertiary-fixed/30 hover:bg-white/80 transition-all duration-300 text-right">
                <div className="flex items-center justify-end gap-2 mb-2">
                  <span className="text-tertiary font-bold text-2xl">2023</span>
                  <span className="text-2xl">🤝</span>
                </div>
                <p className="text-sm text-on-surface/70 leading-relaxed">Collaboration with Robi Hatkolome for Caregiving Course expansion.</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary ring-4 ring-tertiary-fixed z-10"></div>
            <div className="w-[45%]"></div>
          </div>

          <div className="relative flex items-center justify-between group">
            <div className="w-[45%]"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-on-tertiary-fixed-variant ring-4 ring-tertiary-fixed z-10"></div>
            <div className="w-[45%]">
              <div className="glass-card p-6 rounded-xl border-on-tertiary-fixed-variant/20 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-on-tertiary-fixed-variant font-bold text-2xl">2024</span>
                </div>
                <p className="text-sm text-on-surface/70 leading-relaxed">Selected for Smart Bangladesh Accelerator Program and ICT Innovation Fund for Caregiving App Development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
