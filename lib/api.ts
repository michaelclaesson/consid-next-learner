import fetchFromWordPress from "./rest-client";
import type { WPPost, WPBook, WPGenre } from "./types";

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

export async function getGenres(): Promise<WPGenre[]> {
    return fetchFromWordPress("/genre");
}
