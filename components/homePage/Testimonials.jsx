import React, { useState, useEffect } from 'react'
import { delay, motion } from 'framer-motion'

async function getTestimonialsData() {
    const { testimonials } = await require('../../data/testimonials.json')
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
        <section className="home-testimonials">
            <article className="home-testimonials-content">
                <h2 className="home-section-title home-testimonials-title">
                    Ils m'ont fait confiance.
                </h2>
                <div className="home-testimonials-wrapper">
                    {testimonialsData.map((testimonial, index) => (
                        <article
                            key={'testimonial' + index}
                            className="home-testimonial"
                        >
                            <motion.blockquote
                                variants={testimanialAnimationVariants}
                                initial="initial"
                                whileInView={() => (
                                    console.log('in view'), 'animate'
                                )}
                                custom={index}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: .75,
                                }}
                                className="home-testimonial-content"
                            >
                                {testimonial.content}
                            </motion.blockquote>
                            <span className="home-testimonial-author">
                                {testimonial.author}
                            </span>
                        </article>
                    ))}
                </div>
            </article>
        </section>
    )
}
