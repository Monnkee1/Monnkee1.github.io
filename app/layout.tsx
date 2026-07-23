import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://drivesift.com"),
  title: "DriveSift by JM — Every Drive. One Search.",
  description: "Index the drives you already own and find any file from any connected device—fast. DriveSift by JM is available for $58.99.",
  openGraph: {
    title: "DriveSift by JM — Every Drive. One Search.",
    description: "Turn every indexed drive into one fast, searchable library.",
    type: "website",
    url: "https://drivesift.com",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "DriveSift by JM — Every drive. One search." }],
  },
  twitter: { card: "summary_large_image", title: "DriveSift by JM", description: "Every drive. One search.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
