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
                <title>TechQuest Bordeaux</title>
                <meta
                    name="description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://techquest.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TechQuest Bordeaux" />
                <meta
                    property="og:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    property="og:image"
                    content="https://techquest.fr/OG.webp"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="techquest.fr" />
                <meta property="twitter:url" content="https://techquest.fr/" />
                <meta name="twitter:title" content="TechQuest Bordeaux" />
                <meta
                    name="twitter:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    name="twitter:image"
                    content="https://techquest.fr/OG.webp"
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
                        initial={{ height: '0' }}
                        animate={{ height: 0 }}
                        exit={{ height: '100vh' }}
                        transition={{ duration: 0.35 }}
                    ></motion.div>
                    <motion.div
                        className="slide-out"
                        initial={{ height: '100vh', top: 0 }}
                        animate={{ height: 0, top: '100vh' }}
                        exit={{ height: 0, top: '100vh' }}
                        transition={{ duration: 0.35 }}
                    ></motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
