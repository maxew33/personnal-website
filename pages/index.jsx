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
    }, [])

    return (
        <>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heroHeader}>
                        Bienvenue sur TechQuest, votre partenaire de confiance
                        pour la création de sites web exceptionnels.
                    </h1>
                    <p className={styles.txtHook1}>
                        Soyez{' '}
                        <span className={styles.highlighted}>En ligne</span>
                    </p>
                    <p className={styles.txtHook2}>
                        Avec un site <br />
                        qui <span className={styles.highlighted}>
                            vous
                        </span>{' '}
                        ressemble.
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
                    <p className={styles.heroFooter}>
                        Particulier cherchant à partager votre passion ou
                        entreprise visant à se démarquer, <br />
                        nous sommes là pour transformer vos idées en réalité :{' '}
                        <Link href="/contact">contactez-nous</Link>.
                    </p>
                </section>
                <section className={styles.work}>
                    <p>
                        Chez TechQuest, notre engagement envers l'excellence se
                        manifeste à travers nos créations. <br /> Chaque site
                        web est le résultat d'une collaboration étroite avec nos
                        clients, transformant leurs idées en des expériences en
                        ligne uniques.
                    </p>
                    <article>
                        <img src="" alt="" />
                        <p>
                            Projets Variés : Que vous soyez un entrepreneur
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
                        <img src="" alt="" />
                        <p>
                            Design Intuitif : Nous mettons l'accent sur un
                            design intuitif qui captivera vos visiteurs dès la
                            première impression. <br />
                            Nos créations ne se limitent pas à l'esthétique,
                            mais visent également à offrir une expérience
                            utilisateur fluide et mémorable
                        </p>
                    </article>

                    {/* CTA */}

                    <p>
                        Témoignages Clients : La satisfaction de nos clients est
                        notre meilleure publicité. <br />
                        Découvrez les témoignages de ceux qui ont déjà fait
                        confiance à TechQuest pour donner vie à leur présence en
                        ligne.
                    </p>

                    <article>
                        <img src="" alt="" />
                        <p></p>
                    </article>
                </section>
            </main>
        </>
    )
}
