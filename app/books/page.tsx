import { getBooks } from "@/lib/api";

import Link from "next/link";

export default async function Books() {
    const books = await getBooks();

    return (
        <div>
            <ul>
            {books.map((book: any) => (
                <li key={book.id}>
                    <Link href={`/books/${book.slug}`}>
                        <h2>{book.title.rendered}</h2>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}
