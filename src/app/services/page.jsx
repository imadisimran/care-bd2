import HeroSearch from "@/components/services/HeroSearch";
import ServiceGrid from "@/components/services/ServiceGrid";
import EmergencyBanner from "@/components/services/EmergencyBanner";
import ServiceAreas from "@/components/services/ServiceAreas";

export default function Services() {
  return (
    <div className="py-section px-6 max-w-7xl mx-auto space-y-section">
      <HeroSearch />
      <ServiceGrid />
      <EmergencyBanner />
      <ServiceAreas />
    </div>
  );
}
