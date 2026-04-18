import Link from "next/link";
import { CalendarDays, BadgeDollarSign, PackageOpen, ArrowRight } from "lucide-react";
import GoBackButton from "@/components/button/GoBackButton";
import BookingCard from "@/components/card/BookingCard";
import { getMyBookings } from "@/actions/server/booking";

export const metadata = {
    title: "My Bookings | Care BD",
    description: "View and manage all your booked care services on Care BD.",
};

export default async function MyBookingsPage() {
    const res = await getMyBookings();
    const bookings = res.success ? res.data : [];
    const totalSpent = bookings.reduce((acc, b) => acc + b.price, 0);

    return (
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            {/* Back Button */}
            <div className="mb-8">
                <GoBackButton />
            </div>

            {/* Page Header */}
            <div className="mb-12 space-y-3">
                <span className="text-xs font-bold tracking-[0.1em] uppercase text-primary/60">
                    Your History
                </span>
                <h1 className="text-5xl font-extrabold text-primary tracking-tight leading-none">
                    My Bookings
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                    A complete overview of all your scheduled care services with Care BD.
                </p>

                {/* Stats strip */}
                {bookings.length > 0 && (
                    <div className="flex items-center gap-2 pt-2">
                        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {bookings.length} {bookings.length === 1 ? "Booking" : "Bookings"}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-tertiary-container/30 text-tertiary text-xs font-bold px-3 py-1.5 rounded-full">
                            <BadgeDollarSign className="w-3.5 h-3.5" />
                            ৳ {totalSpent.toLocaleString()} Total Spent
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            {bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-6">
                    <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center shadow-inner">
                        <PackageOpen className="w-10 h-10 text-primary/30" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-extrabold text-primary tracking-tight">
                            No Bookings Yet
                        </h2>
                        <p className="text-on-surface-variant max-w-sm">
                            You haven&apos;t booked any care services yet. Explore our services and
                            schedule your first session today.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 bg-tertiary-container text-on-tertiary-container font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-tertiary-container/20"
                    >
                        Explore Services <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {bookings.map((booking) => (
                        <BookingCard key={booking._id} booking={booking} />
                    ))}
                </div>
            )}
        </section>
    );
}
