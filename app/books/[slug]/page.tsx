import { getBook } from "@/lib/api";
import { notFound } from "next/navigation";

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

    return (
        <div className="flex justify-center gap-4 my-8 mx-auto w-full max-w-5xl">
            <Genres />
            <section className="rounded-sm bg-neutral-200 p-6 w-3/4">
                <h1 className="text-4xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: book.title.rendered }} />
                <div
                    dangerouslySetInnerHTML={{ __html: book.content.rendered }}
                />
                <ul className="mt-4">
                    <li><strong>Pages:</strong> {book.acf.pages}</li>
                    <li><strong>Published:</strong> {book.acf.year}</li>
                </ul>
            </section>
        </div>
    );
}
