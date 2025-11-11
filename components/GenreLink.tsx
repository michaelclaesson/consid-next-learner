"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GenreLink({
    slug,
    children,
}: {
    slug: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isActive = pathname === `/genre/${slug}`;

    return (
        <Link href={`/genre/${slug}`} className={isActive ? "font-bold" : ""}>
            {children}
        </Link>
    );
}
