# B&B Belle Arti - Bergamo, Italy

A premium, full-stack Next.js 15 booking website for a historic guesthouse in the heart of Bergamo.

## ✨ Features
- **Photography-first Landing Page**: High-end modern warm vintage aesthetic.
- **Room Explorer**: Detailed views of the 3 historic rooms (*La Stanza dei Pittori, Il Salotto delle Muse, Suite Bergamo Alta*).
- **Booking Flow**: Multi-step reservation and payment UI.
- **Guest Dashboard**: Tracking check-in/out and stay history.
- **Admin Command Center**: Dark-mode management interface for occupancy, revenue, and inventory.
- **Tech Stack**: Next.js 15, Prisma (NeonDB), Clerk (Auth), Stripe (Payments), Tailwind CSS, Framer Motion.

## 🚀 Setup

### 1. Prerequisites
- Node.js 20+
- A NeonDB (Postgres) account
- A Clerk account
- A Stripe account (for API keys)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/tanishapritha/belle-arti.git
cd belle-arti

# Install dependencies
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in your keys:
```bash
cp .env.example .env
```

### 4. Database Setup
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 5. Start Development
```bash
npm run dev
```

## 🛠 Project Structure
- `/src/app/page.tsx`: Landing page
- `/src/app/rooms`: Room catalog and dynamic details
- `/src/app/booking`: Reservation flow
- `/src/app/admin`: Management dashboard
- `/src/lib/prisma.ts`: Prisma singleton client
- `prisma/schema.prisma`: Core database models

## 🏗 Deployment
This project is Vercel-ready. Ensure all environment variables are added to your Vercel project settings.

## 📝 About the Property
- **Location**: Via San Tomaso 46, Bergamo, Italy.
- **Style**: Historic building, wood-beamed ceilings, warm Italian décor.
- **Amenities**: AC, WiFi, LCD TVs, Breakfast included.
- **Languages**: Italian and English.
