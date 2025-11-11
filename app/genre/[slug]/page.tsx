import { getBooksByGenre, getGenre } from "@/lib/api";
import { notFound } from "next/navigation";

import Genres from "@/components/Genres";
import BookList from "@/components/BookList";

import Link from "next/link";

export default async function GenrePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const genre = await getGenre(slug);

    if (!genre) {
        notFound();
    }

    const books = await getBooksByGenre(genre.id);

    return (
        <div className="flex justify-center gap-8 my-8 mx-auto w-full max-w-5xl">
            <Genres />
            <section className="rounded-md bg-neutral-200 p-6 w-3/4">
                <h1 className="text-4xl font-bold mb-4">{genre.name} books</h1>
                {books.length === 0 ? (
                    <p>No books found in this genre.</p>
                ) : (
                    <BookList books={books} />
                )}
            </section>
        </div>
    );
}
