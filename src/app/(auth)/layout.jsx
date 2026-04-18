import { Manrope } from "next/font/google";
import "../globals.css";
import { Suspense } from "react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Authentication | Care BD",
  description: "Secure authentication for Care BD services.",
};

export default function AuthLayout({ children }) {
  return (
   <Suspense fallback={<div>Loading...</div>}>
     <div className="bg-base-100 text-base-content font-body selection:bg-info selection:text-info-content min-h-screen flex flex-col">
      {children}
    </div>
   </Suspense>
  );
}
