import ServiceCard from "../card/ServiceCard";
import { services } from "@/lib/servicesData";

export default function ServiceGrid() {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
}
