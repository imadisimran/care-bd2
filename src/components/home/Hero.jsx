import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-8 lg:px-16 overflow-hidden min-h-[75vh] py-section">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity grayscale">
          <Image 
            alt="Professional caregivers" 
            className="object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDusapo_WGkeZ7txw9VjWQCdxO_q0tOPRac2kha_fbQ4ZkXjaAYFVLLcKkF99eGl_lG0o1pbTE9f_OpJPm1pbyS9Ep9r7MYFSz3x_7Ub4nYxAcodua1oVWMseiunsTLdRmpErZ0CGz147xPcXgG6NFRdKVwOmSmbN9IZZeh4pcbvAlhjhfUC3hti0v79TggfuRR9kl_q-6YzifQUEkKXiI8L1EXG9-Rt0p1zzZqocOYdPTsbfk372xI94y4yKnDM9nSTR0rdlO6pE0"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/60 to-surface/90"></div>
        <div className="absolute -right-20 bottom-10 w-96 opacity-15 rotate-12 pointer-events-none hidden lg:block">
          <Image 
            alt="App mockup" 
            className="w-full h-auto rounded-[3rem] shadow-2xl border-[12px] border-on-surface" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXBfl0G02rCCVtXvED6jev5rjBdsfNyRUVsQxH67bNLPbhYHUulhE4LyUMYhW5motuydc_T7YWWCQt73Hq83PaiYFCsVoQTxPfGFcqkcd6uel4KnsM1yjc2i2t2ILzbyawcZCG9-ayv5R6JCrW4xY7XbpdyjHlBluq8ecCK3il49rjcs3SvRLa-ambN2HawETfxjCKgSk31xaOyHg5YGAWx4u7fai7vZjIJfRdV1K8JeVd659Z4v8iQtYzA0JtgOBaAgKTJGhVcbNeE"
            width={400}
            height={800}
          />
        </div>
        
        <div className="absolute top-[20%] left-[10%] glass-panel px-6 py-4 rounded-xl whisper-shadow border border-white/40 flex items-center gap-4 animate-pulse opacity-80">
          <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-white">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div>
            <div className="text-sm font-black text-primary">24/7 Available</div>
            <div className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Emergency support</div>
          </div>
        </div>
        
        <div className="absolute bottom-[15%] left-[15%] glass-panel p-4 rounded-xl whisper-shadow space-y-3 w-48 border border-white/50 opacity-60 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">monitor_heart</span>
            </div>
            <div className="h-1.5 w-24 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">security</span>
            </div>
            <div className="h-1.5 w-20 bg-secondary/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-secondary"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center z-10 space-y-12">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold tracking-[0.1em] uppercase">Premium Care Sanctuary</span>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-primary leading-[1.05]">
            Professional <span className="text-tertiary">Caregiving</span> Services
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Experience a high-end architectural approach to compassion. We provide certified medical assistance and personalized care that turns your home into a safe, healing sanctuary.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-md p-2 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-2xl whisper-shadow flex items-center gap-2">
            <Link href="/services" className="flex-1 bg-tertiary-container text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:scale-[1.02] transition-all active:scale-95 shadow-lg">
              Book Care Service
            </Link>
          </div>
          <Link href="/" className="text-primary/70 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
            View Training Courses <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-8 border-t border-outline-variant/30">
          <div className="space-y-1">
            <div className="text-4xl lg:text-5xl font-black text-primary">2500+</div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Families Served</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl lg:text-5xl font-black text-primary">500+</div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Certified Caregivers</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl lg:text-5xl font-black text-primary">NSDA</div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Accredited</div>
          </div>
        </div>
      </div>
    </section>
  );
}
