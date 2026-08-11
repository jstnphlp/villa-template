// Root document shell for the App Router.
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Azure Cove Villas | A private coastal escape",
  description: "A refined, original villa-resort landing page template.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
