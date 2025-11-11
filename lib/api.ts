import fetchFromWordPress from "./rest-client";
import type { WPPost, WPBook } from "./types";

export async function getPosts(): Promise<WPPost[]> {
    return fetchFromWordPress("/posts");
}

export async function getBooks(): Promise<WPBook[]> {
    return fetchFromWordPress("/book");
}
