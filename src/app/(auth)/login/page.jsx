"use client";

import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import { use } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate async login call — replace with real auth logic
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Login data:", data);
  };

  return (
    <section
      className="flex-grow flex items-center justify-center pt-16 pb-12 px-6 relative overflow-hidden min-h-screen"
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

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                  errors.email
                    ? "border-error/60 focus:ring-error/20"
                    : "border-outline-variant/20 focus:ring-primary/10"
                }`}
                placeholder="name@example.com"
                type="email"
              />
              {errors.email && (
                <p className="text-[11px] text-error font-medium px-1 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
                    error
                  </span>
                  {errors.email.message}
                </p>
              )}
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
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
                className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                  errors.password
                    ? "border-error/60 focus:ring-error/20"
                    : "border-outline-variant/20 focus:ring-primary/10"
                }`}
                placeholder="••••••••"
                type="password"
              />
              {errors.password && (
                <p className="text-[11px] text-error font-medium px-1 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
                    error
                  </span>
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              className="w-full bg-tertiary-container text-on-tertiary-container py-4 rounded-full font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-md mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none disabled:scale-100"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin" style={{ fontSize: "18px" }}>
                    progress_activity
                  </span>
                  Signing In…
                </>
              ) : (
                "Sign In to Account"
              )}
            </button>

            {/* Divider */}
            <div className="relative flex items-center gap-4 my-2 pt-2">
              <div className="flex-grow border-t border-outline-variant/20"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 whitespace-nowrap">
                Or Continue With
              </span>
              <div className="flex-grow border-t border-outline-variant/20"></div>
            </div>

            {/* Google Login Button */}
            <button
              className="w-full bg-white/40 hover:bg-white/60 border border-white/40 py-4 rounded-full font-bold text-sm tracking-tight flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-sm group"
              type="button"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-primary/70">Continue with Google</span>
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              New to Songjog Care?{" "}
              <Link
                href="/register"
                className="text-primary-container font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
