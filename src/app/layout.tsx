// Root document shell for the App Router.
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Villa Scarlet Garden Resort | Balayan, Batangas",
  description: "Villa Scarlet Garden Resort is a garden resort in Balibago, Balayan, Batangas, Philippines.",
  keywords: ["Villa Scarlet Garden Resort", "Balayan resort", "Batangas resort", "Balibago"],
  icons: { icon: "/villa-logo.png" },
  openGraph: {
    title: "Villa Scarlet Garden Resort | Balayan, Batangas",
    description: "A garden resort in Balibago, Balayan, Batangas, Philippines.",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}