import Image from "next/image";

export default function ContactEmergency() {
  return (
    <section>
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-error to-error-dark p-10 md:p-14 text-white shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Emergency Care Services Available 24/7</h2>
            <p className="text-white/80 text-lg max-w-xl">If you are experiencing a life-threatening medical emergency, call 911 or visit the nearest emergency room immediately.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-white text-error px-8 py-4 rounded-full font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform active:scale-95" href="tel:911">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency_home</span>
              Emergency: 911
            </a>
            <a className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-black flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95" href="tel:18005550199">
              <span className="material-symbols-outlined">call</span>
              General: +1 (800) 555-0199
            </a>
          </div>
        </div>
        {/* Abstract BG Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Image className="object-cover mix-blend-overlay" alt="abstract architectural lines and patterns in a monochromatic red wash creating a sense of urgency and medical structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD762_ZoNPRjARxrWNa2tdyBwMc2ayI8kHfTuni7dfn3SowlkMGbVPzs7datsNIeARZ4S3Kh19e36HEoL4hUDBAUgIQJxkZ-wVSJMYBg-CMSob0AIvFIhpJoM2RYT7wkCuGwYauO2yOATxhIHSZ5nOcavOkIqg961y97WV8TrD1UXYIZz07z-awKS_cOxwcn5MpRRXziHSc8rDB3j8g-kjLlyYSAMDMDZmeHAAtTO7IZp5gm2igBxcfiPJcZUKCSDoZBE-GjeEcfJY" fill sizes="50vw"/>
        </div>
      </div>
    </section>
  );
}
