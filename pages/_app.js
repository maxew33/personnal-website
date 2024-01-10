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
                <title>Techquest Bordeaux</title>
                <meta name="description" content="Techquest Bordeaux" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <AnimatePresence mode="wait">
                <motion.div key={router.pathname}>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                    <motion.div
                        className="slide-in"
                        initial={{ height: "100vh" }}
                        animate={{ height: 0 }}
                        exit={{ height: "100vh" }}
                        transition={{ duration: .5 }}
                    >
                    </motion.div>
                    <motion.div
                        className="slide-out"
                        initial={{ height: "100vh", top: 0 }}
                        animate={{ height: 0, top:"100vh" }}
                        exit={{ height: 0, top:"100vh"}}
                        transition={{ duration: .5 }}
                    >
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
