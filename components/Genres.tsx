import { getGenres } from "@/lib/api";
import GenreLink from "@/components/GenreLink";

export default async function Genres() {
    const genres = await getGenres();

    return (
        <aside className="rounded-md bg-neutral-200 p-6 w-1/4">
            <h2 className="text-2xl font-bold mb-4">Genres</h2>
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <GenreLink slug={genre.slug}>
                            {genre.name} ({genre.count})
                        </GenreLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
