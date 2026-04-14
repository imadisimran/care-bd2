export default function MissionVision() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 rounded-2xl bg-[#aad0b1]/10 backdrop-blur-md border border-[#aad0b1]/30 group hover:bg-[#aad0b1]/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#aad0b1] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">flag</span>
            </div>
            <h3 className="text-2xl font-bold text-[#153721]">Our Mission</h3>
          </div>
          <p className="text-[#153721]/80 leading-relaxed text-lg">
            To provide compassionate, professional, and culturally sensitive caregiving services that enable individuals to maintain their dignity, independence, and quality of life in the comfort of their own homes while supporting families throughout their care journey.
          </p>
        </div>
        
        <div className="p-10 rounded-2xl bg-[#e8deff]/10 backdrop-blur-md border border-[#e8deff]/30 group hover:bg-[#e8deff]/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#6050af] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white">visibility</span>
            </div>
            <h3 className="text-2xl font-bold text-[#34285a]">Our Vision</h3>
          </div>
          <p className="text-[#34285a]/80 leading-relaxed text-lg">
            To transform the caregiving landscape in Bangladesh, advocating for better care standards and empowering communities with the knowledge to provide excellent care for their loved ones.
          </p>
        </div>
      </div>
    </section>
  );
}
