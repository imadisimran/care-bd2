export default function ServiceAreas() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <label className="text-sm font-bold tracking-widest uppercase text-secondary mb-4 block">Nationwide Support</label>
          <h2 className="text-4xl font-black text-primary">Service Areas Across Bangladesh</h2>
        </div>
        <p className="text-base-content/60 max-w-sm mb-1">Expanding our reach to provide premium care to every corner of the nation.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-base-100 p-8 rounded-lg text-center hover:bg-base-200 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
          <h4 className="text-xl font-bold text-primary">Dhaka</h4>
          <p className="text-sm text-base-content/50 mt-1">Primary Hub</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center hover:bg-base-200 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
          <h4 className="text-xl font-bold text-primary">Chittagong</h4>
          <p className="text-sm text-base-content/50 mt-1">Regional Center</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center hover:bg-base-200 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
          <h4 className="text-xl font-bold text-primary">Sylhet</h4>
          <p className="text-sm text-base-content/50 mt-1">Regional Center</p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg text-center hover:bg-base-200 transition-colors">
          <span className="material-symbols-outlined text-primary text-4xl mb-4">map</span>
          <h4 className="text-xl font-bold text-primary">Other Areas</h4>
          <p className="text-sm text-base-content/50 mt-1">Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
