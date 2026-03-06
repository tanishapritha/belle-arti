import { Calendar, Users, ArrowLeft, ShieldCheck, CheckCircle2, Lock, CreditCard } from "lucide-react";
import Image from "next/image";

export default function BookingPage({ params }: { params: { roomId: string } }) {
    // Mock data
    const roomId = params.roomId;
    const roomName = roomId === "suite" ? "Suite Bergamo Alta" :
        roomId === "muses" ? "Il Salotto delle Muse" :
            "La Stanza dei Pittori";
    const price = roomId === "suite" ? 145 : roomId === "muses" ? 95 : 108;
    const nights = 3;
    const tax = 12.50;
    const total = (price * nights) + 25 + tax;

    return (
        <div className="bg-ivory min-h-screen py-24 pb-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <a href={`/rooms/${roomId}`} className="inline-flex items-center gap-2 text-walnut/60 hover:text-terracotta transition-colors mb-12 text-sm font-bold uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to room
                </a>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Form Side */}
                    <div className="space-y-16">
                        <header className="space-y-4">
                            <h1 className="text-5xl font-serif text-walnut">Complete Your Reservation</h1>
                            <p className="text-walnut/60 font-light text-lg">
                                Almost there. Please review your details and confirm your stay in the historic center of Bergamo.
                            </p>
                        </header>

                        {/* Step 1: Trip Info */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-walnut/10 pb-4">
                                <span className="w-8 h-8 rounded-full bg-walnut text-ivory flex items-center justify-center font-serif">1</span>
                                <h2 className="text-xl font-serif font-medium">Your Trip</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-walnut/40 tracking-[0.2em] block">Dates</label>
                                    <p className="text-sm font-bold text-walnut">Mar 15 – Mar 18, 2026</p>
                                </div>
                                <div className="space-y-2 text-right">
                                    <label className="text-[10px] font-black uppercase text-walnut/40 tracking-[0.2em] block">Guests</label>
                                    <p className="text-sm font-bold text-walnut">2 Adults</p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Payment Mock */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-walnut/10 pb-4">
                                <span className="w-8 h-8 rounded-full bg-walnut text-ivory flex items-center justify-center font-serif">2</span>
                                <h2 className="text-xl font-serif font-medium">Payment</h2>
                            </div>

                            <div className="bg-cream/50 p-8 rounded-2xl border border-walnut/5 space-y-6 vintage-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-walnut/40 flex items-center gap-2">
                                        <Lock size={12} /> Secure Payment via Stripe
                                    </span>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-5 bg-terracotta/20 rounded-md" />
                                        <div className="w-8 h-5 bg-terracotta/20 rounded-md" />
                                        <div className="w-8 h-5 bg-terracotta/20 rounded-md" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-ivory rounded-xl border border-walnut/10">
                                        <label className="block text-[10px] font-black uppercase text-walnut/40 tracking-widest mb-1">Card Number</label>
                                        <div className="flex items-center gap-3">
                                            <CreditCard size={18} className="text-walnut/20" />
                                            <input type="text" placeholder="●●●● ●●●● ●●●● ●●●●" className="bg-transparent w-full focus:outline-none text-sm" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-ivory rounded-xl border border-walnut/10">
                                            <label className="block text-[10px] font-black uppercase text-walnut/40 tracking-widest mb-1">Expiry Date</label>
                                            <input type="text" placeholder="MM / YY" className="bg-transparent w-full focus:outline-none text-sm" />
                                        </div>
                                        <div className="p-4 bg-ivory rounded-xl border border-walnut/10">
                                            <label className="block text-[10px] font-black uppercase text-walnut/40 tracking-widest mb-1">CVV</label>
                                            <input type="text" placeholder="123" className="bg-transparent w-full focus:outline-none text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Special Requests */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 border-b border-walnut/10 pb-4">
                                <span className="w-8 h-8 rounded-full bg-walnut text-ivory flex items-center justify-center font-serif">3</span>
                                <h2 className="text-xl font-serif font-medium">Special Requests</h2>
                            </div>
                            <textarea
                                rows={4}
                                className="w-full bg-cream border border-walnut/10 rounded-2xl p-6 focus:outline-none focus:ring-1 focus:ring-terracotta text-sm placeholder:italic"
                                placeholder="Tell us about airport shuttle needs, dietary preferences, or arrival time..."
                            />
                        </div>

                        <button className="w-full btn-terracotta py-6 rounded-2xl flex items-center justify-center gap-6 text-sm font-black uppercase tracking-[0.3em] shadow-2xl shadow-terracotta/30 group">
                            Confirm Reservation <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <p className="text-[10px] text-center text-walnut/40 font-bold uppercase tracking-widest leading-relaxed px-10">
                            By clicking "Confirm Reservation" you agree to our terms of service, quiet hours (8pm-8am), and cancellation policy.
                        </p>
                    </div>

                    {/* Details Side */}
                    <div className="lg:pl-20">
                        <div className="sticky top-32 p-10 bg-cream rounded-3xl border border-walnut/10 shadow-xl overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <CheckCircle2 size={120} />
                            </div>

                            <div className="flex gap-6 items-center mb-10 pb-10 border-b border-walnut/5">
                                <div className="w-32 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-ivory">
                                    <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-terracotta uppercase tracking-tighter">Selected Stay</span>
                                    <h3 className="text-2xl font-serif text-walnut">{roomName}</h3>
                                    <p className="text-xs text-walnut/40 font-bold uppercase tracking-widest">B&B Belle Arti Bergamo</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-walnut/40 uppercase tracking-widest">Price Summary</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-walnut/60">${price} x {nights} nights</span>
                                        <span className="text-walnut font-bold">${price * nights}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-walnut/60">Cleaning fee</span>
                                        <span className="text-walnut font-bold">$25.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-walnut/60">Occupancy taxes</span>
                                        <span className="text-walnut font-bold">${tax}</span>
                                    </div>
                                    <div className="flex justify-between pt-6 mt-6 border-t border-walnut/5">
                                        <span className="text-lg font-serif">Total (USD)</span>
                                        <span className="text-2xl font-serif text-terracotta font-black tracking-tight">${total}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 space-y-4">
                                <div className="bg-sage/5 p-6 rounded-2xl border border-sage/10 space-y-4">
                                    <div className="flex items-center gap-3 text-sage">
                                        <ShieldCheck size={18} />
                                        <span className="text-xs font-bold uppercase tracking-widest">Belle Arti Guarantee</span>
                                    </div>
                                    <p className="text-xs text-walnut/60 leading-relaxed italic">
                                        "We ensure every guest experiences the true heritage of Bergamo with modern comfort and hospitality."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
