import { getPosts } from "@/lib/api";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </div>
            ))}
        </div>
    );
}
