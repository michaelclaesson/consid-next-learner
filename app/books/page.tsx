import { getBooks } from "@/lib/api";

import Genres from "@/components/Genres";
import BookList from "@/components/BookList";

export default async function Books() {
    const books = await getBooks();

    return (
        <div className="flex justify-center gap-8 my-8 mx-auto w-full max-w-5xl">
            <Genres />
            <section className="rounded-md bg-neutral-200 p-6 w-3/4">
                <h1 className="text-4xl font-bold mb-4">Books</h1>
                <BookList books={books} />
            </section>
        </div>
    );
}
