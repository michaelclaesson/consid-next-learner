import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-center bg-neutral-200 p-8">
            <ul className="flex gap-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/books/">Books</Link>
                </li>
                <li>
                    <Link href="/reviews/">Reviews</Link>
                </li>
                <li>
                    <Link href="/about/">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
