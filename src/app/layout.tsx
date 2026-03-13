import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Backstreet Brewery | Craft Beers & Dining | Sarjapur Road, Bengaluru",
  description:
    "Bengaluru's destination for handcrafted beers, vibrant nightlife, and unforgettable dining. Located on Sarjapur Road. Book your table today.",
  keywords: [
    "brewery bangalore",
    "craft beer bengaluru",
    "microbrewery sarjapur",
    "restaurant bangalore",
    "nightlife bangalore",
    "backstreet brewery",
  ],
  openGraph: {
    title: "Backstreet Brewery | Bengaluru",
    description: "Crafted Brews. Bold Flavours. Bengaluru's premium microbrewery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
