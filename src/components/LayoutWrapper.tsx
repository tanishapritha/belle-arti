"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <main className="min-h-screen bg-[#1A1109]">{children}</main>;
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-walnut/5">
                <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="/" className="text-2xl font-serif font-bold text-terracotta">
                        Belle Arti
                    </a>
                    <div className="flex gap-8 items-center text-sm font-medium tracking-wide">
                        <a href="/" className="hover:text-terracotta transition-colors">Home</a>
                        <a href="/rooms" className="hover:text-terracotta transition-colors">Rooms</a>
                        <a href="/my-bookings" className="hover:text-terracotta transition-colors">My Bookings</a>
                        <a href="/admin" className="text-walnut/60 hover:text-terracotta transition-colors">Admin</a>
                    </div>
                </nav>
            </header>
            <main className="pt-20 min-h-screen">
                {children}
            </main>
            <footer className="bg-walnut text-ivory py-16 mt-20">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-xl font-serif mb-6 text-sage">B&B Belle Arti</h3>
                        <p className="text-sm text-ivory/70 leading-relaxed uppercase tracking-tighter">
                            Via San Tomaso 46, Bergamo, 24121, Italy
                        </p>
                        <p className="text-sm mt-4 text-ivory/70 italic">
                            Charming guesthouse in a historic building.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="text-sm space-y-2 text-ivory/70">
                            <li><a href="/" className="hover:text-sage">Home</a></li>
                            <li><a href="/rooms" className="hover:text-sage">Rooms</a></li>
                            <li><a href="/my-bookings" className="hover:text-sage">My Bookings</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact</h4>
                        <p className="text-sm text-ivory/70">Check-in: 3:00 PM | Check-out: 11:30 AM</p>
                        <p className="text-sm text-ivory/70 mt-2">Quiet hours: 8:00 PM – 8:00 AM</p>
                        <div className="flex gap-4 mt-6">
                            <span className="text-sage">EN</span>
                            <span className="text-walnut/30">/</span>
                            <span className="text-sage">IT</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
