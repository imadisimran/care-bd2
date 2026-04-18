import Link from "next/link";

/**
 * Pricing and CTA bar shown below the hero image.
 * Accepts priceFrom, pricePer, rating, and an array of features.
 */
export default function ServicePricingBar({ price, pricePer, rating, serviceId }) {
  return (
    <section className="mb-24">
      <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(27,28,25,0.06)] border border-white/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Price + Rating */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div>
              <span className="block text-on-surface-variant font-label text-xs uppercase mb-1">
                Starting from
              </span>
              <h2 className="text-5xl font-bold text-primary">
                ${price}
                <span className="text-xl text-on-surface-variant font-medium">
                  /{pricePer}
                </span>
              </h2>
            </div>
            <div className="hidden md:block w-px h-12 bg-outline-variant/30" />
            <div className="flex items-center gap-1 bg-tertiary/10 px-4 py-2 rounded-full">
              <span
                className="material-symbols-outlined text-tertiary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-tertiary font-bold text-lg">{rating} Rating</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link href={`/booking/${serviceId}`} className="px-10 py-4 bg-tertiary-container text-on-tertiary-container rounded-full font-bold hover:scale-[1.05] transition-transform">
              Book Now
            </Link>
            <Link href="/contact" className="px-10 py-4 border border-outline-variant text-primary rounded-full font-bold hover:bg-surface-container-low transition-colors">
              Contact team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
