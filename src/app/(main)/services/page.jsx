import HeroSearch from "@/components/services/HeroSearch";
import ServiceGrid from "@/components/services/ServiceGrid";
import EmergencyBanner from "@/components/services/EmergencyBanner";
import ServiceAreas from "@/components/services/ServiceAreas";
import ServicesPagination from "@/components/services/ServicesPagination";
import { getServiceCardData, getTotalServices } from "@/actions/server/service";


export default async function Services({ searchParams }) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;
  const [totalServices, services] = await Promise.all([
    getTotalServices(),
    getServiceCardData({ skip, limit })
  ])
  return (
    <div className="py-section px-6 max-w-7xl mx-auto space-y-section">
      <HeroSearch />
      <ServiceGrid services={services} />
      <ServicesPagination totalServices={totalServices} limit={limit} />
      <EmergencyBanner />
      <ServiceAreas />
    </div>
  );
}
