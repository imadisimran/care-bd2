/**
 * "How It Works" numbered steps section.
 * Accepts an array of { step, title, desc } objects.
 */
export default function ServiceHowItWorks({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <span className="font-label text-sm uppercase text-secondary tracking-widest block mb-2">
          The Journey
        </span>
        <h2 className="text-4xl font-bold text-primary mb-6">How it works</h2>
        <p className="text-neutral leading-relaxed max-w-2xl mx-auto">
          Our process is designed to be seamless, professional, and entirely centered around your
          recovery goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((s) => (
          <div key={s.step} className="group flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center font-bold text-2xl text-primary border border-base-300 z-10 transition-colors group-hover:bg-accent group-hover:text-base-100 mb-6">
              {s.step}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">{s.title}</h3>
            <p className="text-neutral leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
