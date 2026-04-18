export default function QuickStats() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-base-100 p-8 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
          <div className="w-16 h-16 rounded-full bg-info flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-info-content text-3xl">schedule</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">Response Time</h3>
          <p className="text-neutral">Our team typically responds within 15 minutes for all inquiries.</p>
        </div>
        <div className="bg-base-100 p-8 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
          <div className="w-16 h-16 rounded-full bg-info flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-info-content text-3xl">lock</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">Privacy Protected</h3>
          <p className="text-neutral">Your health data is secured with enterprise-grade encryption.</p>
        </div>
        <div className="bg-base-100 p-8 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
          <div className="w-16 h-16 rounded-full bg-info flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-info-content text-3xl">support_agent</span>
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">24/7 Support</h3>
          <p className="text-neutral">Round-the-clock assistance from licensed medical professionals.</p>
        </div>
      </div>
    </section>
  );
}
