import '@/styles/globals.css'
import AppContext from '@/components/context/AppContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import { init } from '@socialgouv/matomo-next'

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

export default function App({ Component, pageProps }) {
    useEffect(() => {
        init({
            url: MATOMO_URL,
            siteId: MATOMO_SITE_ID,
            excludeUrlsPatterns: [/^\/login.php/, /\?token=.+/],
            disableCookies: true,
        })
    }, [])

    const [darkMode, setDarkMode] = useState(false)

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Maxime Malfilâtre, créateur de site web sur Bordeaux et Libourne</title>
                <meta
                    name="description"
                    content="Maxime Malfilâtre - Votre interlocuteur pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-moi pour explorer les opportunités ensemble."
                />

                {/* indexation */}

                <meta
                    name="google-site-verification"
                    content="mAxay-PYdygN1Yk2JZ17uIanTwziS4rmTmfd39Xu0fo"
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://maxime-malfilatre.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Maxime Malfilâtre, créateur de site web sur Bordeaux et Libourne" />
                <meta
                    property="og:description"
                    content="Maxime Malfilâtre - Votre interlocuteur pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-moi pour explorer les opportunités ensemble."
                />
                <meta
                    property="og:image"
                    content="https://maxime-malfilatre.com/OG.webp"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="techquest.fr" />
                <meta property="twitter:url" content="https://techquest.fr/" />
                <meta name="twitter:title" content="Maxime Malfilâtre, créateur de site web sur Bordeaux et Libourne" />
                <meta
                    name="twitter:description"
                    content="Maxime Malfilâtre - Votre interlocuteur pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-moi pour explorer les opportunités ensemble."
                />
                <meta
                    name="twitter:image"
                    content="https://techquest.fr/OG.webp"
                />

                {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="#f6f2ea"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="#f6f2ea"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppContext.Provider>
    )
}
