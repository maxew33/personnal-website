import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Pricing.module.css'
import Conclusion from '@/components/conclusion/Conclusion'

async function getPricingData() {
    const { pricing } = await require('../../data/pricing.json')
    return pricing
}

export default function Pricing() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const pricesData = await getPricingData()
            setData(pricesData)
        }
        fetchData()
    }, [])

    const priceWrapperAnimationVariants = {
        initial: (index) => ({
            opacity: 0,
            scale: 0,
            x: 50 * (index - 1),
        }),
        animate: (index) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.75, delay: 0.15 * index },
        }),
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Tarifs</h1>

            <p className={styles.presentation}>
                Chacune de mes prestations comprend une formation à
                l'utilisation du site, assurant ainsi une transition fluide vers
                la gestion autonome de votre plateforme en ligne. <br/>Le premier
                rendez-vous, d'une durée d'environ 30 minutes, est gratuit et
                sans aucun engagement de votre part.
                <br />
                <br/>
                Voici la gamme de tarifs de base qui constituent le point de
                départ pour la création de votre site.
                <br /> Ils ne comprennent ni l'achat du nom de domaine ni
                l'hébergement, mais servent de référence pour définir le budget
                initial de votre projet. <br />
                Il est important de noter que ces tarifs sont sujets à évolution
                en fonction des options et fonctionnalités spécifiques choisies
                pour votre site.
            </p>
            <section className={styles.pricingWrapper}>
                {data.map((price, index) => (
                    <motion.article
                        key={'article' + index}
                        variants={priceWrapperAnimationVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        className={styles.article}
                    >
                        <div className={styles.header}>
                            à partir de{' '}
                            <span className={styles.price}>{price.price}</span>
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.pricingTitle}>
                                {price.title}
                            </h2>
                            <h3 className={styles.pricingSubtitle}>
                                {price.subtitle}
                            </h3>
                           <p className={styles.pricingContent}>
                            {price.feature}
                           </p>
                        </div>
                    </motion.article>
                ))}
            </section>
            <Conclusion />
        </main>
    )
}
