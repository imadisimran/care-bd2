export default function Impact() {
  return (
    <section className="space-y-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-container tracking-tight">Our Impact</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="glass-card p-10 rounded-2xl text-center border-primary-fixed/20">
          <h3 className="text-4xl font-extrabold text-primary mb-2">2020</h3>
          <p className="text-sm text-on-surface/60 uppercase tracking-widest font-bold">Since Launch</p>
        </div>
        <div className="glass-card p-10 rounded-2xl text-center border-secondary-fixed/20">
          <h3 className="text-4xl font-extrabold text-secondary mb-2">13</h3>
          <p className="text-sm text-on-surface/60 uppercase tracking-widest font-bold">Districts Served</p>
        </div>
        <div className="glass-card p-10 rounded-2xl text-center border-tertiary-fixed/20">
          <h3 className="text-4xl font-extrabold text-tertiary mb-2">2500+</h3>
          <p className="text-sm text-on-surface/60 uppercase tracking-widest font-bold">Happy Clients</p>
        </div>
        <div className="glass-card p-10 rounded-2xl text-center border-on-tertiary-fixed-variant/20">
          <h3 className="text-4xl font-extrabold text-on-tertiary-fixed-variant mb-2">500+</h3>
          <p className="text-sm text-on-surface/60 uppercase tracking-widest font-bold">Caregivers Working</p>
        </div>
      </div>
    </section>
  );
}
