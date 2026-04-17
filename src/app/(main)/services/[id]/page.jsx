import { notFound } from "next/navigation";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServicePricingBar from "@/components/service-detail/ServicePricingBar";
import ServiceStatsBar from "@/components/service-detail/ServiceStatsBar";
import ServiceTreatments from "@/components/service-detail/ServiceTreatments";
import ServiceWhyChoose from "@/components/service-detail/ServiceWhyChoose";
import ServiceHowItWorks from "@/components/service-detail/ServiceHowItWorks";
import ServiceFAQ from "@/components/service-detail/ServiceFAQ";
import { getServiceDetails } from "@/actions/server/service";


export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = await getServiceDetails(id);
  if (!service) return { title: "Service Not Found | Care BD" };
  return {
    title: `${service.title} | Care BD`,
    description: service.heroDesc || service.desc,
  };
}


export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const service = await getServiceDetails(id)

  if (!service) notFound();

  return (
    <div className="pt-12 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      <ServiceHero
        title={service.title}
        desc={service.heroDesc}
        image={service.image}
      />

      {/* Pricing + CTA bar */}
      <ServicePricingBar
        price={service.price}
        pricePer={service.pricePer}
        rating={service.rating}
      />

      {/* Quick stats row */}
      <ServiceStatsBar features={service.features} />

      {/* Treatments / Offerings grid */}
      <ServiceTreatments treatments={service.treatments} />

      {/* Why Choose Care BD */}
      <ServiceWhyChoose
        title={service.whyChooseTitle}
        points={service.whyChoosePoints}
      />

      {/* How It Works steps */}
      <ServiceHowItWorks steps={service.howItWorks} />

      {/* FAQ accordion */}
      <ServiceFAQ faqs={service.faqs} />
    </div>
  );
}
