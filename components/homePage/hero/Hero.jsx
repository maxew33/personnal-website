import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Hero(props) {
    const [illusData, setIllusData] = useState([])
    const [startCarousel, setStartCarousel] = useState(false)

    const [startTitle, setStartTitle] = useState(false)

    const height = props.height

    // fetching data

    async function getIllusData() {
        const { carousel } = await require('../../../data/carousel.json')
        return carousel
    }

    useEffect(() => {
        async function fetchData() {
            const illus = await getIllusData()
            setIllusData(illus)
        }
        fetchData()
    }, [])

    // ====== Animations ====== /

    /* carousel */
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        illusData.length > 0 &&
            setTimeout(() => setCounter((counter + 1) % illusData.length), 1750)
    }, [counter, startCarousel])

    /* 1st part fade out */

    const targetRef = useRef()

    const { scrollY } = useScroll({
        target: targetRef,
    })

    const opacity = useTransform(scrollY, [0, height / 4, height], [1, 1, 0])

    /* */

    return (
        <motion.section
            className={`home-section ${styles.section}`}
            ref={targetRef}
        >
            <motion.article
                className={`${styles.article} home-article`}
                style={{ opacity }}
            >
                <motion.h1
                    className={styles.title}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'linear', duration: 0.75 }}
                >
                    <span className={styles.highlighted}>TechQuest</span>
                    <br />
                </motion.h1>

                <h2 className={styles.presentation}>
                    Soyez{' '}
                    <motion.span className={styles.highlighted}>
                        en ligne
                    </motion.span>{' '}
                    avec un site qui{' '}
                    <span className={styles.highlighted}>vous</span> ressemble.
                </h2>

                <div className={styles.linkWrapper}>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        aria-label="Linkedin"
                        target="_blank"
                        rel="noopener"
                        className={styles.link}
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener"
                        className={styles.link}
                    >
                        <FontAwesomeIcon
                            icon={faSquareFacebook}
                            className={styles.icon}
                        />
                    </a>
                </div>

                <motion.div
                    className={styles.carouselContainer}
                    initial={{
                        x: -350,
                        y: 250,
                        rotate: 90,
                        opacity: 0,
                        scale: 0.75,
                    }}
                    animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
                    style={{ originX: 0.5, originY: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onAnimationComplete={() => setStartTitle(true)}
                >
                    <div className={styles.commentContainer}>
                        {startTitle && (
                            <motion.div
                                className={styles.comment}
                                animate={{ opacity: 1 }}
                                onAnimationComplete={() =>
                                    setStartCarousel(true)
                                }
                            >
                                mes projets
                            </motion.div>
                        )}
                    </div>
                    {startCarousel && (
                        <motion.div
                            className={styles.carousel}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {illusData.length > 0 &&
                                illusData.map((illus, index) => (
                                    <Link href={`/projects?id=${illus.id}`} 
                                    key={'illus' + index}
                                    className={styles.projectLink}>
                                        <Image
                                            src={illus.path}
                                            height="350"
                                            width="204"
                                            className={styles.carouselIllus}
                                            alt={illus.name}
                                            data-position={
                                                index + counter >
                                                illusData.length - 1
                                                    ? index +
                                                      counter -
                                                      illusData.length
                                                    : index + counter
                                            }
                                            priority
                                        />
                                    </Link>
                                ))}
                        </motion.div>
                    )}
                </motion.div>
            </motion.article>
        </motion.section>
    )
}
