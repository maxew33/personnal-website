import '@/styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Techquest Bordeaux</title>
                <meta
                    name="description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://techquest.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Techquest Bordeaux" />
                <meta
                    property="og:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    property="og:image"
                    content="https://opengraph.b-cdn.net/production/documents/0c240f04-b133-491b-9639-f6e4a4599294.png?token=MXszPVw640HDFx68rFAxDZh6hIN59JBympN-N4OzCeo&height=630&width=1200&expires=33240910819"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="techquest.fr" />
                <meta property="twitter:url" content="https://techquest.fr/" />
                <meta name="twitter:title" content="Techquest Bordeaux" />
                <meta
                    name="twitter:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    name="twitter:image"
                    content="https://opengraph.b-cdn.net/production/documents/0c240f04-b133-491b-9639-f6e4a4599294.png?token=MXszPVw640HDFx68rFAxDZh6hIN59JBympN-N4OzCeo&height=630&width=1200&expires=33240910819"
                />

                {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
            </Head>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div key={router.pathname}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                    <motion.div
                        className="slide-in"
                        initial={{ height: '100vh' }}
                        animate={{ height: 0 }}
                        exit={{ height: '100vh' }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className="slide-out"
                        initial={{ height: '100vh', top: 0 }}
                        animate={{ height: 0, top: '100vh' }}
                        exit={{ height: 0, top: '100vh' }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
