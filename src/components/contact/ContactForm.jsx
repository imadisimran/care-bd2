export default function ContactForm() {
  return (
    <section>
      <div className="text-center mb-16">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-4 block">Communication Portal</span>
        <h1 className="text-5xl md:text-7xl font-black text-primary font-headline mb-6 tracking-tight">Get in Touch</h1>
        <p className="text-lg md:text-xl text-neutral max-w-2xl mx-auto font-body leading-relaxed">
          Ready to start your healthcare journey? Our team is here to help you find the sanctuary of healing you deserve.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-base-100 p-8 md:p-12 rounded-xl shadow-[0_10px_40px_rgba(27,28,25,0.04)]">
          <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                <input 
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none" 
                  placeholder="Your Name" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                <input 
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none" 
                  placeholder="email@example.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
                <input 
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Service Interest</label>
                <select className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 appearance-none outline-none">
                  <option>Select a Service</option>
                  <option>Elderly Care</option>
                  <option>Post-Operative Support</option>
                  <option>Chronic Illness Management</option>
                  <option>Specialized Therapy</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">How can we help?</label>
              <textarea 
                className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none" 
                placeholder="Tell us about your needs..." 
                rows="4"
              ></textarea>
            </div>
            <button className="w-full bg-accent text-accent-content py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform duration-300 active:scale-95 shadow-sm" type="button">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info Cards & Trust */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-primary p-8 rounded-lg text-white whisper-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-4xl text-info">emergency</span>
                <h3 className="text-2xl font-bold">24/7 Emergency Hotline</h3>
              </div>
              <p className="text-primary text-lg mb-4">Direct line for critical healthcare situations and immediate caregiver dispatch.</p>
              <a className="text-3xl font-black block tracking-tight" href="tel:18005550199">+1 (800) 555-0199</a>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="bg-base-200 p-6 rounded-lg flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">mail</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Email Support</h4>
                <p className="text-neutral text-sm">care@carebd.com</p>
              </div>
            </div>
            <div className="bg-base-200 p-6 rounded-lg flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <div>
                <h4 className="font-bold text-primary mb-1">Main Office</h4>
                <p className="text-neutral text-sm">742 Healing Springs Blvd, Suite 400<br/>Portland, OR 97201</p>
              </div>
            </div>
          </div>

          <div className="bg-success p-6 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <span className="material-symbols-outlined text-accent-content" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <h4 className="font-bold text-success-content">Certified &amp; Trusted</h4>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                  <span className="text-xs font-bold text-success-content ml-2">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
