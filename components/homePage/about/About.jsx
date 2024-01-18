import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Wave from '../../wave/wave'
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './About.module.css'

export default function About(props) {
    const [startTitle, setStartTitle] = useState(false)
    const [startVideo, setStartVideo] = useState(false)

    const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) // prevent hydration error

    const targetRef = useRef()

    const height = props.height

    console.log(height)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    })

    const titleAnimationVariants = {
        initial: {
            opacity: 0,
            scale: 0,
            y: height / 2,
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: 0.25,
            },
        },
    }

    return (
        <section className={`home-section ${styles.about}`} ref={targetRef}>
            <Wave color="var(--primary)" positionPlace="top" />
            <Wave color="var(--bg)" positionPlace="bottom" />
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
                            delay: 0.75,
                        }}
                    >
                        votre contact
                    </motion.h2>
                    
                    <div className={styles.videoPlayerContainer}>
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
                                width={'unset'}
                                height={'unset'}
                                muted
                                loop
                                playing
                                className={styles.videoPlayer}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.contentWrapper}>
                        <span className={styles.contentWrapperText}>
                            Bonjour, je m'appelle Maxime.
                        </span>
                    </p>
                    <p className={styles.contentWrapper}>
                        <span className={styles.contentWrapperText}>
                            Je suis développeur web.
                        </span>
                    </p>
                    <p className={styles.contentWrapper}>
                        <span className={styles.contentWrapperText}>
                            J'ai créé TechQuest pour vous proposer{' '}
                            <Link href="/service/"> mes services</Link>.
                        </span>
                    </p>
                    <p className={styles.contentWrapper}>
                        <span className={styles.contentWrapperText}>
                            Et pour vous accompagner dans la conception de votre
                            site web.
                        </span>
                    </p>
                    <p className={styles.contentWrapper}></p>
                </div>
            </article>
        </section>
    )
}
