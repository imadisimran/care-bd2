import ContactForm from "./ContactForm";

export default function ContactInfoForm() {
  

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
        <ContactForm></ContactForm>

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
