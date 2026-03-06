import { Calendar, MapPin, ChevronRight, CheckCircle2, MoreVertical, CreditCard } from "lucide-react";

export default function MyBookingsPage() {
    return (
        <div className="bg-ivory min-h-screen py-24 pb-32">
            <div className="container mx-auto px-6 max-w-4xl">
                <header className="mb-20 space-y-4">
                    <span className="text-terracotta font-bold tracking-[0.3em] uppercase text-xs">Guest Account</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-walnut mt-4">Your Reservations</h1>
                    <p className="text-lg text-walnut/60 font-light pt-4 leading-relaxed max-w-2xl">
                        Welcome back to B&B Belle Arti. Manage your upcoming stays and history in our historic guesthouse.
                    </p>
                </header>

                <div className="space-y-12">
                    {/* Upcoming Bookings */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-serif font-medium border-b border-walnut/5 pb-6">Upcoming Stays</h2>
                        {mockBookings.filter(b => b.status === "CONFIRMED").map((booking) => (
                            <div key={booking.id} className="card-vintage group p-8 flex flex-col md:flex-row gap-10 items-center linen-texture">
                                <div className="w-full md:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-ivory/50">
                                    <img src={booking.roomImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>

                                <div className="flex-grow space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-terracotta uppercase tracking-tighter">Selected Room</span>
                                            <h3 className="text-3xl font-serif text-walnut">{booking.roomName}</h3>
                                            <p className="text-xs font-bold text-walnut/40 uppercase tracking-widest pt-1">{booking.id}</p>
                                        </div>
                                        <div className="flex items-center gap-2 bg-sage/10 text-sage px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest shadow-inner">
                                            <CheckCircle2 size={12} /> {booking.status}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-8 border-t border-walnut/5 pt-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-walnut/40 tracking-[0.2em] block">Check In</label>
                                            <p className="text-sm font-bold text-walnut">{booking.checkIn}</p>
                                        </div>
                                        <div className="space-y-2 text-right">
                                            <label className="text-[10px] font-black uppercase text-walnut/40 tracking-[0.2em] block">Check Out</label>
                                            <p className="text-sm font-bold text-walnut">{booking.checkOut}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center pt-8 border-t border-walnut/5 mt-4">
                                        <div className="flex items-center gap-2 text-walnut/40 text-[10px] font-black uppercase tracking-widest">
                                            <CreditCard size={14} /> Total Paid: ${booking.totalPrice}
                                        </div>
                                        <a href={`/booking/confirmation`} className="text-xs font-bold text-walnut uppercase tracking-widest hover:text-terracotta transition-colors flex items-center gap-2 underline underline-offset-8">
                                            View Details <ChevronRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Past Stays */}
                    <div className="space-y-8 pt-16">
                        <h2 className="text-xl font-serif font-medium border-b border-walnut/5 pb-6">Past Stays</h2>
                        {mockBookings.filter(b => b.status === "COMPLETED").map((booking) => (
                            <div key={booking.id} className="p-8 bg-cream/30 border border-walnut/5 rounded-2xl flex justify-between items-center opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <div className="flex gap-6 items-center">
                                    <div className="w-20 aspect-square rounded-xl overflow-hidden border-2 border-ivory">
                                        <img src={booking.roomImage} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-serif text-walnut">{booking.roomName}</h3>
                                        <p className="text-xs text-walnut/40 font-bold uppercase tracking-widest">{booking.checkIn} – {booking.checkOut}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right space-y-1 hidden md:block">
                                        <p className="text-[10px] font-black text-walnut/40 uppercase tracking-widest">Total Price</p>
                                        <p className="text-sm font-bold text-walnut">${booking.totalPrice}</p>
                                    </div>
                                    <button className="p-4 hover:bg-ivory rounded-full transition-colors">
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mockBookings = [
    {
        id: "RES-77AC9B",
        roomName: "La Stanza dei Pittori",
        roomImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        checkIn: "Mar 15, 2026",
        checkOut: "Mar 18, 2026",
        totalPrice: 349.00,
        status: "CONFIRMED"
    },
    {
        id: "RES-12BD44",
        roomName: "Suite Bergamo Alta",
        roomImage: "https://images.unsplash.com/photo-1595526116035-613209ebd730",
        checkIn: "Jan 10, 2026",
        checkOut: "Jan 12, 2026",
        totalPrice: 290.00,
        status: "COMPLETED"
    }
];
