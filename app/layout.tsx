import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <div className="flex justify-center grow px-4">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
