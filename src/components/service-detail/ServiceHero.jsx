import Link from "next/link";

/**
 * Hero section for a service detail page.
 * Renders breadcrumb, heading, description, and a full-width banner image.
 */
export default function ServiceHero({ breadcrumb, title, desc, image }) {
  const imageUrl = image?.startsWith("http")
    ? image
    : `https://lh3.googleusercontent.com/aida-public/${image}`;

  return (
    <>
      {/* Breadcrumb + Heading */}
      <section className="text-center mb-16 max-w-4xl mx-auto">
        <nav className="mb-8 flex items-center justify-center gap-2 text-on-surface-variant font-label text-sm tracking-wider uppercase">
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-bold">{breadcrumb}</span>
        </nav>

        <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 tracking-tight leading-[1.1]">
          {title}
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed mx-auto">
          {desc}
        </p>
      </section>

      {/* Banner image */}
      <section className="mb-12">
        <div className="rounded-[2rem] overflow-hidden shadow-xl">
          <img
            alt={title}
            className="w-full h-[550px] object-cover"
            src={imageUrl}
          />
        </div>
      </section>
    </>
  );
}
