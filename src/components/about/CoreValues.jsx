export default function CoreValues() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B3F72] tracking-tight">Our Core Values</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="service-card-glass p-10 rounded-xl flex flex-col items-center text-center space-y-6">
          <div className="text-5xl">❤️</div>
          <h3 className="text-xl font-bold text-primary">Compassion</h3>
          <p className="text-on-surface/70 text-sm leading-relaxed">
            We treat every person with dignity, respect, and genuine care, understanding that each individual has unique needs and deserves personalized attention.
          </p>
        </div>
        <div className="service-card-glass p-10 rounded-xl flex flex-col items-center text-center space-y-6">
          <div className="text-5xl">⭐</div>
          <h3 className="text-xl font-bold text-primary">Excellence</h3>
          <p className="text-on-surface/70 text-sm leading-relaxed">
            Committed to providing the highest quality of care and service through continuous training, modern practices, and evidence-based approaches.
          </p>
        </div>
        <div className="service-card-glass p-10 rounded-xl flex flex-col items-center text-center space-y-6">
          <div className="text-5xl">🤝</div>
          <h3 className="text-xl font-bold text-primary">Community</h3>
          <p className="text-on-surface/70 text-sm leading-relaxed">
            We foster a strong support system, empowering caregivers and families to work together for better care.
          </p>
        </div>
        <div className="service-card-glass p-10 rounded-xl flex flex-col items-center text-center space-y-6">
          <div className="text-5xl">💡</div>
          <h3 className="text-xl font-bold text-primary">Innovation</h3>
          <p className="text-on-surface/70 text-sm leading-relaxed">
            Continuously improving our services with modern care practices, technology integration, and adaptive approaches to meet evolving needs.
          </p>
        </div>
      </div>
    </section>
  );
}
