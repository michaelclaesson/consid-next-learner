import { getBooks } from "@/lib/api";

import Link from "next/link";

export default async function Books() {
    const books = await getBooks();

    return (
        <div className="flex justify-center gap-4 my-8 mx-auto max-w-5xl">
            <aside className="rounded-sm bg-neutral-200 p-6">
                <h2 className="text-2xl font-bold mb-4">Genres</h2>
            </aside>
            <section className="rounded-sm bg-neutral-200 p-6">
                <h1 className="text-4xl font-bold mb-4">Books</h1>
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>
                            <Link href={`/books/${book.slug}`}>
                                <span dangerouslySetInnerHTML={{ __html: book.title.rendered }}></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
