import { BedDouble, Plus, Edit, Trash2, CheckCircle2, XCircle } from "lucide-react";

export default function AdminRoomsPage() {
    return (
        <div className="bg-[#1A1109] min-h-screen text-ivory/90 p-16 space-y-16">
            <header className="flex justify-between items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-serif">Room Management</h1>
                    <p className="text-ivory/40 text-sm uppercase tracking-widest font-black">Configure your inventory and pricing</p>
                </div>
                <button className="bg-terracotta text-white px-8 py-4 rounded-2xl flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-terracotta/20">
                    <Plus size={18} /> Add New Room
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {mockRooms.map((room) => (
                    <div key={room.name} className="bg-ivory/5 rounded-3xl border border-ivory/5 overflow-hidden group">
                        <div className="aspect-video relative opacity-80 group-hover:opacity-100 transition-opacity">
                            <img src={room.image} className="w-full h-full object-cover" />
                            <div className="absolute top-6 right-6 flex gap-3">
                                <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-terracotta transition-colors"><Edit size={16} /></button>
                                <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-red-500/50 transition-colors"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <div className="p-10 space-y-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-ivory">{room.name}</h3>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-ivory/20 mt-1">${room.price} / NIGHT • MAX {room.guests} GUESTS</p>
                                </div>
                                <div className={`p-2 rounded-full border ${room.available ? 'border-sage text-sage' : 'border-red-500 text-red-500'} bg-white/5`}>
                                    {room.available ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs text-ivory/60 leading-relaxed line-clamp-2 italic">"{room.desc}"</p>
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {room.amenities.map(a => (
                                        <span key={a} className="px-3 py-1 bg-ivory/5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-ivory/40 border border-ivory/5">{a}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="w-full bg-ivory/5 border border-ivory/10 py-4 uppercase text-[10px] font-black tracking-widest hover:bg-ivory/10 transition-all">
                                Toggle Availability
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mockRooms = [
    {
        name: "La Stanza dei Pittori",
        price: 108,
        guests: 2,
        available: true,
        desc: "Double room with original wood-beamed ceilings and warm décor.",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        amenities: ["AC", "WiFi", "TV", "En-suite"]
    },
    {
        name: "Il Salotto delle Muse",
        price: 95,
        guests: 2,
        available: true,
        desc: "Twin room with peaceful atmosphere in the historic center.",
        image: "https://images.unsplash.com/photo-1595526116035-613209ebd730",
        amenities: ["WiFi", "TV", "Daily HK"]
    },
    {
        name: "Suite Bergamo Alta",
        price: 145,
        guests: 3,
        available: false,
        desc: "Spacious suite with separate sitting area and historic details.",
        image: "https://images.unsplash.com/photo-1591088398332-8a7761a97044",
        amenities: ["King Bed", "Sitting Area", "AC"]
    }
];
