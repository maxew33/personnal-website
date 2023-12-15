import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
    const [imageData, setImageData] = useState('')

    useEffect(() => {
        setImageData(
            '/assets/portraits/quinten-de-graaf-iwBfqKwaJQI-unsplash.jpg'
        )

        document.addEventListener('scroll', () => {
            console.log(123)
        })
    }, [])

    return (
        <>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heroHeader}>
                        Bienvenue chez Velvet Studio, votre partenaire de
                        confiance pour la création de sites web exceptionnels.
                    </h1>
                    <p className={styles.txtHook}>
                        Soyez{' '}
                        <span className={styles.highlighted}>En ligne</span>
                        <br />
                        avec un site
                        <br /> qui{' '}
                        <span className={styles.highlighted}>vous</span>{' '}
                        ressemble.
                        <br />
                        <Link href="/contact" className={styles.contact}>
                            Commençons un projet
                        </Link>
                    </p>
                    <div className={styles.slider}>
                        <div className={styles.imgContainer}>
                            <Image
                                src={imageData}
                                alt="eyes"
                                layout="fill"
                                objectFit="cover"
                                // className={styles.imgContainer}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.callToAction}>
                    <p className={styles.callToActionText}>
                        Particulier cherchant à partager votre passion ou
                        entreprise visant à se démarquer, nous sommes là pour
                        transformer vos idées en réalité :{' '}
                        <Link className={styles.ctaLink} href="/contact">
                            contactez-nous
                        </Link>
                        .
                    </p>
                </section>
                <section className={styles.features}>
                    <article className={styles.featureWrapper}>
                        <h2 className={styles.featureTitle}>
                            Élégance Fonctionnelle
                        </h2>
                        <p className={styles.featureContent}>
                            Chaque site que nous créons est une fusion
                            harmonieuse de design esthétique et de
                            fonctionnalités puissantes. <br />
                            Pour nous l'élégance n'est pas un luxe mais une
                            composante essentielle de chaque projet
                        </p>
                    </article>
                    <article className={styles.featureWrapper}>
                        <h2 className={styles.featureTitle}>
                            Conception Stratégique
                        </h2>
                        <p className={styles.featureContent}>
                            Chaque projet est guidé par une vision stratégique,
                            alignant chaque aspect du design sur vos objectifs
                            commerciaux. <br />
                            Avec nous, la conception va au-delà du visuel pour
                            devenir une force motrice pour votre succès en
                            ligne.
                        </p>
                    </article>
                    <article className={styles.featureWrapper}>
                        <h2 className={styles.featureTitle}>
                            Expérience Intuitive
                        </h2>
                        <p className={styles.featureContent}>
                            Chaque élément est conçu pour guider les
                            utilisateurs à travers votre contenu, favorisant
                            ainsi une exploration naturelle.
                            <br />
                            Grace à nous, vos visiteurs vivrons une immersion
                            totale dans ce que vous avez à offrir.
                        </p>
                    </article>
                </section>
                <section className={styles.work}>
                    <article className={styles.presentation}>
                        <h2>Choisir Velvet Studio</h2>
                        <p>
                            C'est choisir l'engagement envers l'excellence.
                            <br />
                            Un engagement qui se manifeste à travers nos
                            créations. <br />
                            Chaque site est le résultat d'une collaboration
                            étroite avec nos clients, transformant leurs idées
                            en des expériences en ligne uniques.
                        </p>
                        <Image
                            src="/assets/illus/john-schnobrich-FlPc9_VocJ4-unsplash.jpg"
                            width={576}
                            height={384}
                            alt="working together"
                        />
                    </article>

                    <article className={styles.presentation}>
                        <h2>Variété des profils</h2>
                        <p>
                            Nous sommes fiers d'offrir une variété de solutions
                            adaptées à tous les profils, quelle que soit la
                            taille de votre entreprise ou votre budget. Que vous
                            soyez un entrepreneur passionné, un artiste
                            indépendant, ou une entreprise établie, notre
                            approche est inclusive.
                        </p>
                        <Image
                            src="/assets/illus/krakenimages-Y5bvRlcCx8k-unsplash.jpg"
                            width={384}
                            height={576}
                            alt="working together"
                        />
                    </article>

                    {/* CTA */}

                    <article className={styles.testimonialsWrapper}>
                        <h2 className={styles.testimonialsTitle}>La satisfaction de nos clients est notre meilleure
                            publicité.</h2>
                        <p className={styles.testimonialsContent}>
                            Découvrez les témoignages de ceux qui ont déjà fait
                            confiance à TechQuest pour donner vie à leur
                            présence en ligne.
                        </p>
                        <div className={styles.testimonialSlider}>
                            <div className={styles.testimonial}>
                                <div className={styles.testimonialName}>Christophe V.</div>
                                <div className={styles.testimonialContent}>
                                    Maxime est un professionnel à la fois très
                                    réactif et très à l'écoute. Quelqu'un sur
                                    qui l'on peut se fier. Il semble avoir une
                                    solution pour chaque problème et c'est
                                    toujours un atout pour moi de travailler
                                    avec lui.
                                </div>
                            </div>
                            <div className={styles.testimonial}>
                                <div className={styles.testimonialName}>Jérémy H.</div>
                                <div className={styles.testimonialContent}>
                                    Maxime est un professionnel à la fois très
                                    réactif et très à l'écoute. Quelqu'un sur
                                    qui l'on peut se fier. Il semble avoir une
                                    solution pour chaque problème et c'est
                                    toujours un atout pour moi de travailler
                                    avec lui.
                                </div>
                            </div>
                            <div className={styles.testimonial}>
                                <div className={styles.testimonialName}>Maxime M.</div>
                                <div className={styles.testimonialContent}>
                                    Maxime est un professionnel à la fois très
                                    réactif et très à l'écoute. Quelqu'un sur
                                    qui l'on peut se fier. Il semble avoir une
                                    solution pour chaque problème et c'est
                                    toujours un atout pour moi de travailler
                                    avec lui.
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}
