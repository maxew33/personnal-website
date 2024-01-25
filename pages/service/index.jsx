import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Service.module.css'
import Conclusion from '@/components/conclusion/Conclusion'

async function getServiceData() {
    const { service } = await require('../../data/service.json')
    return service
}

export default function Pricing() {
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
                        Pour la conception des sites, j'exploite les capacités
                        de React et de son framework Next.js, tandis que les
                        animations sont élaborées avec Framer Motion. <br />
                        <br />
                        Une fois le site mis en place, je procède à un audit à
                        l'aide de Lighthouse. <br />
                        Cette démarche vise à garantir des performances
                        optimales, une accessibilité maximale, et un
                        référencement (SEO) irréprochable.
                        <br />
                        <br />
                    </p>
                    <div className={styles.illus}></div>
                </div>
                <h2 className={styles.introduction}>
                    Voici les cinq piliers fondamentaux sur lesquels je m'appuie
                    pour développer chaque site:
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
                                    <li key={index}>
                                        <Image
                                            src="/assets/logo.webp"
                                            width={9}
                                            height={10}
                                            className={styles.logo}
                                        />
                                        {feature}
                                    </li>
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
