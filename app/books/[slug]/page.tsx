export default async function Book({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    return (
        <div>
            <h1>{slug}</h1>
        </div>
    );
}
