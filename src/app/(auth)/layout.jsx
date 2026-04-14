import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Authentication | Songjog Care",
  description: "Secure authentication for Songjog Care services.",
};

export default function AuthLayout({ children }) {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      {children}
    </div>
  );
}
