import { LayoutDashboard, BedDouble, CalendarCheck, BarChart3, Settings, LogOut, Search, MoreVertical, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="bg-[#1A1109] min-h-screen text-ivory/90 selection:bg-terracotta selection:text-white overflow-hidden">
            <div className="flex h-screen">
                {/* Sidebar */}
                <nav className="w-80 bg-[#140D07] border-r border-ivory/5 p-12 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-serif text-terracotta mb-16 tracking-tight">Belle Arti <br /><span className="text-ivory/40 text-xs uppercase tracking-[0.4em] font-black">Management</span></h1>
                        <ul className="space-y-6">
                            {sidebarItems.map(item => (
                                <li key={item.label}>
                                    <a href="#" className={`flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] transition-all hover:text-sage group ${item.active ? 'text-sage' : 'text-ivory/40'}`}>
                                        <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-ivory/5 p-6 rounded-2xl border border-ivory/5">
                            <p className="text-[10px] uppercase font-black tracking-widest text-ivory/20 mb-2">Logged in as</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-[10px] font-black">AD</div>
                                <p className="text-xs font-bold tracking-widest">Admin User</p>
                            </div>
                        </div>
                        <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-terracotta/60 hover:text-terracotta transition-colors">
                            <LogOut size={16} /> Logout
                        </button>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-grow p-16 space-y-16 overflow-y-auto">
                    <header className="flex justify-between items-center">
                        <h2 className="text-4xl font-serif">Executive Overview</h2>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/20" size={16} />
                                <input type="text" placeholder="Search reservations..." className="bg-ivory/5 border border-ivory/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-sage/40 transition-all w-80" />
                            </div>
                        </div>
                    </header>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-4 gap-8">
                        {stats.map(stat => (
                            <div key={stat.label} className="bg-ivory/5 p-10 rounded-3xl border border-ivory/5 hover:border-ivory/10 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-ivory/5 rounded-2xl text-sage group-hover:scale-110 transition-transform">
                                        <stat.icon size={24} />
                                    </div>
                                    <span className="text-xs font-black text-sage tracking-widest">{stat.change}</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-ivory/20 tracking-[0.2em]">{stat.label}</p>
                                    <p className="text-3xl font-serif text-ivory">{stat.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Recent Bookings Table Mock */}
                        <div className="md:col-span-2 bg-ivory/5 rounded-3xl border border-ivory/5 p-10 space-y-10">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-serif">Recent Check-ins</h3>
                                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-terracotta hover:underline">View All</a>
                            </div>
                            <div className="space-y-6">
                                {recentBookings.map(booking => (
                                    <div key={booking.guest} className="flex justify-between items-center p-6 border-b border-ivory/5 last:border-0 hover:bg-ivory/[0.02] transition-colors rounded-2xl">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 bg-ivory/5 rounded-full flex items-center justify-center text-[10px] font-black">{booking.guest[0]}</div>
                                            <div>
                                                <p className="text-sm font-bold tracking-tight">{booking.guest}</p>
                                                <p className="text-[10px] text-ivory/20 uppercase font-black tracking-widest">{booking.room}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-bold text-ivory/60 tracking-widest uppercase">{booking.dates}</p>
                                            <div className="flex items-center gap-2 justify-end mt-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-sage shadow-[0_0_8px_rgba(138,158,122,0.8)]" />
                                                <p className="text-[10px] font-black uppercase tracking-widest text-sage">{booking.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Occupancy Chart Section Mock */}
                        <div className="bg-[#C4693A] p-10 rounded-3xl flex flex-col justify-between text-ivory-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-700">
                                <BarChart3 size={200} />
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ivory/60">Occupancy Rate</span>
                                <h3 className="text-6xl font-serif text-white">88%</h3>
                                <p className="text-sm font-light text-white/80 leading-relaxed uppercase tracking-widest pt-4">+12.5% from last month</p>
                            </div>

                            <div className="space-y-6 border-t border-white/10 pt-10 mt-10">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                                        <span>Total Capacity</span>
                                        <span>26 / 30 Nights</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-[88%] h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                    </div>
                                </div>
                                <button className="w-full bg-white/10 hover:bg-white/20 transition-all border border-white/20 py-4 uppercase text-[10px] font-black tracking-[0.4em] text-white">
                                    Update Availability
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Rooms", icon: BedDouble },
    { label: "Bookings", icon: CalendarCheck },
    { label: "Analytics", icon: BarChart3 },
    { label: "Settings", icon: Settings },
];

const stats = [
    { label: "Total Revenue", value: "$4,820", icon: BarChart3, change: "+24%" },
    { label: "Occupancy", value: "88%", icon: BedDouble, change: "+12%" },
    { label: "New Bookings", value: "14", icon: CalendarCheck, change: "+8%" },
    { label: "Guest Satisfaction", value: "4.9/5", icon: CheckCircle2, change: "0%" },
];

const recentBookings = [
    { guest: "Emma Thompson", room: "Suite Bergamo Alta", dates: "Mar 15 - Mar 18", status: "PAID" },
    { guest: "Julien Moreau", room: "La Stanza dei Pittori", dates: "Mar 20 - Mar 22", status: "PAID" },
    { guest: "Sarah Jenkins", room: "Il Salotto delle Muse", dates: "Apr 02 - Apr 05", status: "PAID" },
    { guest: "Marco Rossi", room: "Suite Bergamo Alta", dates: "Apr 12 - Apr 15", status: "PAID" },
];
