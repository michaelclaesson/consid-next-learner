import Link from "next/link";
import type { WPBook } from "@/lib/types";

export default function BookList({ books }: { books: WPBook[] }) {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Link href={`/books/${book.slug}`} className="hover:underline">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: book.title.rendered,
                            }}
                        ></span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
