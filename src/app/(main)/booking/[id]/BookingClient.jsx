"use client";

import React, { useState } from 'react';
import { Clock, MapPin, Stethoscope, Timer, Home, CheckCircle2 } from 'lucide-react';
import GoBackButton from '@/components/button/GoBackButton';
import { createBooking, getDistricts } from '@/actions/server/booking';
import { showErrorAlert, showSuccessAlert } from '@/lib/alert';

export default function BookingPageClient({service,divisions}) {
    const [selectedDuration, setSelectedDuration] = useState(1);
    const [division, setDivision] = useState('Select A Division');
    const [district, setDistrict] = useState('Select A Division First');
    const [districts,setDistricts]=useState([])
    const [address, setAddress] = useState('');
    const serviceType=service.tags.find(s=>s.type==='default')

    const handleDivisionChange = async(e) => {
        const selectedDivision = e.target.value;
        setDivision(selectedDivision);
        const districts=await getDistricts(selectedDivision)
        setDistricts(districts)
        setDistrict('Select A District'); 
    };
    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
    };


    const handleBooking=async()=>{
        const bookingData={
            serviceId:service._id,
            duration:selectedDuration,
            division,
            district,
            address
        }
        const res=await createBooking(bookingData)
        if(res.success){
           showSuccessAlert({text:res.message,title:"Success"})
        }else{
            showErrorAlert({text:res.message,title:"Error"})
        }
    }


    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="mb-8">
                <GoBackButton />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Booking Form */}
                <div className="lg:col-span-7 space-y-12">
                    <header className="space-y-4">
                        <span className="text-xs font-bold tracking-[0.1em] uppercase text-primary/60">Professional Support</span>
                        <h1 className="text-5xl font-extrabold text-primary tracking-tight leading-none">Book Your Care Sanctuary</h1>
                        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                            Select your preferred duration and location. Our caregivers provide expert assistance tailored to your environment.
                        </p>
                    </header>

                    <section className="space-y-8">
                        {/* Duration Selection */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold uppercase tracking-wider text-on-surface/80 flex items-center gap-2">
                                <Clock className="w-4 h-4" /> Selection of Duration
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Array.from({ length: 4 }, (_, i) => i + 1).map((duration) => (
                                    <label 
                                        key={duration}
                                        className={`group relative flex items-center p-6 rounded-lg cursor-pointer transition-all border-2 ${
                                            selectedDuration === duration 
                                            ? 'bg-surface-container-high border-primary' 
                                            : 'bg-surface-container-low border-transparent hover:bg-surface-container-high'
                                        }`}
                                    >
                                        <input 
                                            type="radio" 
                                            name="duration" 
                                            className="w-5 h-5 text-primary border-outline-variant focus:ring-primary focus:ring-offset-surface cursor-pointer"
                                            checked={selectedDuration === duration}
                                            onChange={() => setSelectedDuration(duration)}
                                        />
                                        <div className="ml-4">
                                            <span className="block font-bold text-on-surface">{duration} {service.pricePer}</span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="space-y-6 pt-4">
                            <label className="text-sm font-bold uppercase tracking-wider text-on-surface/80 flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Location Details
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <select 
                                    value={division} 
                                    onChange={handleDivisionChange} 
                                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface font-medium cursor-pointer"
                                >
                                    <option disabled={true}>Select A Division</option>
                                    {divisions.map((division,index)=>(
                                        <option key={index} value={division}>{division}</option>
                                    ))}
                                </select>
                                <select 
                                    value={district} 
                                    onChange={handleDistrictChange} 
                                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none text-on-surface font-medium cursor-pointer"
                                >   
                                    {districts.length===0 && <option disabled={true}>Select A Division First</option>}
                                    {districts.length>0 && <option disabled={true}>Select A District</option>}
                                    {districts.map((district,index)=>(
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-semibold text-on-surface-variant" htmlFor="address">Detailed Address</label>
                                    <textarea 
                                        className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none" 
                                        id="address" 
                                        placeholder="House number, street name, landmarks..." 
                                        rows={4}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Summary Sidebar */}
                <aside className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                    <div className="glass-panel p-8 rounded-xl shadow-[0_20px_50px_rgba(52,40,90,0.08)] border border-surface-container-highest/20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 blur-3xl -mr-10 -mt-10"></div>
                        <h2 className="text-2xl font-bold text-primary mb-8 relative">Booking Summary</h2>
                        <div className="space-y-6 mb-10 relative">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Service Type</span>
                                    <p className="font-bold text-on-surface text-sm">{serviceType.text}</p>
                                </div>
                                <Stethoscope className="text-primary/40 w-5 h-5" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Duration</span>
                                    <p className="font-bold text-on-surface text-sm">{selectedDuration} {service.pricePer}</p>
                                </div>
                                <Timer className="text-primary/40 w-5 h-5" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Care Location</span>
                                    <p className="font-bold text-on-surface text-sm">
                                        {division && district ? `${district}, ${division}` : 'Not fully specified yet'}
                                    </p>
                                </div>
                                <Home className="text-primary/40 w-5 h-5" />
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-surface-container-highest space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-semibold text-on-surface-variant">Total Cost</span>
                                <div className="text-right">
                                    <span className="text-4xl font-extrabold text-primary tracking-tight">৳ {selectedDuration * service.price}</span>
                                    <p className="text-[10px] text-on-surface-variant mt-1 uppercase tracking-tighter">All inclusive of taxes</p>
                                </div>
                            </div>
                            <button 
                                onClick={handleBooking} 
                                disabled={division === 'Select A Division' || district === 'Select A Division First' || district === 'Select A District' || !address.trim()}
                                className="w-full bg-tertiary-container text-on-tertiary-container py-5 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition-all shadow-lg shadow-tertiary-container/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <CheckCircle2 className="w-5 h-5" />
                                Confirm Booking
                            </button>
                            <p className="text-center text-xs text-on-surface-variant/70 italic mt-6">
                                By confirming, you agree to our terms of clinical sanctuary care.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
