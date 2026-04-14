import ContactForm from "@/components/contact/ContactForm";
import QuickStats from "@/components/contact/QuickStats";
import ContactEmergency from "@/components/contact/ContactEmergency";
import MapSection from "@/components/contact/MapSection";

export default function Contact() {
  return (
    <div className="py-section px-6 md:px-12 max-w-7xl mx-auto space-y-section">
      <ContactForm />
      <QuickStats />
      <ContactEmergency />
      <MapSection />
    </div>
  );
}
