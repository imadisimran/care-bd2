import { Manrope, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: "Songjog Care | Architectural Sanctuary for Caregiving",
  description: "Experience a high-end architectural approach to compassion. We provide certified medical assistance and personalized care that turns your home into a safe, healing sanctuary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("antialiased", manrope.variable, "font-sans", geist.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
        {children}
      </body>
    </html>
  );
}
