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
              'https://www.techquest.fr/back/wp-json/wp/v2/posts'
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
      <Head>
        <title>TechQuest</title>
        <meta name="description" content="techquest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        hello world {data}
        <button onClick={() => setData(data + 1)}>data + 1</button>
<hr/>
        <h1>Mes articles</h1>
            <ul>
                {load &&
                    articles.map((article, idx) => {
                        return <li key={idx}>{article.title.rendered}<Link href={`/blog/${article.slug}`}> en savoir plus ...</Link></li>
                    })}
            </ul>
      </main>
    </>
  )
}

