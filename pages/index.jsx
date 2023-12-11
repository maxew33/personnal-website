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
                    <p className={styles.heroFooter + ' footer'}>
                        Particulier cherchant à partager votre passion ou
                        entreprise visant à se démarquer, <br />
                        nous sommes là pour transformer vos idées en réalité :{' '}
                        <Link href="/contact">contactez-nous</Link>.
                    </p>
                </section>
                <section className={styles.work}>
                    <h2>Choisir Velvet Studio</h2>
                    <article>
                        <p>
                            Chez Velvet Studio, l'engagement envers l'excellence
                            se manifeste à travers nos créations. <br />
                            Chaque site est le résultat d'une collaboration
                            étroite avec nos clients, transformant leurs idées
                            en des expériences en ligne uniques.
                        </p>
                    </article>

                    <article>
                        <h2>Variété des profils</h2>
                        <p>
                            Que vous soyez un entrepreneur
                            passionné, un artiste créatif ou une entreprise
                            innovante, nous avons eu le privilège de travailler
                            sur une multitude de projets. De la conception
                            élégante de sites vitrines aux plateformes
                            dynamiques de commerce électronique, nos
                            réalisations démontrent notre capacité à répondre à
                            des besoins divers.
                        </p>
                    </article>
                    <article>
                        <h2>Design Intuitif : </h2>
                        <p>
                            Nous mettons l'accent sur un
                            design intuitif qui captivera vos visiteurs dès la
                            première impression. <br />
                            Nos créations ne se limitent pas à l'esthétique,
                            mais visent également à offrir une expérience
                            utilisateur fluide et mémorable
                        </p>
                    </article>

                    {/* CTA */}               

                    <article>
                        <h2>Témoignages</h2>
                    <p>
                        La satisfaction de nos clients est
                        notre meilleure publicité. <br />
                        Découvrez les témoignages de ceux qui ont déjà fait
                        confiance à TechQuest pour donner vie à leur présence en
                        ligne.
                    </p>
                    </article>
                </section>
            </main>
        </>
    )
}
