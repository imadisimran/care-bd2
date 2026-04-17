import Image from "next/image";

export default function FeaturedCourses() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Course 1 */}
      <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:bg-surface-container-lowest hover:whisper-shadow">
        <div className="relative h-64 overflow-hidden">
          <Image alt="Geriatric Care Training" className="object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTNbkjRl9Ge_q67-YYDTlDfIrGpSM_BnH5P_S8cfintTt-_2UiS45brikXUvkNGc20XDiNqjAo9mJwYS-pwpsCHPLZTYTfwTSgbr9srqs2FumWmF7zKSaaLo72Ax8de06NuRKegkPLpHExAfv5tYxwzsVfhgMDGT7WEzMfhLgU-KdRSVGWQuZGjKLNZOpzZhg7oo9-vGxPFu4xZnhSO_fS8354vsCCBADV5xPqEJCpv0nnglecaC8XZGPKvNGmp9O-5yqiJXZrLqE" fill sizes="(max-width: 1024px) 100vw, 50vw"/>
          <div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">NSDA Certified</div>
        </div>
        <div className="p-8 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-primary leading-tight">Advanced Geriatric Care Certificate</h3>
            <span className="text-tertiary font-bold text-xl">$299</span>
          </div>
          <p className="text-on-surface-variant mb-6 line-clamp-2">Master the complexities of elderly care including dementia management, mobility assistance, and nutritional planning.</p>
          <div className="flex items-center gap-6 mb-8 text-sm text-outline">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">timer</span>
              <span>48 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">school</span>
              <span>Intermediate</span>
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-colors">Enroll in Program</button>
        </div>
      </div>

      {/* Course 2 */}
      <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:bg-surface-container-lowest hover:whisper-shadow">
        <div className="relative h-64 overflow-hidden">
          <Image alt="Practical Nursing Basics" className="object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVWRAkGop-4-6L3bTx0fh6heCDiJQp1URuPU8SdcK7zneoFCNKv4ADv_pj4WhOb1xZlhQyOqW6U1ybwszRl_0UsSn3khsBe6tj7J6QuH5wJHA1HTp4lztd8dvwGZOkNdORabEsGVzTuWzItkThR_l7vKvUxyjLaqIkTXtR8wLJbgCes2I_4G5UhAB4kwTvT9vtZ_WxAIh1vjGRoU98M9YIJuHsCZ27xzw-oDLdlIRvXS9VoyCLFPSQnY7KZd_-EjrRV2Tt2X26MUk" fill sizes="(max-width: 1024px) 100vw, 50vw"/>
          <div className="absolute top-4 left-4 bg-secondary-container/90 backdrop-blur-md text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">NSDA Accredited</div>
        </div>
        <div className="p-8 flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-primary leading-tight">Fundamentals of Patient Support</h3>
            <span className="text-tertiary font-bold text-xl">Free</span>
          </div>
          <p className="text-on-surface-variant mb-6 line-clamp-2">Essential foundations for new caregivers covering basic hygiene, safety protocols, and compassionate communication.</p>
          <div className="flex items-center gap-6 mb-8 text-sm text-outline">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">timer</span>
              <span>12 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">school</span>
              <span>Beginner</span>
            </div>
          </div>
          <button className="w-full py-4 bg-secondary text-white rounded-lg font-bold hover:bg-secondary-container transition-colors">Start Learning</button>
        </div>
      </div>
    </section>
  );
}
