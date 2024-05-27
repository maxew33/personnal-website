import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Service.module.css'
import Conclusion from '@/components/conclusion/Conclusion'

async function getServiceData() {
    const { service } = await require('../../data/service.json')
    return service
}

export default function Services() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const servicesData = await getServiceData()
            setData(servicesData)
        }
        fetchData()
    }, [])

    const serviceWrapperAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0.5,
            y: 50,
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <main>
            <section className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Mes services</h1>
                    <p className={styles.presentation}>
                        Je crois en l'importance d'une approche sur mesure pour
                        chaque projet. <br />
                        <br />
                        Un{' '}
                        <span className={styles.highlight}>
                            site vitrine
                        </span>{' '}
                        élégant, une solution{' '}
                        <span className={styles.highlight}>e-commerce</span>{' '}
                        intuitive , ou un
                        <span className={styles.highlight}>
                            {' '}
                            portfolio
                        </span>{' '}
                        dynamique, je
                        conçois des solutions personnalisées qui reflètent votre
                        identité et vos objectifs. <br />
                        <br />
                        Enfin, une fois le site mis en place, je procède à un
                        audit qui vise à garantir des performances optimales,
                        une accessibilité maximale, et un référencement (SEO)
                        irréprochable.
                        <br />
                        <br />
                        Pour la conception de votre site, je peux utiliser <span className={styles.highlight}>wordpress</span> ou exploiter les capacités
                        de <span className={styles.highlight}>Next.js</span> et de Framer Motion. <br />
                        {/* <br />
                        Quelque soit la solution choisie, une fois le site mis en place, je procède à un audit à
                        l'aide de Lighthouse. <br />
                        Cette démarche vise à garantir des performances
                        optimales, une accessibilité maximale, et un
                        référencement (SEO) irréprochable.
                        <br /> */}
                        <br />
                    </p>
                    <div className={styles.illus}></div>
                </div>
                <h2 className={styles.introduction}>
                    Voici les cinq piliers fondamentaux sur lesquels je m'appuie
                    pour développer chaque site :
                </h2>
                <section className={styles.features}>
                    {data.map((service, index) => (
                        <motion.article
                            key={'article' + index}
                            variants={serviceWrapperAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            custom={index}
                            className={styles.feature}
                        >
                            <h2 className={styles.articleTitle}>
                                {service.title}
                            </h2>
                            <ul className={styles.contentList}>
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </section>
            </section>
            <Conclusion />
        </main>
    )
}
