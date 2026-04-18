import Image from "next/image";

export default function AvailableCourses() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-2">Available Courses (2)</h2>
          <p className="text-neutral">Choose from our comprehensive selection of professional training programs</p>
        </div>
        <div className="bg-base-100 p-6 rounded-xl whisper-shadow border border-base-200 w-full md:w-auto">
          <div className="text-sm font-bold text-primary mb-4">Filter Courses</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral uppercase tracking-wider mb-2">Course Type</label>
              <select className="w-full bg-base-100 border-none rounded-lg text-sm focus:ring-primary/20 outline-none p-2">
                <option>All</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral uppercase tracking-wider mb-2">Format</label>
              <select className="w-full bg-base-100 border-none rounded-lg text-sm focus:ring-primary/20 outline-none p-2">
                <option>All</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral uppercase tracking-wider mb-2">Level</label>
              <select className="w-full bg-base-100 border-none rounded-lg text-sm focus:ring-primary/20 outline-none p-2">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Card 1 */}
        <div className="glass-card rounded-2xl overflow-hidden whisper-shadow transition-transform hover:-translate-y-1">
          <div className="relative h-56">
            <Image alt="General Caregiving" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTNbkjRl9Ge_q67-YYDTlDfIrGpSM_BnH5P_S8cfintTt-_2UiS45brikXUvkNGc20XDiNqjAo9mJwYS-pwpsCHPLZTYTfwTSgbr9srqs2FumWmF7zKSaaLo72Ax8de06NuRKegkPLpHExAfv5tYxwzsVfhgMDGT7WEzMfhLgU-KdRSVGWQuZGjKLNZOpzZhg7oo9-vGxPFu4xZnhSO_fS8354vsCCBADV5xPqEJCpv0nnglecaC8XZGPKvNGmp9O-5yqiJXZrLqE" fill sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-orange-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Paid</span>
              <span className="bg-cyan-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">NSDA</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/90 text-cyan-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">Online</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-4">General Caregiving</h3>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base opacity-70">schedule</span>
                <span>11h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base opacity-70">group</span>
                <span>0 enrolled</span>
              </div>
              <div className="flex items-center gap-1.5 bg-yellow-100/50 text-yellow-800 px-2 py-0.5 rounded-md">
                <span className="material-symbols-outlined text-sm">payments</span>
                <span>10000</span>
              </div>
            </div>
            <p className="text-sm text-neutral mb-6 leading-relaxed line-clamp-3">Master the foundational knowledge and skills for a professional caregiving career with this comprehensive course, fully aligned with NSDA.</p>
            <div className="bg-accent/5 rounded-xl p-4 mb-6 border border-accent/10">
              <div className="text-[10px] font-bold uppercase text-neutral mb-1">Instructor:</div>
              <div className="font-bold text-primary">Dr. Khairun Naher</div>
            </div>
            <div className="flex gap-3">
              <button className="flex-grow py-3 bg-success text-white rounded-lg font-bold text-sm hover:brightness-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">menu_book</span>
                Sign In to Enroll
              </button>
              <button className="px-6 py-3 border border-base-300 text-base-content rounded-lg font-bold text-sm hover:bg-base-200 transition-all">Details</button>
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="glass-card rounded-2xl overflow-hidden whisper-shadow transition-transform hover:-translate-y-1">
          <div className="relative h-56">
            <Image alt="Hatekolome Caregiving" className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVWRAkGop-4-6L3bTx0fh6heCDiJQp1URuPU8SdcK7zneoFCNKv4ADv_pj4WhOb1xZlhQyOqW6U1ybwszRl_0UsSn3khsBe6tj7J6QuH5wJHA1HTp4lztd8dvwGZOkNdORabEsGVzTuWzItkThR_l7vKvUxyjLaqIkTXtR8wLJbgCes2I_4G5UhAB4kwTvT9vtZ_WxAIh1vjGRoU98M9YIJuHsCZ27xzw-oDLdlIRvXS9VoyCLFPSQnY7KZd_-EjrRV2Tt2X26MUk" fill sizes="(max-width: 768px) 100vw, 50vw"/>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-yellow-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Free</span>
              <span className="bg-cyan-500/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">NSDA</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-white/90 text-cyan-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">Online</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-primary mb-4">Hatekolome Caregiving</h3>
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base opacity-70">schedule</span>
                <span>2h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base opacity-70">group</span>
                <span>127 enrolled</span>
              </div>
            </div>
            <p className="text-sm text-neutral mb-6 leading-relaxed line-clamp-3">Build your career in this promising field by gaining basic caregiving skills through our hands-on caregiving course.</p>
            <div className="bg-accent/5 rounded-xl p-4 mb-6 border border-accent/10">
              <div className="text-[10px] font-bold uppercase text-neutral mb-1">Instructor:</div>
              <div className="font-bold text-primary">Dr. Khairun Naher</div>
            </div>
            <div className="flex gap-3">
              <button className="flex-grow py-3 bg-success text-white rounded-lg font-bold text-sm hover:brightness-95 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">menu_book</span>
                Sign In to Enroll
              </button>
              <button className="px-6 py-3 border border-base-300 text-base-content rounded-lg font-bold text-sm hover:bg-base-200 transition-all">Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
