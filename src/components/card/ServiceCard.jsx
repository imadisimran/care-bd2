import Link from "next/link";

export default function ServiceCard({ service }) {
  const { title, desc, image, tags } = service;

  // const displayDescription = desc || description;

  // // Handle different tag structures
  // let displayTags = [];
  // if (tags && Array.isArray(tags)) {
  //   displayTags = tags.map((t) => (typeof t === "string" ? { text: t } : t));
  // } else {
  //   if (tag1) displayTags.push({ text: tag1, type: "primary" });
  //   if (tag2) displayTags.push({ text: tag2, type: "default" });
  // }

  // Pre-process image URL
  const imageUrl = image?.startsWith("http")
    ? image
    : `https://lh3.googleusercontent.com/aida-public/${image}`;

  return (
    <div className="service-card-glass rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] transition-all duration-500 h-full">
      <div className="relative h-48 overflow-hidden bg-surface-container-low">
        {image ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#c5eccc]/40">
            <span className="material-symbols-outlined text-6xl text-[#84A98C]/60">
              medical_services
            </span>
          </div>
        )}

        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 justify-between items-center pointer-events-none">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2.5 py-1 text-white text-[10px] font-bold uppercase rounded-md shadow-sm ${
                tag.type === "primary"
                  ? "bg-primary"
                  : tag.type === "error"
                  ? "bg-error"
                  : "bg-[#84A98C]"
              }`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col space-y-4">
        <h3 className="text-lg font-bold text-primary leading-tight">
          {title}
        </h3>
        <p className="text-sm text-on-surface-variant/90 font-medium line-clamp-3">
          {desc}
        </p>
        <div className="pt-4 flex gap-2 mt-auto">
          <button className="flex-1 bg-[#84A98C] text-white py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:brightness-90 transition-all flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-xs">
              calendar_today
            </span>{" "}
            Book Now
          </button>
          {service._id ? (
            <Link
              href={`/services/${service._id}`}
              className="flex-1 border border-[#84A98C]/30 text-[#84A98C] py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#84A98C]/10 transition-all flex items-center justify-center"
            >
              Details
            </Link>
          ) : (
            <button className="flex-1 border border-[#84A98C]/30 text-[#84A98C] py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#84A98C]/10 transition-all">
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
