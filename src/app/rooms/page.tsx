import { Calendar, Users, MapPin, CheckCircle2, ArrowRight, Shield, Utensils, Zap, Wind } from "lucide-react";
import { siteData } from "@/lib/data";

export default function RoomsPage() {
    return (
        <div className="bg-ivory min-h-screen py-32 pb-48 relative overflow-hidden">
            {/* Decorative Heritage Element */}
            <div className="absolute top-0 right-0 p-32 opacity-[0.03] text-walnut pointer-events-none rotate-[-15deg]">
                <div className="text-[200px] font-serif leading-none">BBA</div>
            </div>

            <div className="container mx-auto px-6">
                <header className="mb-32 space-y-8 max-w-3xl">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-terracotta" />
                        <span className="text-terracotta font-black tracking-[0.4em] uppercase text-[10px]">Accommodations</span>
                        <div className="h-[2px] w-12 bg-terracotta" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif text-walnut mt-4 leading-[0.9]">
                        Restful retreats in <br /> <span className="italic text-sage font-light"> Bergamo Historic Center</span>
                    </h1>
                    <p className="text-xl text-walnut/60 leading-relaxed font-light pt-6">
                        Explore our curated selection of four unique spaces, each honoring 18th-century architectural
                        heritage with modern Northern Italian comfort.
                    </p>
                </header>

                <div className="space-y-40">
                    {siteData.rooms.map((room, idx) => (
                        <div
                            key={room.id}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center relative group`}
                        >
                            {/* Photo Area */}
                            <div className="lg:w-[55%] relative">
                                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden vintage-shadow border-8 border-cream transition-transform duration-1000 group-hover:scale-[0.98]">
                                    <img src={room.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s] ease-out" />
                                </div>
                                {/* Room Price Badge */}
                                <div className="absolute -top-10 -right-10 bg-sage p-10 rounded-full text-ivory flex flex-col items-center justify-center vintage-shadow z-20 group-hover:scale-110 group-hover:bg-terracotta transition-all duration-700">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">From</span>
                                    <span className="text-3xl font-serif leading-none mt-1">${room.pricePerNight}</span>
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="lg:w-[45%] space-y-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-walnut/40">
                                        <Users size={14} /> Max {room.maxGuests} Guests
                                        <span className="w-1 h-1 rounded-full bg-terracotta" />
                                        <CheckCircle2 size={14} className="text-sage" /> En-suite Bathroom
                                    </div>
                                    <h3 className="text-5xl font-serif text-walnut group-hover:text-terracotta transition-colors duration-500 leading-tight">
                                        {room.name}
                                    </h3>
                                </div>

                                <p className="text-lg text-walnut/70 leading-relaxed font-light">
                                    {room.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 border-t border-walnut/5 pt-10">
                                    <div className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <Wind size={20} className="text-sage" />
                                        <span className="text-xs uppercase font-black tracking-widest text-walnut/60">Air Conditioning</span>
                                    </div>
                                    <div className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity delay-75">
                                        <Zap size={20} className="text-sage" />
                                        <span className="text-xs uppercase font-black tracking-widest text-walnut/60">Free High-speed WiFi</span>
                                    </div>
                                    <div className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity delay-150">
                                        <Utensils size={20} className="text-sage" />
                                        <span className="text-xs uppercase font-black tracking-widest text-walnut/60">Shared Kitchen Access</span>
                                    </div>
                                    <div className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity delay-200">
                                        <Shield size={20} className="text-sage" />
                                        <span className="text-xs uppercase font-black tracking-widest text-walnut/60">Private Safe In-room</span>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <a
                                        href={`/rooms/${room.id}`}
                                        className="group/btn relative px-12 py-5 bg-walnut text-ivory inline-flex items-center gap-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] overflow-hidden hover:bg-terracotta transition-all duration-700 shadow-2xl shadow-walnut/20"
                                    >
                                        <span className="relative z-10">Reserve This Room</span>
                                        <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-4 transition-transform duration-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
