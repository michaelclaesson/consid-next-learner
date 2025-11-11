import { getBook, getGenresById } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

import Genres from "@/components/Genres";

export default async function Book({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const book = await getBook(slug);

    if (!book) {
        notFound();
    }

    const genres = await getGenresById(book.genre);

    return (
        <div className="flex justify-center gap-8 my-8 mx-auto w-full max-w-5xl">
            <Genres />
            <section className="rounded-md bg-neutral-200 p-6 w-3/4">
                <h1
                    className="text-4xl font-bold mb-2"
                    dangerouslySetInnerHTML={{ __html: book.title.rendered }}
                />
                <div
                    dangerouslySetInnerHTML={{ __html: book.content.rendered }}
                />
                <ul className="mt-4">
                    <li>
                        <strong>Pages:</strong> {book.acf.pages}
                    </li>
                    <li>
                        <strong>Published:</strong> {book.acf.year}
                    </li>
                    <li>
                        <div className="flex gap-1">
                        <strong>{genres.length > 1 ? 'Genres:' : 'Genre:'}</strong>
                        <div>
                        {genres.map((genre, index) => (
                            <span key={genre.id}>
                                {index > 0 && ", "}
                                <Link className="underline" href={`/genre/${genre.slug}`}>
                                    {genre.name}
                                </Link>
                            </span>
                        ))}
                        </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}
