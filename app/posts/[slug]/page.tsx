import { getAllPosts, getPostBySlug, PostType } from "@/lib/get-posts"
// import Link from "next/link"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug)

    return (
        <>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </>
    )
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.id,
    }))
}