import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Testimonials.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

async function getTestimonialsData() {
    const { testimonials } = await require('../../../data/testimonials.json')
    return testimonials
}

export default function Testimonials() {
    const [testimonialsData, setTestimonialsData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const testimonials = await getTestimonialsData()
            setTestimonialsData(testimonials)
        }
        fetchData()
    }, [])

    const testimanialAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        animate: (index) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.25 * index,
            },
        }),
    }

    return (
        <section className={`home-section ${styles.testimonials}`}>
            <article className={styles.article}>
                <h2 className={`home-section-title ${styles.title}`}>
                    Ils m'ont fait confiance.
                </h2>

                <div className={styles.wrapper}>
                    {testimonialsData.map((testimonial, index) => (
                        <article
                            key={'testimonial' + index}
                            className={styles.testimonial}
                        >
                            <motion.blockquote
                                variants={testimanialAnimationVariants}
                                initial="initial"
                                whileInView={() => 'animate'}
                                custom={index}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: 0.75,
                                }}
                                className={styles.content}
                            >
                                {/* {testimonial.me && (
                                    <motion.div
                                        className={styles.comment}
                                        animate={{ opacity: 1 }}
                                    >
                                        c'est moi
                                    </motion.div>
                                )} */}
                                {testimonial.content}
                            </motion.blockquote>
                            <span className={styles.author}>
                                {testimonial.author.map((line, index) => (
                                    <span key={'testimonial'+index}>{line}</span>
                                ))}
                            </span>
                            <Link
                                className={styles.link}
                                href={testimonial.link}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Voir le site
                            </Link>
                        </article>
                    ))}
                </div>
            </article>
        </section>
    )
}
