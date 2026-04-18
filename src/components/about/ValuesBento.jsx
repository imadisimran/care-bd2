export default function ValuesBento() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-lg bg-base-100 hover:bg-base-300 transition-colors duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">verified_user</span>
          <h4 className="text-xl font-bold text-primary mb-3">Certified Quality</h4>
          <p className="text-base-content/70 leading-relaxed">Rigorous NSDA standards applied to every aspect of our training and service delivery.</p>
        </div>
        <div className="p-8 rounded-lg bg-base-100 hover:bg-base-300 transition-colors duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">favorite</span>
          <h4 className="text-xl font-bold text-primary mb-3">Empathetic Design</h4>
          <p className="text-base-content/70 leading-relaxed">Care plans built around the unique emotional and physical architecture of the individual.</p>
        </div>
        <div className="p-8 rounded-lg bg-base-100 hover:bg-base-300 transition-colors duration-300">
          <span className="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
          <h4 className="text-xl font-bold text-primary mb-3">Modern Expertise</h4>
          <p className="text-base-content/70 leading-relaxed">Continuously evolving methods backed by modern geriatric and clinical research.</p>
        </div>
      </div>
    </section>
  );
}
