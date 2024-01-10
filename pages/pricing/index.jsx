import Link from 'next/link'
import React, { useState, useEffect } from 'react'
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
        <main className="pricing-main">
            <h1 className="pricing-title">Découvrez nos offres web</h1>
            <h2 className="pricing-subtitle">
                Choisissez la solution adaptée à votre succès en ligne
            </h2>
            <section className="pricing-pricingWrapper">
                {data.map((price, index) => (
                    <motion.article
                        key={'article' + index}
                        variants={priceWrapperAnimationVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                        className={`pricing-article pricing-${price.type}`}
                    >
                        <div className="pricing-header">
                            à partir de{' '}
                            <span className="pricing-price">{price.price}</span>
                        </div>
                        <div className="pricing-content">
                            <h3 className="pricing-pricingTitle">
                                {price.title}
                            </h3>
                            <h4 className="pricing-pricingSubtitle">
                                {price.subtitle}
                            </h4>
                            <input
                                type="checkbox"
                                name=""
                                id={`more${price.type}`}
                                className="pricing-more"
                            />
                            <label
                                htmlFor={`more${price.type}`}
                                className="pricing-labelForMore"
                            >
                                en savoir +{' '}
                            </label>
                            <label
                                htmlFor={`more${price.type}`}
                                className="pricing-labelForLess"
                            >
                                fermer
                            </label>
                            <ul className="pricing-contentList">
                                {price.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <div className="pricing-footer">
                                <Link href="/contact" className='pricing-contact'>Contact</Link>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </section>
        </main>
    )
}
