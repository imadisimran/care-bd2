import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/provider/AuthProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: "Care BD | Architectural Sanctuary for Caregiving",
  description: "Experience a high-end architectural approach to compassion. We provide certified medical assistance and personalized care that turns your home into a safe, healing sanctuary.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="carebd" lang="en" className={`antialiased ${manrope.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-base-100 text-base-content font-body selection:bg-info selection:text-info-content min-h-screen">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
