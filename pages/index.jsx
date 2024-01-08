import Link from 'next/link'
import styles from './Home.module.css'
import Image from 'next/image'
import Wave from '@/components/wave/wave'

export default function Home() {
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
                        Bienvenue chez Velvet Studio, votre partenaire de
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
                        alt="Bienvenue chez Velvet Studio"
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
                        alt="pourquoi choisir Velvet Studio"
                    />
                    <h2 className={styles.articleTitle}>Choisir Velvet Web</h2>
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
                        <article className={styles.feature}>
                            <h3 className={styles.featureTitle}>
                                Élégance Fonctionnelle
                            </h3>
                            <p className={styles.featureText}>
                                Chaque site que nous créons est une fusion
                                harmonieuse de design esthétique et de
                                fonctionnalités puissantes.
                                <br /> Pour nous l'élégance n'est pas un luxe
                                mais une composante essentielle de chaque
                                projet.
                            </p>
                        </article>
                        <article className={styles.feature}>
                            <h3 className={styles.featureTitle}>
                                Conception Stratégique
                            </h3>
                            <p className={styles.featureText}>
                                Chaque projet est guidé par une vision
                                stratégique, alignant chaque aspect du design
                                sur vos objectifs commerciaux.
                                <br />
                                Avec nous, la conception va au-delà du visuel
                                pour devenir une force motrice pour votre succès
                                en ligne.
                            </p>
                        </article>
                        <article className={styles.feature}>
                            <h3 className={styles.featureTitle}>
                                Expérience Intuitive
                            </h3>
                            <p className={styles.featureText}>
                                Chaque élément est conçu pour guider les
                                utilisateurs à travers votre contenu, favorisant
                                ainsi une exploration naturelle.
                                <br />
                                Grace à nous, vos visiteurs vivrons une
                                immersion totale dans ce que vous avez à offrir.
                            </p>
                        </article>
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
                        alt="pourquoi choisir Velvet Studio"
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
                        <article className={styles.testimonial}>
                            <p className={styles.testimonialContent}>
                                Maxime est un professionnel à la fois très
                                réactif et très à l'écoute. Quelqu'un sur qui
                                l'on peut se fier. Il semble avoir une solution
                                pour chaque problème et c'est toujours un atout
                                pour moi de travailler avec lui.
                            </p>
                            <span className={styles.testimonialAuthor}>
                                Jérémie H.
                            </span>
                        </article>
                        <article className={styles.testimonial}>
                            <p className={styles.testimonialContent}>
                                Nous sommes extrêmement satisfaits du site web
                                que Velvet Web a créé. Leur approche
                                professionnelle et leur attention aux détails
                                ont permis de mettre en valeur notre expertise
                                de manière élégante.
                            </p>
                            <span className={styles.testimonialAuthor}>
                                Christophe V.
                            </span>
                        </article>
                        <article className={styles.testimonial}>
                            <p className={styles.testimonialContent}>
                                Mes attentes ont été dépassées avec ce portfolio
                                interactif qui va au-delà d'une simple
                                présentation de mes compétences pour devenir une
                                véritable expérience immersive pour mes
                                visiteurs.
                            </p>
                            <span className={styles.testimonialAuthor}>
                                Maxime M.
                            </span>
                        </article>
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
