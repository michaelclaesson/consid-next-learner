import { getPosts } from "@/lib/api";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className="flex flex-col gap-4 rounded-md bg-neutral-200 max-w-3xl p-6 my-8 mx-auto">
            {posts.map((post) => (
                <div key={post.id}>
                    <h2 className="text-2xl font-bold mb-2">
                        {post.title.rendered}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
