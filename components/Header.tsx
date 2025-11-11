"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        if (path === "/books/") {
            return (
                pathname.startsWith("/books") || pathname.startsWith("/genre")
            );
        }
        return pathname.startsWith(path);
    };

    return (
        <div className="flex justify-center bg-neutral-200 p-8">
            <ul className="text-xl flex gap-8">
                <li>
                    <Link href="/" className={isActive("/") ? "font-bold" : ""}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/books/"
                        className={isActive("/books/") ? "font-bold" : ""}
                    >
                        Books
                    </Link>
                </li>
                <li>
                    <span>Reviews</span>
                </li>
                <li>
                    <span>About</span>
                </li>
            </ul>
        </div>
    );
};

export default Header;
