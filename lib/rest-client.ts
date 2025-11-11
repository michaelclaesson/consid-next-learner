export async function fetchFromWordPress<T>(endpoint: string): Promise<T> {
    const baseUrl =
        process.env.WP_REST_ENDPOINT || "http://localhost/wp-json/wp/v2";
    const url = `${baseUrl}${
        endpoint.startsWith("/") ? endpoint : "/" + endpoint
    }`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export async function fetchSettings<T>(): Promise<T> {
    const baseUrl = process.env.WP_ROOT || "http://localhost";
    const url = `${baseUrl}/wp-json/`;

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
