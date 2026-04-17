/**
 * Treatment cards grid.
 * Accepts an array of { icon, title, desc } objects and renders them in a hover-animated grid.
 */
export default function ServiceTreatments({ treatments = [] }) {
  if (!treatments.length) return null;

  return (
    <section className="mt-32">
      <div className="mb-16">
        <span className="font-label text-sm uppercase text-secondary tracking-widest block mb-2">
          Clinical Expertise
        </span>
        <h2 className="text-4xl font-bold text-primary">
          Specialized Treatments &amp; Offerings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatments.map((t, i) => (
          <div
            key={i}
            className="group p-10 rounded-xl bg-surface-container-highest hover:bg-primary transition-all duration-500"
          >
            <span className="material-symbols-outlined text-4xl text-primary group-hover:text-primary-fixed mb-6 block">
              {t.icon}
            </span>
            <h3 className="text-2xl font-bold text-primary group-hover:text-surface mb-4">
              {t.title}
            </h3>
            <p className="text-on-surface-variant group-hover:text-surface-container leading-relaxed">
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
