"use client"
import { sendEmail } from '@/actions/server/contact';
import { showSuccessAlert } from '@/lib/alert';
import React from 'react'
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful,},
    reset,
  } = useForm();

  async function onSubmit(data) {
    const result = await sendEmail(data)
    if(result.success){
        showSuccessAlert({title:"Message sent successfully",text:result.message})
        reset();
    }else{
        showErrorAlert({title:"Failed to send message",text:result.message})
    }
  }
  return (
    <div className="lg:col-span-7 bg-base-100 p-8 md:p-12 rounded-xl shadow-[0_10px_40px_rgba(27,28,25,0.04)]">
          <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                <input
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none"
                  placeholder="Your Name"
                  type="text"
                  {...register("fullName", { required: "Full name is required" })}
                />
                {errors.fullName && (
                  <p className="text-xs text-error font-medium">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                <input
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none"
                  placeholder="email@example.com"
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-error font-medium">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
                <input
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+\d\s()\-]{7,20}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-xs text-error font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Service Interest */}
              <div className="space-y-1">
                <label className="text-sm font-bold text-primary uppercase tracking-wider">Service Interest</label>
                <select
                  className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 appearance-none outline-none"
                  {...register("service", {
                    validate: (v) => v !== "Select a Service" || "Please select a service",
                  })}
                >
                  <option>Select a Service</option>
                  <option>Elderly Care</option>
                  <option>Post-Operative Support</option>
                  <option>Chronic Illness Management</option>
                  <option>Specialized Therapy</option>
                </select>
                {errors.service && (
                  <p className="text-xs text-error font-medium">{errors.service.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">How can we help?</label>
              <textarea
                className="w-full bg-base-100 border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-base-100 transition-all duration-300 outline-none"
                placeholder="Tell us about your needs..."
                rows="4"
                {...register("message", {
                  required: "Please tell us how we can help",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
              ></textarea>
              {errors.message && (
                <p className="text-xs text-error font-medium">{errors.message.message}</p>
              )}
            </div>

            <button
              className="w-full bg-accent text-accent-content py-4 rounded-full font-bold text-lg hover:scale-[1.02] transition-transform duration-300 active:scale-95 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
  )
}
