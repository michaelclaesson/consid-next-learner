import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getBooksByGenre, getGenre, getGenres } from "@/lib/api";

import Genres from "@/components/Genres";
import BookList from "@/components/BookList";

export async function generateStaticParams() {
    const genres = await getGenres();

    return genres.map((genre) => ({
        slug: genre.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const genre = await getGenre(slug);

    if (!genre) {
        return {
            title: "Genre Not Found",
        };
    }

    return {
        title: `${genre.name} | Genres`,
    };
}

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
