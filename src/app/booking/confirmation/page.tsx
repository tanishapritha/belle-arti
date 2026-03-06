import { CheckCircle2, ArrowRight, Calendar, MapPin, Mail, Coffee } from "lucide-react";
import Link from "next/link";

export default function ConfirmationPage() {
    return (
        <div className="bg-ivory min-h-screen py-32 pb-48">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="flex justify-center mb-12">
                    <div className="w-24 h-24 rounded-full bg-sage/10 text-sage flex items-center justify-center shadow-2xl shadow-sage/20 border-4 border-sage/5">
                        <CheckCircle2 size={48} />
                    </div>
                </div>

                <header className="space-y-6 mb-16">
                    <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs">Reservation Confirmed</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-walnut leading-tight">Grazie! Your stay <br /> <span className="italic text-sage">is reserved</span>.</h1>
                    <p className="text-lg text-walnut/60 font-light max-w-2xl mx-auto leading-relaxed">
                        We've sent a detailed confirmation to your email. We look forward to welcoming you
                        to our historic building in Bergamo.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                    <div className="bg-cream/50 p-12 rounded-3xl vintage-shadow border border-walnut/5 space-y-12 linen-texture relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <MapPin size={120} />
                        </div>

                        <div className="space-y-2 relative z-10">
                            <label className="text-[10px] font-black uppercase text-terracotta tracking-widest">Property Address</label>
                            <h3 className="text-2xl font-serif text-walnut">B&B Belle Arti</h3>
                            <p className="text-sm font-bold text-walnut/60 uppercase tracking-tighter">Via San Tomaso 46, Bergamo, 24121, Italy</p>
                        </div>

                        <div className="space-y-8 pt-10 border-t border-walnut/5 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center text-sage">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-walnut/40 tracking-widest">Check-In</p>
                                    <p className="text-sm font-bold">Mar 15, 2026 at 3:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center text-terracotta">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-walnut/40 tracking-widest">Check-Out</p>
                                    <p className="text-sm font-bold">Mar 18, 2026 at 11:30 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 py-10 px-8">
                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-walnut border-b border-walnut/10 pb-4">Next Steps</h4>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-sage/10 text-sage flex items-center justify-center flex-shrink-0 mt-1">
                                        <Mail size={12} />
                                    </div>
                                    <p className="text-sm text-walnut/70 leading-relaxed font-medium">Check your inbox for a pre-arrival guide and local gallery tips.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-sage/10 text-sage flex items-center justify-center flex-shrink-0 mt-1">
                                        <Coffee size={12} />
                                    </div>
                                    <p className="text-sm text-walnut/70 leading-relaxed font-medium">Buffet breakfast is served daily from 7:30 AM to 10:00 AM.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-8 flex flex-col gap-4">
                            <Link href="/my-bookings" className="btn-terracotta py-4 text-center uppercase text-xs tracking-widest font-black flex items-center justify-center gap-4 shadow-xl">
                                View my bookings <ArrowRight size={14} />
                            </Link>
                            <Link href="/" className="text-xs uppercase font-bold text-walnut/40 hover:text-terracotta transition-colors py-4 tracking-widest text-center">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
