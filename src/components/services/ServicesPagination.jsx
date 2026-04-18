"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function ServicesPagination({ totalServices, limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const totalPages = Math.ceil(totalServices / limit);
  const currentPage = Number(searchParams.get("page")) || 1;

  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    // Scroll to the start of the service grid
    const gridElement = document.getElementById("service-grid");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex justify-center py-4">
      <div className="join gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`join-item btn btn-sm min-w-10 transition-all duration-300 ${
              currentPage === page 
                ? "bg-primary text-white border-primary hover:bg-primary/90 shadow-md" 
                : "bg-base-100 text-base-content border-none hover:bg-primary hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
