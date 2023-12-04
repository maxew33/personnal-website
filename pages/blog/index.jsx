import Header from '@/components/header/Header'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function index() {
    const [articles, setArticles] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const reqArticles = async () => {
            const res = await fetch(
                process.env.DB_URI
            )
            const posts = await res.json()
            setArticles(posts)
            setLoad(true)
        }
        !load && reqArticles()
        console.log(123, articles)
    }, [articles])

    return (
        <>
        <Header/>
            <h1>Mes articles</h1>
            <ul>
                {load &&
                    articles.map((article, idx) => {
                        return <li key={idx}>{article.title.rendered}<Link href={`/blog/${article.slug}`}> en savoir plus ...</Link></li>
                    })}
            </ul>
        </>
    )
}
