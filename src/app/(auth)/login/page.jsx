import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="flex-grow flex items-center justify-center pt-16 pb-12 px-6 relative overflow-hidden min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(75, 63, 114, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(21, 55, 33, 0.03) 0%, transparent 40%)",
      }}
    >
      {/* Back to Home */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
      >
        <span className="material-symbols-outlined text-base transition-transform group-hover:-translate-x-1">
          arrow_back
        </span>
        Back to Home
      </Link>

      {/* Abstract Shapes */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-tertiary-container/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative">
        {/* Secure Login Badge */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface-container-highest/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-outline-variant/10 shadow-sm whitespace-nowrap">
          <span
            className="material-symbols-outlined text-xs text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "14px" }}
          >
            lock
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary/80">
            Secure Login
          </span>
        </div>

        {/* Login Card */}
        <div className="glass-card p-10 md:p-12 rounded-xl whisper-shadow border border-white/40">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-on-surface-variant font-medium text-sm">
              Access your sanctuary of personalized care.
            </p>
          </div>

          <form className="space-y-6">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-low/40 border border-outline-variant/20 rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-lowest transition-all"
                placeholder="name@example.com"
                type="email"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-widest text-primary-container hover:text-primary transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                className="w-full bg-surface-container-low/40 border border-outline-variant/20 rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/10 focus:bg-surface-container-lowest transition-all"
                placeholder="••••••••"
                type="password"
              />
            </div>

            <button
              className="w-full bg-tertiary-container text-on-tertiary-container py-4 rounded-full font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-md mt-4"
              type="submit"
            >
              Sign In to Account
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              New to Songjog Care?{" "}
              <a
                href="#"
                className="text-primary-container font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>

        {/* Aesthetic Image Anchor */}
        <div className="mt-12 rounded-lg overflow-hidden h-32 w-full whisper-shadow opacity-40 grayscale contrast-125">
          <img
            alt="Architectural Sanctuary"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDazkO_JQj0f_xPnlOM2zi0D5eu3E5zU47K3_6Jg5kdOmxtYytejLYtN1Mdx1MtL1GqCQZAvrM-MjnSySqm8qOILm_0UjfP5wE7Gc0bbuyi3XN0Rnu447TGC423GqtNLsFDBzBXxUvyZhTNONQRA4wEEblBoeeKxyHaLgXkve8vOBoUJXye5LZ3JbgaB6TayEo96EXyBU5i5K4hM1UQLnsvA6ZpTBPgxq8-H8QG1WXOYAwkc0VoPLGLCS5S-3u6sFfSNjGtFMLLzNE"
          />
        </div>
      </div>
    </section>
  );
}
