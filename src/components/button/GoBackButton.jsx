"use client"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.back()} className="inline-flex items-center justify-center px-8 py-4 border border-base-300 bg-base-100/50 backdrop-blur-sm text-primary rounded-full font-bold hover:bg-base-100 hover:scale-105 transition-all duration-300 active:scale-95 mt-2 sm:mt-0">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
        </button>
    );
}