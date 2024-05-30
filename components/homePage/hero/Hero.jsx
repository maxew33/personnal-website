import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './Hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Malt from '@/components/malt/malt'

export default function Hero({ height, width }) {
    const [illusData, setIllusData] = useState([])
    const [startCarousel, setStartCarousel] = useState(false)

    const [startTitle, setStartTitle] = useState(false)

    // fetching data

    async function getIllusData() {
        const { projects } = await require('../../../data/projects.json')
        return projects
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
                <motion.div
                    className={styles.title}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'linear', duration: 0.75 }}
                >
                    <h1 className={styles.highlighted}>Maxime Malfilâtre</h1>
                    <p className={styles.hook}>
                        Construisons ensemble un site qui vous ressemble.
                    </p>
                </motion.div>

                <h2 className={styles.presentation}>
                    Création de sites et d'applications web
                </h2>

                <div className={styles.linkWrapper}>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        aria-label="Linkedin"
                        target="_blank"
                        rel="noopener"
                        // className={styles.link}
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/maxew.dev/"
                        aria-label="instagram"
                        target="_blank"
                        rel="noopener"
                    >
                        <FontAwesomeIcon
                            icon={faSquareInstagram}
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.malt.fr/profile/maximemalfilatre"
                        target="_blank"
                        rel="noopener"
                        aria-label="malt"
                    >
                        <span className={styles.icon}>
                            <Malt size="2.5rem" />
                        </span>
                    </a>
                    <Link
                        href="/service/"
                        className={styles.link}
                    >
                        Mes services
                    </Link>
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
                    transition={{
                        duration: width > 1080 ? 0.5 : 0,
                        delay: width > 1080 ? 0.5 : 0,
                    }}
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
                                    <Link
                                        href={`/projects?id=${illus.id}`}
                                        key={'illus' + index}
                                        className={styles.projectLink}
                                    >
                                        <Image
                                            src={illus.result.minify}
                                            height="350"
                                            width="204"
                                            className={styles.carouselIllus}
                                            alt={illus.name[0]}
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
