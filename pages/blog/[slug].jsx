export default function Page({ post }) {

    return (
        <>
            <div>{post && post[0].title.rendered}</div>
            <div dangerouslySetInnerHTML={{__html: post[0].content.rendered}}></div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(process.env.DB_URI)
    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        process.env.DB_URI + `/?slug=${params.slug}`
    )
    const post = await res.json()

    return { props: { post } }
}
