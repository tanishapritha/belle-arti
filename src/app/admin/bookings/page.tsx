import { CalendarCheck, Search, Filter, MoreVertical, CheckCircle2, AlertCircle, Trash2, Edit } from "lucide-react";

export default function AdminBookingsPage() {
    return (
        <div className="bg-[#1A1109] min-h-screen text-ivory/90 p-16 space-y-16">
            <header className="flex justify-between items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-serif">Internal Reservations</h1>
                    <p className="text-ivory/40 text-sm uppercase tracking-widest font-black">Track and update guest stays</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/20" size={16} />
                        <input type="text" placeholder="Filter by date..." className="bg-ivory/5 border border-ivory/10 rounded-full pl-12 pr-6 py-3 text-xs uppercase tracking-widest font-black focus:outline-none focus:ring-1 focus:ring-sage/40 transition-all w-64" />
                    </div>
                    <button className="bg-ivory/5 border border-ivory/5 p-3 rounded-xl hover:bg-ivory/10 transition-colors"><Filter size={18} /></button>
                </div>
            </header>

            <div className="bg-ivory/5 rounded-3xl border border-ivory/5 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-ivory/5 text-[10px] font-black uppercase tracking-[0.3em] text-ivory/20 shadow-xl border-b border-ivory/5">
                        <tr>
                            <th className="px-10 py-8">Guest Details</th>
                            <th className="px-10 py-8">Room Selection</th>
                            <th className="px-10 py-8">Dates (Duration)</th>
                            <th className="px-10 py-8">Total Paid</th>
                            <th className="px-10 py-8">Status</th>
                            <th className="px-10 py-8">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory/5">
                        {mockBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-ivory/[0.02] transition-colors group">
                                <td className="px-10 py-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-[10px] font-black text-terracotta">{booking.guest[0]}</div>
                                        <div>
                                            <p className="text-sm font-bold tracking-tight">{booking.guest}</p>
                                            <p className="text-[10px] text-ivory/20 uppercase font-black tracking-widest">{booking.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-10 py-10">
                                    <p className="text-xs font-bold tracking-widest uppercase text-ivory/60">{booking.room}</p>
                                    <p className="text-[10px] text-ivory/20 uppercase font-black tracking-widest mt-1">2 Guests • AC • WiFi</p>
                                </td>
                                <td className="px-10 py-10">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold tracking-tight underline italic decoration-sage/40">{booking.dates}</p>
                                        <p className="text-[10px] text-ivory/20 font-black tracking-widest uppercase">3 NIGHTS TOTAL</p>
                                    </div>
                                </td>
                                <td className="px-10 py-10 font-serif text-lg text-sage">${booking.total}</td>
                                <td className="px-10 py-10">
                                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/5 shadow-inner ${booking.status === 'PAID' ? 'bg-sage/10 text-sage shadow-[0_0_10px_rgba(138,158,122,0.2)]' : 'bg-terracotta/10 text-terracotta shadow-[0_0_10px_rgba(196,105,58,0.2)]'}`}>
                                        <CheckCircle2 size={12} /> {booking.status}
                                    </div>
                                </td>
                                <td className="px-10 py-10">
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-3 bg-ivory/5 rounded-xl hover:bg-terracotta transition-colors text-ivory/40 hover:text-white"><Edit size={14} /></button>
                                        <button className="p-3 bg-ivory/5 rounded-xl hover:bg-red-500/50 transition-colors text-ivory/40 hover:text-white"><Trash2 size={14} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mockBookings = [
    { id: "BBA-992", guest: "Emma Thompson", room: "Suite Bergamo Alta", dates: "Mar 15 - Mar 18", total: 435.00, status: "PAID" },
    { id: "BBA-104", guest: "Julien Moreau", room: "La Stanza dei Pittori", dates: "Mar 20 - Mar 22", total: 216.00, status: "PAID" },
    { id: "BBA-088", guest: "Sarah Jenkins", room: "Il Salotto delle Muse", dates: "Apr 02 - Apr 05", total: 285.00, status: "PENDING" },
    { id: "BBA-211", guest: "Marco Rossi", room: "Suite Bergamo Alta", dates: "Apr 12 - Apr 15", total: 435.00, status: "PAID" },
    { id: "BBA-305", guest: "Anouska Van Heeren", room: "La Stanza dei Pittori", dates: "Apr 28 - May 01", total: 324.00, status: "PAID" },
];
