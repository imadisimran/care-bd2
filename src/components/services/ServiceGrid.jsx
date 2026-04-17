import ServiceCard from "../card/ServiceCard";

export default function ServiceGrid({services}) {
  
  return (
    <section id="service-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 scroll-mt-24">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </section>
  );
}
