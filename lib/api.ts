import fetchFromWordPress from "./rest-client";

export async function getPosts() {
    return fetchFromWordPress("/posts");
}

export async function getBooks() {
    return fetchFromWordPress("/book");
}