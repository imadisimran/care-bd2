export default function CourseCTA() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-2xl bg-tertiary-fixed/40 p-12 text-center whisper-shadow border border-white/40">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] -z-10"></div>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Ready to Start Your Caregiving Journey?</h2>
          <p className="text-on-surface-variant mb-10 leading-relaxed font-medium">
            Join thousands of students who have successfully completed our training programs and are now making a difference in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#84A98C] rounded-xl font-bold whisper-shadow hover:scale-105 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">menu_book</span>
              Browse Free Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
