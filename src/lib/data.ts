export const siteData = {
    name: "B&B Belle Arti",
    address: "Via San Tomaso 46, Bergamo, 24121, Italy",
    locationShort: "Bergamo Historic Center",
    coordinates: { lat: 45.7001, lng: 9.6738 },
    rating: 8.8,
    ratingBreakdown: {
        cleanliness: 9.3,
        staff: 9.2,
        comfort: 9.2,
        location: 9.1,
        value: 8.9,
        facilities: 8.8,
        wifi: 8.5
    },
    description: "B&B Belle Arti is a charming guesthouse situated on the 2nd floor of a historical building in Bergamo. Located just 150m from the Accademia Carrara and GAMeC museum, it offers air-conditioned rooms with authentic wood-beamed ceilings and elegant décor.",
    amenities: [
        "Parking nearby",
        "Free High-speed WiFi",
        "Airport Shuttle (surcharge)",
        "Non-smoking rooms",
        "Heating",
        "Shared kitchen with tea/coffee",
        "LCD TV",
        "Private en-suite bathrooms"
    ],
    houseRules: {
        checkIn: "3:00 PM - 10:00 PM",
        checkOut: "Until 11:30 AM",
        quietHours: "8:00 PM - 8:00 AM",
        noPets: true,
        noParties: true,
        noSmoking: true,
        important: "Property is on the 2nd floor with no lift."
    },
    rooms: [
        {
            id: "superior-double",
            name: "Superior Double or Twin Room",
            description: "A spacious room with a mix of modern and classic décor, featuring antique wood-beamed ceilings.",
            pricePerNight: 108,
            maxGuests: 2,
            beds: "1 large double or 2 twin beds",
            images: ["/images/image copy.png", "/images/image copy 2.png"]
        },
        {
            id: "double-room",
            name: "Double or Twin Room",
            description: "Comfortable and elegantly furnished room in the heart of the historic center.",
            pricePerNight: 95,
            maxGuests: 2,
            beds: "1 large double bed",
            images: ["/images/image copy 3.png", "/images/image copy 5.png"]
        },
        {
            id: "triple-room",
            name: "Triple Room",
            description: "Perfect for families or small groups, featuring high ceilings and plenty of natural light.",
            pricePerNight: 125,
            maxGuests: 3,
            beds: "3 single beds or 1 double + 1 single",
            images: ["/images/image copy 6.png", "/images/image copy 7.png"]
        },
        {
            id: "three-bedroom-apartment",
            name: "Three-Bedroom Apartment",
            description: "A full heritage apartment experience for larger groups, accommodating up to 7 people.",
            pricePerNight: 240,
            maxGuests: 7,
            beds: "Mixed King/Double/Single beds",
            images: ["/images/image copy 8.png", "/images/image copy 9.png"]
        }
    ],
    reviews: [
        { name: "Ingrid", country: "UK", rating: 10, text: "Excellent location and spotless cleanliness." },
        { name: "Sarah", country: "Ireland", rating: 10, text: "Easy to find, perfect shower, had everything we needed." },
        { name: "Sheila", country: "Australia", rating: 9, text: "Great communication and a nice shared kitchen/dining area." },
        { name: "Erin", country: "UK", rating: 10, text: "Great value for money, walking distance to Città Alta funicular." },
        { name: "Mateusz", country: "Poland", rating: 8, text: "Perfect price for the comfort; very well-equipped shared kitchen." }
    ]
};
