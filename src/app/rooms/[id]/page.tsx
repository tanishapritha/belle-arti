import { siteData } from "@/lib/data";
import { Star, CheckCircle2, MapPin, Clock, ShieldCheck, ChevronRight, ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export default function RoomDetailPage({ params }: { params: { id: string } }) {
    const room = siteData.rooms.find(r => r.id === params.id) || siteData.rooms[0];

    return (
        <div className="bg-ivory min-h-screen py-32 pb-48 relative overflow-hidden selection:bg-terracotta selection:text-white">
            {/* Heritage Watermark */}
            <div className="absolute top-0 right-0 p-32 opacity-[0.03] text-walnut pointer-events-none rotate-[-15deg]">
                <div className="text-[200px] font-serif leading-none">BBA</div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 relative z-10">

                    {/* Main Content Side */}
                    <div className="lg:w-2/3 space-y-20">
                        <header className="space-y-6">
                            <div className="flex items-center gap-4 text-terracotta font-black text-[10px] uppercase tracking-[0.4em]">
                                <a href="/rooms" className="hover:underline">Collection</a>
                                <span className="text-walnut/20">/</span>
                                <span className="text-sage">{room.name}</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-serif text-walnut leading-[0.9]">
                                {room.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <div className="flex items-center gap-3 bg-sage/10 text-sage px-6 py-3 rounded-full text-[10px] uppercase font-black tracking-widest border border-sage/5 shadow-inner">
                                    <Star size={14} fill="currentColor" /> {siteData.rating} Rating
                                </div>
                                <div className="flex items-center gap-3 text-walnut/40 text-[10px] uppercase font-black tracking-widest border-l border-walnut/10 pl-8">
                                    <MapPin size={14} className="text-terracotta" /> 150m from GAMeC
                                </div>
                            </div>
                        </header>

                        {/* Premium Immersive Gallery */}
                        <div className="grid grid-cols-6 grid-rows-2 gap-4 aspect-[2/1]">
                            <div className="col-span-4 row-span-2 rounded-[3rem] overflow-hidden border-8 border-cream shadow-2xl relative group">
                                <img src={room.images[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[0.98]" />
                            </div>
                            <div className="col-span-2 rounded-[2rem] overflow-hidden border-4 border-cream shadow-xl relative group">
                                <img src="/images/image copy 5.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="col-span-2 rounded-[2rem] overflow-hidden border-4 border-cream shadow-xl relative group">
                                <img src="/images/image.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>

                        {/* Description and Features */}
                        <div className="grid md:grid-cols-2 gap-16 pt-8">
                            <div className="space-y-10">
                                <h2 className="text-3xl font-serif text-walnut border-b border-walnut/5 pb-10 flex items-center gap-4">
                                    The Space <span className="h-[2px] w-12 bg-sage/20 block" />
                                </h2>
                                <div className="prose prose-walnut max-w-none text-lg text-walnut/70 leading-relaxed font-light space-y-6">
                                    <p>{room.description}</p>
                                    <p>
                                        This charming space on the second floor of our historic building features
                                        classic wood-beamed ceilings and a warm, inviting décor. Every detail has been
                                        curated to provide a peaceful sanctuary after a day of exploring Bergamo's
                                        galleries and museums.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-walnut/30 border-b border-walnut/5 pb-6">Amenities Collection</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {siteData.amenities.map(amenity => (
                                        <div key={amenity} className="flex items-center gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-sage/5 flex items-center justify-center text-sage group-hover:bg-terracotta group-hover:text-ivory transition-all duration-500 shadow-inner">
                                                <Check size={18} />
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-walnut/60 group-hover:text-walnut transition-colors">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reviews Hook */}
                        <div className="pt-24 border-t border-walnut/5 space-y-10">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-walnut/40">From the Guestbook</h3>
                            <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
                                {siteData.reviews.slice(0, 3).map((review, i) => (
                                    <div key={i} className="min-w-[340px] p-10 bg-cream/50 rounded-3xl border border-walnut/5 space-y-4 shadow-xl">
                                        <div className="flex justify-between items-center opacity-40">
                                            <p className="text-[10px] uppercase font-black tracking-widest">{review.name} from {review.country}</p>
                                            <Star size={12} fill="currentColor" />
                                        </div>
                                        <p className="text-md font-serif italic text-walnut/70 leading-relaxed">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking Widget */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 p-12 bg-cream rounded-[4rem] vintage-shadow border-8 border-ivory space-y-12 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-32 opacity-[0.02] text-walnut pointer-events-none">
                                <Clock size={160} />
                            </div>

                            <div className="flex flex-col items-center text-center space-y-2 relative z-10 pb-12 border-b border-walnut/5">
                                <span className="text-[10px] font-black text-terracotta uppercase tracking-[0.4em]">Historical Rate</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-6xl font-serif text-walnut tracking-tighter">${room.pricePerNight}</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-walnut/40 mb-3">/ Night</span>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <h4 className="text-[10px] font-black text-walnut/40 uppercase tracking-widest text-center px-12">Select your dates for availability</h4>
                                <div className="grid grid-cols-1 gap-px bg-walnut/5 rounded-3xl overflow-hidden border border-walnut/5 border-cream shadow-inner group">
                                    {/* Check-in/Out UI Mock */}
                                    <div className="p-8 bg-ivory border-b border-walnut/5 hover:bg-cream transition-colors cursor-pointer">
                                        <label className="text-[8px] font-black uppercase tracking-widest text-walnut/40 block mb-2">Check-In</label>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-bold uppercase tracking-widest">Select Date</p>
                                            <ChevronRight size={14} className="text-terracotta/40" />
                                        </div>
                                    </div>
                                    <div className="p-8 bg-ivory hover:bg-cream transition-colors cursor-pointer">
                                        <label className="text-[8px] font-black uppercase tracking-widest text-walnut/40 block mb-2">Check-Out</label>
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm font-bold uppercase tracking-widest">Select Date</p>
                                            <ChevronRight size={14} className="text-terracotta/40" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-12 pt-8 relative z-10">
                                <a
                                    href={`/booking/${room.id}`}
                                    className="w-full bg-terracotta text-ivory py-6 rounded-3xl flex items-center justify-center gap-6 text-sm font-black uppercase tracking-[0.3em] shadow-2xl shadow-terracotta/30 transition-all hover:scale-[1.02] active:scale-95 group"
                                >
                                    Confirm Stay <ArrowRight size={18} className="group-hover:translate-x-4 transition-transform duration-500" />
                                </a>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-walnut/40 group cursor-help">
                                        <ShieldCheck size={18} className="text-sage" />
                                        <span className="text-[10px] uppercase font-black tracking-widest group-hover:text-sage transition-colors">Historical Heritage Confirmed</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-walnut/40 group cursor-help">
                                        <MapPin size={18} className="text-sage" />
                                        <span className="text-[10px] uppercase font-black tracking-widest group-hover:text-sage transition-colors">2 Min to Carrara Academy Gallery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
