import type { Metadata } from "next";

import { getSiteSettings } from "@/lib/api";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
    const settings = await getSiteSettings();

    const title = settings.description
        ? `${settings.name} - ${settings.description}`
        : settings.name;

    return {
        title: {
            default: title,
            template: `%s | ${settings.name}`,
        },
    };
}

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
