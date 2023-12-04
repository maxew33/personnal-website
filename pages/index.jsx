import Header from '@/components/header/Header'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
    const [data, setData] = useState(1)

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
        console.log(articles)
    }, [articles])

    return (
        <>
            <Header />
            <main>
                hello world {data}
                <button onClick={() => setData(data + 1)}>data + 1</button>
                <hr />
                <section id="about">
                    <h1>TechQuest</h1>
                    <h2>Être en ligne</h2>
                    <h2>Être remarqué</h2>
                    <h3>Avec un site qui vous distingue</h3>
                </section>
                <section id="projects">projets</section>
                <section id="estimate">devis</section>
                <section id="contact">contact</section>
            </main>
        </>
    )
}
