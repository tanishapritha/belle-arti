import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutWrapper from "@/components/LayoutWrapper";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "B&B Belle Arti | Charming Guesthouse in Bergamo, Italy",
    description: "Experience the history and charm of Bergamo at B&B Belle Arti. Located in a historic building near GAMeC and Carrara Academy Gallery.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${playfair.variable} ${outfit.variable} font-sans bg-ivory text-walnut antialiased`}>
                    <LayoutWrapper>
                        {children}
                    </LayoutWrapper>
                </body>
            </html>
        </ClerkProvider>
    );
}

// Ensure you import it at the top:
// import LayoutWrapper from "@/components/LayoutWrapper";
