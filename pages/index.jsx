import Link from 'next/link'
import styles from './Home.module.css'
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
        <main className={styles.main}>
            <section className={styles.hero}>
                <article className={styles.heroContent}>
                    <h1 className={styles.title}>
                        Soyez{' '}
                        <span className={styles.highlighted}>En ligne</span>{' '}
                        avec un site qui{' '}
                        <span className={styles.highlighted}>vous</span>{' '}
                        ressemble.
                    </h1>

                    <p className={styles.welcome}>
                        Bienvenue chez Techquest Bordeaux, votre partenaire de
                        confiance pour la création de sites web exceptionnels.
                    </p>

                    <span className={styles.linkContainer}>
                        <Link href="/contact" className={styles.contactBtn}>
                            Commençons un projet
                        </Link>
                        <Link href="/projects" className={styles.link}>
                            Voir nos projets
                        </Link>
                    </span>

                    <p className={styles.invit}>
                        Particulier cherchant à partager votre passion ou
                        entreprise visant à se démarquer nous sommes là pour
                        transformer vos idées en réalité :{' '}
                        <Link href="/contact" className={styles.link}>
                            contactez-nous.
                        </Link>
                    </p>

                    <Image
                        src="/assets/home/desk.png"
                        height={467}
                        width={700}
                        className={styles.heroIllus}
                        alt="Bienvenue chez Techquest Bordeaux"
                    />
                </article>
            </section>
            <section className={styles.arguments}>
                <Wave />
                <Wave color="var(--bg)" positionPlace="bottom" />
                <article
                    className={`${styles.sectionContent} ${styles.argumentsContent}`}
                >
                    <Image
                        src="/assets/home/chooseUs.png"
                        height={467}
                        width={700}
                        className={styles.articleIllus}
                        alt="pourquoi choisir Techquest Bordeaux"
                    />
                    <h2 className={styles.articleTitle}>Choisir techquest</h2>
                    <p className={styles.articleText}>
                        C'est choisir l'engagement envers l'excellence. Un
                        engagement qui se manifeste à travers nos créations.
                        Chaque site est le résultat d'une collaboration étroite
                        avec nos clients, transformant leurs idées en des
                        expériences en ligne uniques.
                    </p>
                </article>
            </section>
            <section className={styles.features}>
                <article
                    className={`${styles.sectionContent} ${styles.featuresContent}`}
                >
                    <Link
                        href="/contact"
                        className={`${styles.contactBtn} ${styles.featureLink}`}
                    >
                        Commençons un projet
                    </Link>
                    <div className={styles.featuresWrapper}>
                        {featuresData.map((article, index) => (
                            <motion.article
                                key={'feature' + index}
                                className={styles.feature}
                                variants={featureAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                viewport={{ once: true }}
                            >
                                <h3 className={styles.featureTitle}>
                                    {article.title}
                                </h3>
                                <p
                                    className={styles.featureText}
                                    dangerouslySetInnerHTML={{
                                        __html: article.text,
                                    }}
                                />
                            </motion.article>
                        ))}
                    </div>
                </article>
            </section>
            <section className={styles.solutionsWrapper}>
                <Wave color="var(--bg)" positionPlace="bottom" />
                <article
                    className={styles.solutions + ' ' + styles.sectionContent}
                >
                    <Image
                        src="/assets/home/solutions.png"
                        height={467}
                        width={700}
                        className={styles.articleIllus}
                        alt="pourquoi choisir Techquest Bordeaux"
                    />
                    <h2 className={styles.articleTitle}>
                        Des Solutions Sur Mesure{' '}
                    </h2>
                    <p className={styles.articleText}>
                        Nous sommes fiers d'offrir une variété de{' '}
                        <span className={styles.highlighted}>
                            solutions adaptées
                        </span>{' '}
                        à tous les profils, quelle que soit la taille de votre
                        entreprise ou votre budget. <br />
                        Que vous soyez un entrepreneur passionné, un artiste
                        indépendant, ou une entreprise établie, notre approche
                        est{' '}
                        <span className={styles.highlighted}>
                            personnalisée{' '}
                        </span>
                        pour répondre à vos besoins spécifiques.
                    </p>
                </article>
            </section>
            <section className={styles.testimonials}>
                <article className={styles.testimonialsContent}>
                    <h2 className={styles.testimonialsTitle}>
                        La{' '}
                        <span className={styles.highlighted}>satisfaction</span>{' '}
                        de nos clients : notre meilleure publicité.
                    </h2>
                    <div className={styles.testimonialsWrapper}>
                        {testimonialsData.map((testimonial, index) => (
                            <article
                                key={'testimonial' + index}
                                className={styles.testimonial}
                            >
                                <motion.p
                                    variants={testimaonialAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    custom={index}
                                    viewport={{ once: true }}
                                    className={styles.testimonialContent}
                                >
                                    {testimonial.content}
                                </motion.p>
                                <span className={styles.testimonialAuthor}>
                                    {testimonial.author}
                                </span>
                            </article>
                        ))}
                    </div>
                </article>
            </section>
            <section className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>
                    Prêt à donner vie à votre projet&nbsp;?
                </h2>
                <p className={styles.ctaContent}>
                    Contactez-nous dès maintenant pour discuter de vos idées et
                    commencer à créer le site web qui vous ressemble.
                </p>
                <Link href="/contact" className={styles.ctaBtn}>
                    Commencer
                </Link>
            </section>
        </main>
    )
}
