"use client";

import useAuth from "@/hooks/useAuth";
import { showErrorAlert, showSuccessAlert } from "@/lib/alert";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "@/components/button/SocialLogin";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams=useSearchParams()
  const callbackUrl=searchParams.get("callbackUrl") || "/"
  const router=useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const {signIn}=useAuth()

  const handleLogin = async (data) => {
    try{
      const result = await signIn(data.email,data.password)
      const idToken=await result.user.getIdToken()
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      if(response.ok){
        showSuccessAlert({title:"Login Successful",text:"Welcome back!"})
        router.push(callbackUrl)
      }
    }catch(error){
      console.log(error)
      showErrorAlert({title:"Login Failed",text:error.message})
  }
}

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
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative">
        {/* Secure Login Badge */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-base-300/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-base-300/10 shadow-sm whitespace-nowrap">
          <span
            className="material-symbols-outlined text-xs text-accent"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "14px" }}
          >
            lock
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent/80">
            Secure Login
          </span>
        </div>

        {/* Login Card */}
        <div className="glass-card p-10 md:p-12 rounded-xl whisper-shadow border border-white/40">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Welcome Back
            </h1>
            <p className="text-neutral font-medium text-sm">
              Access your sanctuary of personalized care.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)} noValidate>
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
                className={`w-full bg-base-100/40 border rounded-lg px-4 py-3.5 text-base-content placeholder:text-neutral focus:outline-none focus:ring-2 focus:bg-base-100 transition-all ${
                  errors.email
                    ? "border-error/60 focus:ring-error/20"
                    : "border-base-300/20 focus:ring-primary/10"
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
                  className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  })}
                  className={`w-full bg-base-100/40 border rounded-lg px-4 py-3.5 pr-12 text-base-content placeholder:text-neutral focus:outline-none focus:ring-2 focus:bg-base-100 transition-all ${
                    errors.password
                      ? "border-error/60 focus:ring-error/20"
                      : "border-base-300/20 focus:ring-primary/10"
                  }`}
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral hover:text-primary transition-colors focus:outline-none flex items-center justify-center p-1"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
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
              className="w-full bg-accent text-accent-content py-4 rounded-full font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-md mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none disabled:scale-100 cursor-pointer"
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

            {/* Social Login */}
            <SocialLogin />

          </form>

          <div className="mt-10 pt-8 border-t border-base-300/10 text-center">
            <p className="text-sm text-neutral font-medium">
              New to Care BD?{" "}
              <Link
                href={`/register?callbackUrl=${callbackUrl||"/"}`}
                className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1"
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
