import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <h1 className="text-center text-4xl font-bold my-auto">
            404 - Page not found
        </h1>
    );
}
