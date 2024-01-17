import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion, delay } from 'framer-motion'
// import { useWindowHeight } from '@react-hook/window-size'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'

export default function Hero(props) {
    const [illusData, setIllusData] = useState([])
    const [startCarousel, setStartCarousel] = useState(false)

    const [startTitle, setStartTitle] = useState(false)

    // const height = useWindowHeight()

    const height = props.height

    // fetching data

    async function getIllusData() {
        const { projects } = await require('../../data/projects.json')
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
        // offset: ['end end', 'end start'],
    })

    const opacity = useTransform(scrollY, [0, height / 4, height], [1, 1, 0])

    /* */

    return (
        <motion.section className="home-hero home-section" ref={targetRef}>
            <motion.article
                className="home-hero-article home-article"
                style={{ opacity }}
            >
                <motion.h1
                    className="home-title"
                    initial={{ x: 0, opacity: 0}}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'linear', duration: 1.5 }}
                >
                    Soyez{' '}
                    <motion.span className="home-highlighted">
                        en ligne
                    </motion.span>{' '}
                    avec un site qui{' '}
                    <span className="home-highlighted">vous</span> ressemble.
                </motion.h1>

                <p className="home-welcome">
                    TechQuest, création de sites web originaux.
                </p>

                <div className="home-link-wrapper">
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        className="contact-contact"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="contact-social-icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        className="contact-contact"
                    >
                        <FontAwesomeIcon
                            icon={faSquareFacebook}
                            className="contact-social-icon"
                        />
                    </a>
                </div>

                <motion.div
                    className="home-carousel"
                    initial={{ y: 250, opacity: 0, scale: 0.75 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    style={{ originX: 0.5, originY: 1 }}
                    transition={{ duration: 0.75, delay: 1 }}
                    onAnimationComplete={() => setStartTitle(true)}
                >
                    {startCarousel && (
                        <motion.div
                            className="home-carousel-illus-container"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            // transition={{ duration: 1, delay: 3 }}
                        >
                            {illusData.length > 0 &&
                                illusData.map((illus, index) => (
                                    <Image
                                        key={'illus' + index}
                                        src={illus.result.minify}
                                        height="351"
                                        width="204"
                                        className="home-carousel-illus"
                                        alt={illus.result.name}
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
                                ))}
                        </motion.div>
                    )}
                    <div className="home-carousel-name-container">
                        {/* {illusData.map((illus, index) => (
                            <div
                                key={'name' + index}
                                className="home-carousel-name"
                                data-displayed={
                                    index + counter > illusData.length - 1
                                        ? index + counter - illusData.length
                                        : index + counter
                                }
                            >
                                {illus.name}
                            </div>
                        ))} */}
                        {startTitle && (
                            <motion.div
                                className="home-carousel-title"
                                animate={{ opacity: 1 }}
                                onAnimationComplete={() =>
                                    setStartCarousel(true)
                                }
                            >
                                mes projets
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </motion.article>
        </motion.section>
    )
}
