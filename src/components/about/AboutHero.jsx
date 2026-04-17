import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative rounded-xl p-8 md:p-16 overflow-hidden glass-card">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-4">Establishing Excellence</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-container leading-tight tracking-tighter">
              About <span className="text-secondary-container">Songjog Caregiver Center</span>
            </h1>
          </div>
          <div className="space-y-6 text-[#1b1c19] text-lg leading-relaxed">
            <p>
              Our journey began with a simple yet profound realization: caregiving is an architectural act of love and precision. We envisioned a sanctuary where the highest standards of professional care meet the warmth of human empathy.
            </p>
            <p>
              Songjog Care is proud to be a pioneer in the region, holding full <span className="font-bold text-primary">NSDA Accreditation</span>. This certification isn't just a label; it's our promise of rigorous quality control, ethical practice, and continuous professional development for every caregiver in our ecosystem.
            </p>
            <p>
              Our mission is to redefine the caregiving landscape by integrating high-end editorial standards of organization with the deep-rooted cultural values of companionship and respect.
            </p>
          </div>
          <div className="pt-4">
            <button className="bg-tertiary-container text-[#99bea0] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
              Learn About Our Services
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div className="relative group">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative bg-primary-container/10">
            <Image alt="Caregiver training session" className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPYaRpnEDF0J1ENSQTpdiWWvpEgcOvu7elX6_0d7XRRxMsBrh23zM93T-yjSYdfy1ViVDjBCcx-m1fezQET8_KolqG9BOo3QyYPQj8jl4lzXl15tsJJDA6h_yHxAagyYYeVR_ujiFUeJEVmTCWtogI8n5BPaeruBFOsWxhbajUEVhZwBztA29CJjUiCBj3G2hV7gOswZ2uiDNywi0mtkQgxiTzx_Bsw-qu244gIn5VMB_PUzXV_VnsHIi-fra0t_CjGfvQ38buZfs" fill sizes="(max-width: 1024px) 100vw, 50vw"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg border-white/10">
              <h3 className="text-primary font-bold text-xl mb-1">Songjog Caregiver Center: Our Journey, Success Stories</h3>
              <p className="text-sm text-primary/70">Watch how we are transforming lives through accredited care.</p>
            </div>
          </div>
          <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-secondary-fixed/30 rounded-xl blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
