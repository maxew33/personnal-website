import Link from 'next/link'
import React from 'react'
import styles from './Pricing.module.css'

export default function Pricing() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Découvrez nos offres web</h1>
            <h2 className={styles.subtitle}>
                Choisissez la solution adaptée à votre succès en ligne
            </h2>
            <section className={styles.pricingWrapper}>
                <article className={`${styles.article} ${styles.basic}`}>
                    <div className={styles.header}>
                        à partir de <span className={styles.price}>800€</span>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.pricingTitle}>
                            offre essentielle
                        </h3>
                        <h4 className={styles.pricingSubtitle}>
                            présence en ligne
                        </h4>
                        <ul className={styles.contentList}>
                            <li>Site vitrine</li>
                            <li>
                                Design basé sur un de{' '}
                                <Link href="/templates">nos modèles</Link>
                            </li>
                            <li>Référencement de base</li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <Link href="/contact">en savoir +</Link>
                    </div>
                </article>
                <article className={`${styles.article} ${styles.standard}`}>
                    <div className={styles.header}>
                        à partir de <span className={styles.price}>1500€</span>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.pricingTitle}>offre standard</h3>
                        <h4 className={styles.pricingSubtitle}>
                            visibilité avancée
                        </h4>
                        <ul className={styles.contentList}>
                            <li>Site vitrine jusqu'à 5 pages</li>
                            <li>Design personnalisé</li>
                            <li>Formulaire de contact</li>
                            <li>Référencement avancé</li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <Link href="/contact">en savoir +</Link>
                    </div>
                </article>
                <article className={`${styles.article} ${styles.premium}`}>
                    <div className={styles.header}>
                        à partir de <span className={styles.price}>3000€</span>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.pricingTitle}>
                            offre e-commerce
                        </h3>
                        <h4 className={styles.pricingSubtitle}>
                            boutique en ligne
                        </h4>
                        <ul className={styles.contentList}>
                            <li>Site e-commerce professionnel</li>
                            <li>Système de gestion de contenu (CMS)</li>
                            <li>Interface utilisateur intuitive</li>
                            <li>Formation à l'utilisation du CMS</li>
                            <li>Référencement avancé</li>
                        </ul>
                    </div>
                    <div className={styles.footer}>
                        <Link href="/contact">en savoir +</Link>
                    </div>
                </article>
            </section>
        </main>
    )
}
