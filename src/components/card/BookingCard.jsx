import Link from "next/link";
import { CalendarDays, MapPin, Clock, Stethoscope, BadgeDollarSign, ArrowRight } from "lucide-react";

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BookingCard({ booking }) {
    const { title, price, pricePer, duration, address, createdAt, serviceId, status } = booking;

    const getStatusStyles = (status) => {
        const s = status?.toLowerCase();
        if (s === 'confirmed') return 'bg-accent/20 text-success border-accent/30';
        if (s === 'pending') return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
        if (s === 'completed') return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
        if (s === 'canceled' || s === 'cancelled') return 'bg-error/10 text-error border-error/20';
        return 'bg-primary/20 text-primary border-primary/30';
    };

    return (
        <article className="glass-panel rounded-2xl border border-base-300/20 shadow-[0_8px_32px_rgba(52,40,90,0.06)] overflow-hidden relative hover:-translate-y-1 transition-all duration-300">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-info/10 blur-3xl -mr-10 -mt-10 pointer-events-none" />

            {/* Card Header */}
            <div className="bg-primary px-7 py-5 flex items-start justify-between gap-4 relative">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-content/50 block">
                            Booked Service
                        </span>
                        {status && (
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border ${getStatusStyles(status)} transition-colors`}>
                                {status}
                            </span>
                        )}
                    </div>
                    <h2 className="text-lg font-extrabold text-primary-content leading-snug">
                        {title}
                    </h2>
                </div>
                <Stethoscope className="w-6 h-6 text-primary-content/40 shrink-0 mt-1" />
            </div>

            {/* Card Body */}
            <div className="p-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Duration */}
                    <div className="flex items-start gap-3 bg-base-100 rounded-xl p-4">
                        <Clock className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                                Duration
                            </span>
                            <p className="text-sm font-bold text-base-content mt-0.5">
                                {duration} {pricePer}
                            </p>
                        </div>
                    </div>

                    {/* Booked On */}
                    <div className="flex items-start gap-3 bg-base-100 rounded-xl p-4">
                        <CalendarDays className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                                Booked On
                            </span>
                            <p className="text-sm font-bold text-base-content mt-0.5">
                                {formatDate(createdAt)}
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 bg-base-100 rounded-xl p-4 sm:col-span-2">
                        <MapPin className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block">
                                Care Location
                            </span>
                            <p className="text-sm font-bold text-base-content mt-0.5">
                                {address.district}, {address.division}
                            </p>
                            {address.address && (
                                <p className="text-xs text-neutral mt-0.5 leading-relaxed">
                                    {address.address}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer: Price + Link */}
                <div className="pt-5 border-t border-base-300 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <BadgeDollarSign className="w-5 h-5 text-accent/70" />
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 block leading-none">
                                Total Paid
                            </span>
                            <span className="text-2xl font-extrabold text-primary tracking-tight">
                                ৳ {price.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <Link
                        href={`/services/${serviceId}`}
                        className="flex items-center gap-2 bg-accent text-accent-content text-sm font-bold px-5 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-md shadow-accent/20"
                    >
                        View Service <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
