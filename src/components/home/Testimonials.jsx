export default function Testimonials() {
  const testimonials = [
    {
      text: `"Care BD provided exceptional care for my elderly mother. Their caregivers are not only skilled but genuinely caring. I couldn't have asked for better support during this difficult time."`,
      author: "Mrs. Rahman",
      role: "Family Member"
    },
    {
      text: `"I regularly refer patients to Care BD for post-operative care. Their medical support team is highly trained and follows proper protocols. Excellent service quality."`,
      author: "Dr. Ahmed",
      role: "Healthcare Professional"
    },
    {
      text: `"The NSDA-accredited training program at Care BD transformed my career. The instructors are experienced and the hands-on training prepared me well for my caregiving role."`,
      author: "Fatima Begum",
      role: "Course Graduate"
    }
  ];

  return (
    <section className="py-section px-8 lg:px-16 bg-[#34285a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            What Our <span className="text-[#fcc434]">Clients Say</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Real testimonials from families we’ve served and professionals we’ve trained.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="testimonial-glass p-8 rounded-[2rem] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-[#fcc434]">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="text-white/90 italic leading-relaxed text-lg">
                  {testi.text}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white">{testi.author}</h4>
                <p className="text-xs font-medium uppercase tracking-widest text-white/60">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
