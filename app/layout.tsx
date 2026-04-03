import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Bank Jateng - Digitalisasi Desa",
    description: "Materi Presentasi Strategis Digitalisasi Ekonomi Desa bersama Bank Jateng",
    icons: {
        icon: "/Bank_Jateng_logo.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={`${inter.variable} ${outfit.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
