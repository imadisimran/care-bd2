/**
 * "Why Choose Us" dark highlight section.
 * Accepts a title and an array of { title, desc } points.
 */
export default function ServiceWhyChoose({ title, points = [] }) {
  if (!points.length) return null;

  return (
    <section className="mt-32 bg-primary p-12 lg:p-20 rounded-xl text-base-100">
      <div className="max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="material-symbols-outlined text-info">
                check_circle
              </span>
              <div>
                <h4 className="font-bold text-xl mb-2">{p.title}</h4>
                <p className="text-primary-content/80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
