import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/servicesData";
import ServiceHero from "@/components/service-detail/ServiceHero";
import ServicePricingBar from "@/components/service-detail/ServicePricingBar";
import ServiceStatsBar from "@/components/service-detail/ServiceStatsBar";
import ServiceTreatments from "@/components/service-detail/ServiceTreatments";
import ServiceWhyChoose from "@/components/service-detail/ServiceWhyChoose";
import ServiceHowItWorks from "@/components/service-detail/ServiceHowItWorks";
import ServiceFAQ from "@/components/service-detail/ServiceFAQ";

/** Pre-generate all known service slugs at build time */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/** Dynamic metadata for each service page */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found | AuraCare" };

  return {
    title: `${service.title} | AuraCare`,
    description: service.heroDesc || service.desc,
  };
}

/**
 * Dynamic service detail page.
 * Route: /services/[slug]
 */
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div className="pt-12 pb-20 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Hero: breadcrumb, title, description, banner image */}
      <ServiceHero
        breadcrumb={service.breadcrumb}
        title={service.heroTitle}
        desc={service.heroDesc}
        image={service.image}
      />

      {/* Pricing + CTA bar */}
      <ServicePricingBar
        priceFrom={service.priceFrom}
        pricePer={service.pricePer}
        rating={service.rating}
        features={service.features}
      />

      {/* Quick stats row */}
      <ServiceStatsBar features={service.features} />

      {/* Treatments / Offerings grid */}
      <ServiceTreatments treatments={service.treatments} />

      {/* Why Choose AuraCare */}
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
