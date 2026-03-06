import { prisma } from '@/lib/prisma'

async function main() {
    const rooms = [
        {
            name: "Superior Double or Twin Room",
            description: "A spacious room with a mix of modern and classic décor, featuring antique wood-beamed ceilings.",
            pricePerNight: 108.0,
            maxGuests: 2,
            images: ["/images/image copy.png", "/images/image copy 2.png", "/images/image copy 3.png"],
            amenities: ["Air conditioning", "Free high-speed WiFi", "LCD TV", "Private en-suite bathroom", "Hardwood floors"],
            available: true,
        },
        {
            name: "Double or Twin Room",
            description: "Comfortable and elegantly furnished room in the heart of the historic center, featuring historical textures.",
            pricePerNight: 95.0,
            maxGuests: 2,
            images: ["/images/image copy 4.png", "/images/image copy 5.png", "/images/image copy 6.png"],
            amenities: ["Air conditioning", "Free WiFi", "LCD TV", "Private en-suite bathroom", "Linen provided"],
            available: true,
        },
        {
            name: "Triple Room",
            description: "Perfect for families or small groups, featuring high ceilings and plenty of natural light under heritage beams.",
            pricePerNight: 125.0,
            maxGuests: 3,
            images: ["/images/image copy 7.png", "/images/image copy 8.png", "/images/image copy 9.png"],
            amenities: ["Air conditioning", "Free WiFi", "LCD TV", "Private en-suite bathroom", "Buffet breakfast available"],
            available: true,
        },
        {
            name: "Three-Bedroom Apartment",
            description: "A full heritage apartment experience for larger groups, accommodating up to 7 people with authentic Italian charm.",
            pricePerNight: 240.0,
            maxGuests: 7,
            images: ["/images/image copy 10.png", "/images/image copy 11.png", "/images/image copy 12.png"],
            amenities: ["Shared kitchen", "Multiple bathrooms", "Air conditioning", "Free WiFi", "Airport shuttle available"],
            available: true,
        },
    ]

    for (const room of rooms) {
        const roomId = room.name.toLowerCase().replace(/ /g, '-')
        await prisma.room.upsert({
            where: { id: roomId },
            update: {
                description: room.description,
                pricePerNight: room.pricePerNight,
                maxGuests: room.maxGuests,
                images: room.images,
                amenities: room.amenities,
            },
            create: {
                id: roomId,
                ...room,
            },
        })
    }

    console.log('Seed: Properties updated with real images successfully.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
