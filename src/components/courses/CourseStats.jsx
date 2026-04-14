export default function CourseStats() {
  const stats = [
    { value: "2", label: "Total Courses", icon: "menu_book", colorBase: "secondary" },
    { value: "2", label: "NSDA Certified", icon: "verified", colorBase: "tertiary" },
    { value: "127", label: "Active Students", icon: "group", colorBase: "primary" },
    { value: "1", label: "Free Courses", icon: "schedule", colorBase: "secondary" }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-surface-container-lowest backdrop-blur-xl p-8 rounded-lg whisper-shadow flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
          <div className={`w-12 h-12 bg-${stat.colorBase}-container/20 rounded-full flex items-center justify-center mb-4 text-${stat.colorBase}`}>
            <span className="material-symbols-outlined">{stat.icon}</span>
          </div>
          <div className="text-3xl font-extrabold text-primary mb-1">{stat.value}</div>
          <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
