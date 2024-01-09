import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import styles from './Pricing.module.css'
import { motion } from 'framer-motion'

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
        console.log(data)
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
            transition: { duration: .75, delay: 0.15 * index },
        }),
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Découvrez nos offres web</h1>
            <h2 className={styles.subtitle}>
                Choisissez la solution adaptée à votre succès en ligne
            </h2>
            <section className={styles.pricingWrapper}>
                {data.map((price, index) => (
                    <motion.article
                        key={'article' + index}
                        variants={priceWrapperAnimationVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        className={`${styles.article} ${styles[price.type]}`}
                    >
                        <div className={styles.header}>
                            à partir de{' '}
                            <span className={styles.price}>{price.price}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.pricingTitle}>
                                {price.title}
                            </h3>
                            <h4 className={styles.pricingSubtitle}>
                                {price.subtitle}
                            </h4>
                            <input
                                type="checkbox"
                                name=""
                                id={`more${price.type}`}
                                className={styles.more}
                            />
                            <label
                                htmlFor={`more${price.type}`}
                                className={styles.labelForMore}
                            >
                                en savoir +{' '}
                            </label>
                            <label
                                htmlFor={`more${price.type}`}
                                className={styles.labelForLess}
                            >
                                fermer
                            </label>
                            <ul className={styles.contentList}>
                                {price.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className={styles.footer}>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>
        </main>
    )
}
