"use client";

import useAuth from "@/hooks/useAuth";
import { postUser } from "@/actions/server/auth";


import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { showErrorAlert, showSuccessAlert } from "@/lib/alert";
import SocialLogin from "@/components/button/SocialLogin";


export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams=useSearchParams()
  const callbackUrl=searchParams.get("callbackUrl") || "/"
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm();

  const router = useRouter();

  const password = useWatch({
    control,
    name: "password",
    defaultValue:""
  });

  const {registerUser,updateUser}=useAuth()

  const handleRegistration = async (data) => {
    try{
      const result = await registerUser(data.email,data.password)
      const idToken=await result.user.getIdToken()
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      const [updateUserResult,postUserResult]=await Promise.all([
        updateUser(data.name),
        postUser(data)
      ]);

      
      if(response.ok && postUserResult.success){
        router.refresh()
        router.push(callbackUrl)
      }

      // console.log(result)

      await showSuccessAlert({
        title: "Welcome! 🎉",
        html: `
          <p style="color:var(--color-on-surface-variant);font-size:0.875rem;margin:0;">
            ${postUserResult.message}<br/>
            <strong style="color:var(--color-primary)">${data.name}</strong>, your journey of personalised care begins now.
          </p>
        `,
        confirmButtonText: "Ok",
      });

      router.push("/");
    }catch(error){
      showErrorAlert({
        title: "Registration Failed",
        text: error?.message || "Something went wrong. Please try again.",
      });
    }
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
        {/* Secure Register Badge */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface-container-highest/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-outline-variant/10 shadow-sm whitespace-nowrap">
          <span
            className="material-symbols-outlined text-xs text-tertiary"
            style={{ fontVariationSettings: "'FILL' 1", fontSize: "14px" }}
          >
            how_to_reg
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-tertiary/80">
            Secure Registration
          </span>
        </div>

        {/* Register Card */}
        <div className="glass-card p-10 md:p-12 rounded-xl whisper-shadow border border-white/40">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-2">
              Join Us
            </h1>
            <p className="text-on-surface-variant font-medium text-sm">
              Begin your journey of personalized care today.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleRegistration)} noValidate>
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                Full Name
              </label>
              <input
                {...register("name", {
                  required: "Full name is required.",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters.",
                  },
                })}
                className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                  errors.name
                    ? "border-error/60 focus:ring-error/20"
                    : "border-outline-variant/20 focus:ring-primary/10"
                }`}
                placeholder="John Doe"
                type="text"
              />
              {errors.name && (
                <p className="text-[11px] text-error font-medium px-1 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
                    error
                  </span>
                  {errors.name.message}
                </p>
              )}
            </div>

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

            {/* NID Number */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                NID Number
              </label>
              <input
                {...register("nid", {
                  required: "NID number is required.",
                  // pattern: {
                  //   value: /^\d{10}(\d{7})?$/,
                  //   message: "NID must be 10 or 17 digits.",
                  // },
                })}
                className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                  errors.nid
                    ? "border-error/60 focus:ring-error/20"
                    : "border-outline-variant/20 focus:ring-primary/10"
                }`}
                placeholder="1234567890"
                type="text"
              />
              {errors.nid && (
                <p className="text-[11px] text-error font-medium px-1 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
                    error
                  </span>
                  {errors.nid.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                Password
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  })}
                  className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 pr-12 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                    errors.password
                      ? "border-error/60 focus:ring-error/20"
                      : "border-outline-variant/20 focus:ring-primary/10"
                  }`}
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors focus:outline-none flex items-center justify-center p-1"
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

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: "Please confirm your password.",
                    validate: (value) =>
                      value === password || "Passwords do not match.",
                  })}
                  className={`w-full bg-surface-container-low/40 border rounded-lg px-4 py-3.5 pr-12 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:bg-surface-container-lowest transition-all ${
                    errors.confirmPassword
                      ? "border-error/60 focus:ring-error/20"
                      : "border-outline-variant/20 focus:ring-primary/10"
                  }`}
                  placeholder="••••••••"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors focus:outline-none flex items-center justify-center p-1"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirmPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-[11px] text-error font-medium px-1 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
                    error
                  </span>
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              className="w-full bg-tertiary-container text-on-tertiary-container py-4 rounded-full font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-md mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none disabled:scale-100 cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin" style={{ fontSize: "18px" }}>
                    progress_activity
                  </span>
                  Creating Account…
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Social Login */}
            <SocialLogin />

          </form>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 text-center">
            <p className="text-sm text-on-surface-variant font-medium">
              Already have an account?{" "}
              <Link
                href={`/login?callbackUrl=${callbackUrl}`}
                className="text-primary-container font-bold hover:underline decoration-2 underline-offset-4 ml-1"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
