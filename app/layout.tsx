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
    title: "Digitalisasi Desa - Masa Depan Desa Kita",
    description: "Materi Presentasi Terkait Digitalisasi Desa dengan Pendekatan Teknologi Modern",
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
