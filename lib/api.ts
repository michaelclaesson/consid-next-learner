import { fetchFromWordPress, fetchSettings } from "./rest-client";
import type { WPPost, WPBook, WPGenre, WPSettings } from "./types";

export async function getPosts(): Promise<WPPost[]> {
    return fetchFromWordPress("/posts");
}

export async function getBooks(): Promise<WPBook[]> {
    return fetchFromWordPress("/book");
}

export async function getBook(slug: string): Promise<WPBook | null> {
    const books = await fetchFromWordPress<WPBook[]>(`/book?slug=${slug}`);
    return books.length > 0 ? books[0] : null;
}

export async function getBooksByGenre(genreId: number): Promise<WPBook[]> {
    return fetchFromWordPress(`/book?genre=${genreId}`);
}

export async function getGenres(): Promise<WPGenre[]> {
    return fetchFromWordPress("/genre");
}

export async function getGenresById(
    ids: number | number[]
): Promise<WPGenre[]> {
    const idArray = Array.isArray(ids) ? ids : [ids];
    const idString = idArray.join(",");
    return fetchFromWordPress(`/genre?include=${idString}`);
}

export async function getGenre(slug: string): Promise<WPGenre | null> {
    const genres = await fetchFromWordPress<WPGenre[]>(`/genre?slug=${slug}`);
    return genres.length > 0 ? genres[0] : null;
}

export async function getSiteSettings(): Promise<WPSettings> {
    return fetchSettings();
}
