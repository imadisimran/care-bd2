import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="relative pt-20">
                {children}
            </main>
            <Footer />
        </>
    );
}