import Image from "next/image";

export default function MapSection() {
  return (
    <section>
      <div className="h-[400px] rounded-xl overflow-hidden shadow-sm relative group">
        <Image 
          className="object-cover" 
          alt="stylized map view of downtown Portland Oregon with soft pastel overlays and marker icons showing healthcare center locations" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxmMr2eBr7DGczra0yy41vWY14F6VGmOM7vmiYgLFLZj0PlexfS4dSund4r-54A5pzrt9xyOHMmcXwl85DirekVZ1Fq5SQo7N9buUYRD_zwrJ61RhW_2HKOBAJETBv96OCk09ztg5q9WahIgVQEkCDfQTC3lMN7tVhykSnErRar32A6nYqmhS3s23IAXUAOC9xchZCsE9moE_G001i0thgm6x3CfgCllI6c2D943Bn2-UqtiSXuTC9YmDiB0TpEw7HwkPVk83rloU"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-lg max-w-sm">
          <h4 className="text-primary font-bold mb-2">Visit Our Center</h4>
          <p className="text-neutral text-sm mb-4">Our administrative headquarters is open Mon-Fri, 8 AM to 6 PM for in-person consultations.</p>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Get Directions <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
