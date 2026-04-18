import Image from "next/image";

export default function TrainingPrograms() {
  const programs = [
    {
      title: "General Caregiving",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDusapo_WGkeZ7txw9VjWQCdxO_q0tOPRac2kha_fbQ4ZkXjaAYFVLLcKkF99eGl_lG0o1pbTE9f_OpJPm1pbyS9Ep9r7MYFSz3x_7Ub4nYxAcodua1oVWMseiunsTLdRmpErZ0CGz147xPcXgG6NFRdKVwOmSmbN9IZZeh4pcbvAlhjhfUC3hti0v79TggfuRR9kl_q-6YzifQUEkKXiI8L1EXG9-Rt0p1zzZqocOYdPTsbfk372xI94y4yKnDM9nSTR0rdlO6pE0",
      type: "Paid",
      typeColor: "bg-primary-container",
      duration: "11 weeks",
      enrolled: "0",
      desc: "Master the foundational knowledge and skills for a professional caregiving career with this comprehensive course, fully aligned with NSDA.",
      instructor: "Dr. Khairun Naher",
      price: "৳10000"
    },
    {
      title: "Hatekolome Caregiving",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXBfl0G02rCCVtXvED6jev5rjBdsfNyRUVsQxH67bNLPbhYHUulhE4LyUMYhW5motuydc_T7YWWCQt73Hq83PaiYFCsVoQTxPfGFcqkcd6uel4KnsM1yjc2i2t2ILzbyawcZCG9-ayv5R6JCrW4xY7XbpdyjHlBluq8ecCK3il49rjcs3SvRLa-ambN2HawETfxjCKgSk31xaOyHg5YGAWx4u7fai7vZjIJfRdV1K8JeVd659Z4v8iQtYzA0JtgOBaAgKTJGhVcbNeE",
      type: "Free",
      typeColor: "bg-tertiary",
      duration: "2 weeks",
      enrolled: "127",
      desc: "Build your career in this promising field by gaining basic caregiving skills through our hands-on caregiving course.",
      instructor: "Dr. Khairun Naher",
      price: null
    }
  ];

  return (
    <section className="py-section px-8 lg:px-16 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary-container">
            Professional <span className="text-sage">Training Programs</span>
          </h2>
          <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">
            Build your caregiving career with our NSDA-accredited training programs and gain the skills needed to make a real difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {programs.map((prog, idx) => (
            <div key={idx} className="service-card-glass rounded-[2rem] overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-500 border-white/60">
              <div className="relative h-64 overflow-hidden">
                <Image alt={prog.title} className="object-cover group-hover:scale-110 transition-transform duration-700" src={prog.imgSrc} fill sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 ${prog.typeColor} text-white text-[10px] font-bold uppercase rounded-full`}>{prog.type}</span>
                  <span className="px-3 py-1 bg-sage text-white text-[10px] font-bold uppercase rounded-full">NSDA</span>
                </div>
                {prog.price && (
                  <div className="absolute top-4 right-4 bg-amber px-4 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-on-background">{prog.price}</span>
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary-container">{prog.title}</h3>
                  <div className="flex items-center gap-6 text-sm text-on-surface-variant/80 font-medium">
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">schedule</span> {prog.duration}</span>
                    <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">group</span> {prog.enrolled} enrolled</span>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{prog.desc}</p>
                <div className="bg-surface-container/50 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60">Instructor</div>
                    <div className="text-sm font-bold text-primary-container">{prog.instructor}</div>
                  </div>
                </div>
                <button className="w-full bg-sage text-white py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] hover:bg-sage/90 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">menu_book</span> Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border border-sage text-sage px-12 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-sage hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
            <span className="material-symbols-outlined">menu_book</span> View All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
