import Image from 'next/image';
import Link from 'next/link';
import { Home, Headphones } from 'lucide-react';
import GoBackButton from '@/components/button/GoBackButton';

export default function NotFound() {

  return (
    <div className="flex flex-col min-h-screen relative z-[100] bg-base-100 text-base-content">
      <main className="flex-grow flex items-center justify-center pt-16 pb-20 px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Visual Section (Asymmetric Editorial Style) */}
          <div className="md:col-span-7 relative order-2 md:order-1">
            <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl whisper-shadow transform -rotate-2">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5CLpTGDZFx5Q3ykA_0vHUyUhjGsnJ8jDMTgaW0ex01Tat5se-sOEDiAYmRKbnvQHyKRxDl0HlAbHH3wZZPG98qhTjUEmySbm3OD8igVH9ZmRuC_ZZj8KR1A2-pARyriDzL12B3Up_Xo-JcCY1DdujOgAMPbEatnkGdebwSREiPMND1suDjzfHM-AL3bKyXXWQcOMoHrpY3miF62ZiMk4FWKDZsu54BjmKovrMmF51U4EqTvkqTV20tajoWK68_tuK3O2dK3zHyMU" 
                alt="Soft focused interior of a modern minimalist architectural sanctuary"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Glass Card for 404 */}
            <div className="absolute -top-10 -right-4 md:-right-12 z-20 glass-panel p-10 rounded-lg whisper-shadow transform rotate-3 border border-white/20">
              <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-primary leading-none">404</h1>
              <div className="mt-4 text-xs tracking-widest uppercase font-bold text-accent opacity-60">Architectural Error</div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          {/* Text Content Section */}
          <div className="md:col-span-5 flex flex-col space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-info text-info text-xs font-bold tracking-[0.1em] uppercase">
                  Lost in Sanctuary
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight tracking-tight">
                  Even in the sanctuary, we sometimes lose our way.
              </h2>
              <p className="text-lg md:text-xl text-base-content/70 font-medium leading-relaxed">
                  The page you are looking for has moved or no longer exists. Let us guide you back to safety.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-content rounded-full font-bold hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg shadow-accent/20">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-base-300 bg-base-100/50 backdrop-blur-sm text-primary rounded-full font-bold hover:bg-base-100 hover:scale-105 transition-all duration-300 active:scale-95">
                <Headphones className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
              <GoBackButton></GoBackButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
