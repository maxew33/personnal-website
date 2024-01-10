import Link from 'next/link'
import Image from 'next/image'
import Wave from '@/components/wave/wave'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

async function getFeaturesData() {
    const { features } = await require('../data/features.json')
    return features
}

async function getTestimonialsData() {
    const { testimonials } = await require('../data/testimonials.json')
    return testimonials
}

export default function Home() {
    const [testimonialsData, setTestimonialsData] = useState([])
    const [featuresData, setFeaturesData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const testimonials = await getTestimonialsData()
            setTestimonialsData(testimonials)

            const features = await getFeaturesData()
            setFeaturesData(features)
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log(testimonialsData)
    },[testimonialsData])

    const featureAnimationVariants = {
        initial: {
            opacity: 0,
            y: 320,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
                type: 'tween',
            },
        }),
    }

    const testimaonialAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.25 * index,
            },
        }),
    }

    return (
        <main className="home-main">
            <section className="home-hero">
                <article className="home-heroContent">
                    <h1 className="home-title">
                        Soyez{' '}
                        <span className="home-highlighted">En ligne</span>{' '}
                        avec un site qui{' '}
                        <span className="home-highlighted">vous</span>{' '}
                        ressemble.
                    </h1>

                    <p className="home-welcome">
                        Bienvenue chez Techquest Bordeaux, votre partenaire de
                        confiance pour la création de sites web exceptionnels.
                    </p>

                    <span className="home-linkContainer">
                        <Link href="/contact" className="home-contactBtn">
                            Commençons un projet
                        </Link>
                        <Link href="/projects" className="home-link">
                            Voir nos projets
                        </Link>
                    </span>

                    <p className="home-invit">
                        Particulier cherchant à partager votre passion ou
                        entreprise visant à se démarquer nous sommes là pour
                        transformer vos idées en réalité :{' '}
                        <Link href="/contact" className="home-link">
                            contactez-nous.
                        </Link>
                    </p>

                    <Image
                        src="/assets/home/desk.webp"
                        height={467}
                        width={700}
                        className="home-heroIllus"
                        alt="Bienvenue chez Techquest Bordeaux"
                    />
                </article>
            </section>
            <section className="home-arguments">
                <Wave />
                <Wave color="var(--bg)" positionPlace="bottom" />
                <article
                    className="home-sectionContent home-argumentsContent"
                >
                    <Image
                        src="/assets/home/chooseUs.webp"
                        height={467}
                        width={700}
                        className="home-articleIllus"
                        alt="pourquoi choisir Techquest Bordeaux"
                    />
                    <h2 className="home-articleTitle">Choisir techquest</h2>
                    <p className="home-articleText">
                        C'est choisir l'engagement envers l'excellence. Un
                        engagement qui se manifeste à travers nos créations.
                        Chaque site est le résultat d'une collaboration étroite
                        avec nos clients, transformant leurs idées en des
                        expériences en ligne uniques.
                    </p>
                </article>
            </section>
            <section className="home-features">
                <article
                    className="home-sectionContent home-featuresContent"
                >
                    <Link
                        href="/contact"
                        className="home-contactBtn home-featureLink"
                    >
                        Commençons un projet
                    </Link>
                    <div className="home-featuresWrapper">
                        {featuresData.map((article, index) => (
                            <motion.article
                                key={'feature' + index}
                                className="home-feature"
                                variants={featureAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                viewport={{ once: true }}
                            >
                                <h3 className="home-featureTitle">
                                    {article.title}
                                </h3>
                                <p
                                    className="home-featureText"
                                    dangerouslySetInnerHTML={{
                                        __html: article.text,
                                    }}
                                />
                            </motion.article>
                        ))}
                    </div>
                </article>
            </section>
            <section className="home-solutionsWrapper">
                <Wave color="var(--bg)" positionPlace="bottom" />
                <article
                    className="home-solutions home-sectionContent"
                >
                    <Image
                        src="/assets/home/solutions.webp"
                        height={467}
                        width={700}
                        className="home-articleIllus"
                        alt="pourquoi choisir Techquest Bordeaux"
                    />
                    <h2 className="home-articleTitle">
                        Des Solutions Sur Mesure{' '}
                    </h2>
                    <p className="home-articleText">
                        Nous sommes fiers d'offrir une variété de{' '}
                        <span className="home-highlighted">
                            solutions adaptées
                        </span>{' '}
                        à tous les profils, quelle que soit la taille de votre
                        entreprise ou votre budget. <br />
                        Que vous soyez un entrepreneur passionné, un artiste
                        indépendant, ou une entreprise établie, notre approche
                        est{' '}
                        <span className="home-highlighted">
                            personnalisée{' '}
                        </span>
                        pour répondre à vos besoins spécifiques.
                    </p>
                </article>
            </section>
            <section className="home-testimonials">
                <article className="home-testimonialsContent">
                    <h2 className="home-testimonialsTitle">
                        La{' '}
                        <span className="home-highlighted">satisfaction</span>{' '}
                        de nos clients : notre meilleure publicité.
                    </h2>
                    <div className="home-testimonialsWrapper">
                        {testimonialsData.map((testimonial, index) => (
                            <article
                                key={'testimonial' + index}
                                className="home-testimonial"
                            >
                                <motion.p
                                    variants={testimaonialAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    custom={index}
                                    viewport={{ once: true }}
                                    className="home-testimonialContent"
                                >
                                    {testimonial.content}
                                </motion.p>
                                <span className="home-testimonialAuthor">
                                    {testimonial.author}
                                </span>
                            </article>
                        ))}
                    </div>
                </article>
            </section>
            <section className="home-ctaSection">
                <h2 className="home-ctaTitle">
                    Prêt à donner vie à votre projet&nbsp;?
                </h2>
                <p className="home-ctaContent">
                    Contactez-nous dès maintenant pour discuter de vos idées et
                    commencer à créer le site web qui vous ressemble.
                </p>
                <Link href="/contact" className="home-ctaBtn">
                    Commencer
                </Link>
            </section>
        </main>
    )
}
