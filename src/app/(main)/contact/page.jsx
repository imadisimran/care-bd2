import ContactInfoForm from "@/components/contact/ContactInfoForm";
import QuickStats from "@/components/contact/QuickStats";
import ContactEmergency from "@/components/contact/ContactEmergency";
import MapSection from "@/components/contact/MapSection";

export default function Contact() {
  return (
    <div className="py-section px-6 md:px-12 max-w-7xl mx-auto space-y-section">
      <ContactInfoForm />
      <QuickStats />
      <ContactEmergency />
      <MapSection />
    </div>
  );
}
