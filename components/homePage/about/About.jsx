import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Wave from '../../wave/wave'
import { motion, useTransform, useScroll } from 'framer-motion'
import styles from './About.module.css'

async function getTextData() {
    const { text } = await require('../../../data/animatedText.json')
    return text
}

export default function About() {
    const [startTitle, setStartTitle] = useState(false)
    const [startVideo, setStartVideo] = useState(false)
    const [textData, setTextData] = useState()

    useEffect(() => {
        async function fetchData() {
            const text = await getTextData()
            setTextData(text)
        }
        fetchData()
    }, [])

    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) // prevent hydration error

    const targetRef = useRef()

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const textAX = useTransform(scrollYProgress, [0, 0.75], ['100vw', '5vw'])
    const textBX = useTransform(scrollYProgress, [0.15, 0.5], ['100vw', '5vw'])
    const textCX = useTransform(scrollYProgress, [0.15, 0.7], ['100vw', '5vw'])
    const textDX = useTransform(scrollYProgress, [0.15, 0.6], ['100vw', '5vw'])
    // const textEX = useTransform(scrollYProgress, [0.15, 0.75], ['100vw', '5vw'])


    const titleAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0.75,
            y: 16,
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: 0.125,
            },
        },
    }

    const videoPlayerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.25,
            },
        },
    }

    return (
        <section className={`home-section ${styles.about}`} ref={targetRef}>
            <Wave positionPlace="top" />
            <article className={`home-article ${styles.article}`}>
                <div className={styles.titleWrapper}>
                    <motion.h2
                        className={`home-section-title ${styles.title}`}
                        variants={titleAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        onAnimationComplete={() => setStartTitle(true)}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                        }}
                    >
                        Votre contact
                    </motion.h2>

                    <motion.div
                        className={styles.videoPlayerContainer}
                        variants={videoPlayerVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {startTitle && (
                            <motion.div
                                className={styles.videoTitle}
                                animate={{ opacity: 1 }}
                                onAnimationComplete={() => setStartVideo(true)}
                            >
                                mon bureau
                            </motion.div>
                        )}
                        {startVideo && (
                            <ReactPlayer
                                url="/assets/video/ben-video.mp4"
                                width={'100%'}
                                height={'100%'}
                                muted
                                loop
                                playing
                                className={styles.videoPlayer}
                            />
                        )}
                    </motion.div>
                </div>

                <div className={styles.presentationWrapper}>
                    <motion.div className={styles.presentationText}
                    >
                        <motion.span
                            className={`${styles.text} ${styles.textA}`}
                            style={{ x: textAX }}
                        >
                            Maxime
                        </motion.span>
                        <motion.span
                            className={`${styles.text} ${styles.textB}`}
                            style={{ x: textBX }}
                        >
                            Développeur web
                        </motion.span>
                        <motion.span
                            className={`${styles.text} ${styles.textC}`}
                            style={{ x: textCX }}
                        >
                            Sur Bordeaux
                        </motion.span>
                        <motion.span
                            className={`${styles.text} ${styles.textD}`}
                            style={{ x: textDX }}
                        >
                            Et Libourne
                        </motion.span>
                        {/* <motion.span
                            className={`${styles.text} ${styles.textE}`}
                            style={{ x: textEX }}
                        >
                            A hâte de vous rencontrer
                        </motion.span> */}
                    </motion.div>
                </div>
            </article>
        </section>
    )
}
