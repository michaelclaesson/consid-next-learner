import { getGenres } from "@/lib/api";
import Link from "next/link";

export default async function Genres() {
    const genres = await getGenres();

    return (
        <aside className="rounded-sm bg-neutral-200 p-6 w-1/4">
            <h2 className="text-2xl font-bold mb-4">Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link href={`/genre/${genre.slug}`}>
                            {genre.name} ({genre.count})
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
