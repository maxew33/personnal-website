import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState(1)

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
      </main>
    </>
  )
}
