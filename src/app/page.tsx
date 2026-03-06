"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Users, MapPin, Coffee, ShieldCheck, Wifi, Tv, Wind, Star, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-[20s]"
                    style={{ backgroundImage: "url('/images/image copy.png')" }}
                />

                <div className="relative z-20 text-center text-ivory max-w-5xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <div className="h-[1px] w-8 bg-terracotta" />
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-terracotta">Est. 18th Century</span>
                        <div className="h-[1px] w-8 bg-terracotta" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1]"
                    >
                        Historic Elegance <br /> <span className="italic text-sage font-light">in Northern Italy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl font-light mb-12 tracking-wide text-ivory/90 max-w-2xl mx-auto leading-relaxed"
                    >
                        Located steps from Accademia Carrara and GAMeC, Belle Arti offers
                        authentic Bergamo living under timeless wood-beamed ceilings.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-12 text-sm uppercase tracking-[0.2em] font-bold"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-3xl font-serif text-sage">9.1</span>
                            <span className="text-[10px] text-ivory/60">Location Gold</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-3xl font-serif text-sage">9.3</span>
                            <span className="text-[10px] text-ivory/60">Spotless Clean</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-3xl font-serif text-sage">8.8</span>
                            <span className="text-[10px] text-ivory/60">Guest Rating</span>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-ivory/40"
                >
                    <div className="w-[1px] h-16 bg-ivory/20 mx-auto" />
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black mt-4 block">Scroll</span>
                </motion.div>
            </section>

            {/* Intro Section - The Heritage */}
            <section className="py-40 bg-ivory relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 -z-10 translate-x-1/2 skew-x-12" />
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative group">
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden vintage-shadow border-8 border-cream relative z-10 transition-transform duration-1000 group-hover:scale-[0.98]">
                                <img src="/images/image copy 6.png" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-2/3 aspect-square rounded-[2rem] overflow-hidden border-8 border-cream shadow-2xl z-20 transition-transform duration-1000 group-hover:translate-x-4">
                                <img src="/images/image copy 7.png" className="w-full h-full object-cover" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute top-12 -left-8 bg-terracotta text-ivory p-6 rounded-2xl shadow-xl z-30 font-serif text-center rotate-[-12deg]">
                                <span className="block text-4xl leading-none">8.8</span>
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-80 mt-1 block">Rating</span>
                            </div>
                        </div>

                        <div className="space-y-12 pl-12">
                            <div className="space-y-4">
                                <span className="text-terracotta font-black tracking-[0.4em] uppercase text-[10px]">Since the 18th Century</span>
                                <h2 className="text-5xl md:text-7xl font-serif text-walnut leading-none">A House <br />of <span className="italic text-sage">Arts & History.</span></h2>
                            </div>
                            <p className="text-xl text-walnut/70 leading-relaxed font-light">
                                {siteData.description}
                            </p>

                            <div className="grid grid-cols-2 gap-10 pt-4">
                                {siteData.amenities.slice(0, 4).map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center group-hover:bg-sage group-hover:text-ivory transition-all duration-500 shadow-inner">
                                            <div className="w-6 h-6 border-[1px] border-current rounded-full" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-walnut/60">{amenity}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <a href="/rooms" className="group inline-flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] text-terracotta hover:text-walnut transition-colors">
                                    Explore the collection <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms Showcase */}
            <section className="py-40 bg-[#FAF7F2] relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="space-y-4">
                            <span className="text-terracotta font-black tracking-[0.4em] uppercase text-[10px]">Our Sanctuaries</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-walnut">Charming Spaces</h2>
                        </div>
                        <p className="text-walnut/40 max-w-xs text-[10px] font-black uppercase tracking-widest leading-relaxed">
                            Every detail is curated to reflect the rich heritage of Bergamo under authentic historical architectural elements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {siteData.rooms.map((room, idx) => (
                            <motion.div
                                key={room.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/20 to-transparent z-20 transition-opacity duration-700 group-hover:opacity-80" />
                                <img src={room.images[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />

                                <div className="absolute bottom-0 left-0 p-10 z-30 space-y-4 w-full">
                                    <span className="text-[10px] font-black text- teracota uppercase tracking-[0.4em] block drop-shadow-md text-terracotta">From ${room.pricePerNight}</span>
                                    <h3 className="text-3xl font-serif text-ivory group-hover:translate-x-2 transition-transform duration-500">{room.name}</h3>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                        <span className="text-[10px] font-bold text-ivory/60 uppercase tracking-widest">{room.maxGuests} Guests</span>
                                        <span className="text-[10px] font-bold text-ivory/60 uppercase tracking-widest">En-suite</span>
                                    </div>
                                    <div className="pt-6">
                                        <a href={`/rooms/${room.id}`} className="w-12 h-12 rounded-full border border-ivory/30 flex items-center justify-center text-ivory hover:bg-ivory hover:text-walnut transition-all duration-500">
                                            <ChevronRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ratings & Reviews - Classy Dark Strip */}
            <section className="bg-walnut py-40 text-ivory overflow-hidden relative">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none rotate-12">
                    <Star size={400} fill="currentColor" />
                </div>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-24">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="space-y-8">
                                <span className="text-terracotta font-black tracking-[0.4em] uppercase text-[10px]">What Guests Say</span>
                                <h2 className="text-5xl md:text-6xl font-serif leading-tight">Heritage Hospitality <span className="italic text-sage">Perfected.</span></h2>
                                <div className="flex items-center gap-6">
                                    <div className="text-7xl font-serif text-sage">{siteData.rating}</div>
                                    <div className="space-y-1">
                                        <div className="flex text-terracotta">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <p className="text-[10px] uppercase font-black tracking-widest text-ivory/40">Highly Rated on Booking.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {Object.entries(siteData.ratingBreakdown).slice(0, 4).map(([key, val]) => (
                                    <div key={key} className="space-y-2 group">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest group-hover:text-terracotta transition-colors">
                                            <span className="opacity-40 uppercase">{key}</span>
                                            <span className="text-sage">{val}</span>
                                        </div>
                                        <div className="w-full h-[1px] bg-ivory/10 relative">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-sage transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(138,158,122,0.8)]"
                                                style={{ width: `${(val as number) * 10}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Review Cards Scroll */}
                        <div className="flex gap-10 overflow-x-auto pb-12 scrollbar-hide snap-x">
                            {siteData.reviews.map((review, idx) => (
                                <div key={idx} className="min-w-[400px] bg-ivory/[0.03] border border-ivory/5 p-12 rounded-[3rem] space-y-8 snap-center hover:bg-ivory/[0.05] transition-all duration-500">
                                    <div className="flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center text-sage font-serif text-xl">
                                            {review.rating}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-ivory/20">{review.country}</span>
                                    </div>
                                    <p className="text-xl font-light italic leading-relaxed text-ivory/80">
                                        "{review.text}"
                                    </p>
                                    <div className="pt-6 border-t border-ivory/5">
                                        <p className="text-sm font-bold tracking-widest uppercase">{review.name}</p>
                                        <p className="text-[10px] text-ivory/20 uppercase font-black tracking-widest mt-1">Verified Stay</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Modern Location CTA */}
            <section className="py-40 bg-cream relative">
                <div className="container mx-auto px-6 text-center space-y-12">
                    <MapPin size={48} className="mx-auto text-terracotta/40" />
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-5xl font-serif text-walnut">At the Heart of Bergamo's Art</h2>
                        <p className="text-xl text-walnut/60 font-light leading-relaxed uppercase tracking-tighter">
                            {siteData.address}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <div className="px-10 py-6 bg-walnut text-ivory rounded-2xl flex items-center gap-6 group cursor-pointer hover:bg-terracotta transition-all duration-500 shadow-2xl">
                            <div className="space-y-1 text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Walk Score</p>
                                <p className="text-2xl font-serif">150m to GAMeC</p>
                            </div>
                            <ChevronRight />
                        </div>
                        <div className="px-10 py-6 bg-ivory border border-walnut/5 rounded-2xl flex items-center gap-6 group cursor-pointer hover:border-terracotta transition-all duration-500 shadow-xl">
                            <div className="space-y-1 text-left">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">History</p>
                                <p className="text-2xl font-serif text-walnut">18th Century Building</p>
                            </div>
                            <ChevronRight className="text-terracotta" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Ensure you use raw paths for images since they are in /public (or mapped to /images)
// In Next.js, files in /public/images/xxx.png are accessed as /images/xxx.png
