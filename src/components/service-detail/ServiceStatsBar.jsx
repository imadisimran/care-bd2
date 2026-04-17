/**
 * Stats bar — 3 quick-glance info cards (availability, coverage, professionals).
 */
export default function ServiceStatsBar({ features = [] }) {
  const colorClasses = [
    { bg: "bg-primary", text: "text-on-primary" },
    { bg: "bg-tertiary", text: "text-on-tertiary" },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
      {features.map((f, i) => {
        const c = colorClasses[i % colorClasses.length];
        return (
          <div
            key={i}
            className="bg-surface-container-low p-8 rounded-lg flex items-center gap-6"
          >
            <div
              className={`w-14 h-14 ${c.bg} rounded-full flex items-center justify-center ${c.text}`}
            >
              <span className="material-symbols-outlined">{f.icon}</span>
            </div>
            <div>
              <h3 className="text-primary font-bold text-xl leading-none mb-1">
                {f.label}
              </h3>
              <p className="text-on-surface-variant text-sm">{f.sub}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
