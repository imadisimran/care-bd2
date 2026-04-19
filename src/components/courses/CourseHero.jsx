export default function CourseHero() {
  return (
    <>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">
          Education Portal
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
          Professional <span className="text-success-content">Training Courses</span>
        </h1>
        <p className="text-lg text-neutral leading-relaxed">
          Build your caregiving career with our NSDA-accredited training programs and gain the skills needed to make a real difference in people's lives.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto mb-20 group">
        <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 rounded-full"></div>
        <div className="relative flex items-center bg-base-100 rounded-xl px-6 py-4 focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-300">
          <span className="material-symbols-outlined text-neutral mr-4">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-base-content placeholder:text-base-300 font-medium outline-none" 
            placeholder="Search courses, instructors, or topics..." 
            type="text"
          />
        </div>
      </div>
    </>
  );
}
