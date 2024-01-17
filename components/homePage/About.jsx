import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Wave from '../wave/wave'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function About(props) {
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
        <section className="home-section home-about" ref={targetRef}>
            <Wave color="var(--primary)" positionPlace="top" />
            <Wave color="var(--bg)" positionPlace="bottom" />
            <article className="home-article home-about-article">
                <div className="home-about-title-wrapper">
                    <motion.h2
                        className="home-section-title home-about-title"
                        variants={titleAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        onAnimationComplete={() => setStartVideo(true)}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: 0.75,
                        }}
                    >
                        à propos
                    </motion.h2>
                    <div className="video-player-container">
                        {startVideo && (
                            <ReactPlayer
                                url="/assets/video/ben-video.mp4"
                                width={"unset"}
                                height={"unset"}
                                muted
                                loop
                                playing
                                className="video-player"
                            />
                        )}
                    </div>
                    {/* <Image
                src="/assets/home/max-portrait-2.jpg"
                height={400}
                width={600}
                className="home-about-illus"
                alt="pourquoi choisir TechQuest Bordeaux"
            /> */}
                </div>
                <div className="home-about-content">
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Bonjour, je m'appelle Maxime.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Je suis développeur web.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            J'ai créé TechQuest pour vous proposer{' '}
                            <Link href="/service/"> mes services</Link>.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Et pour vous accompagner dans la conception de votre
                            site web.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        
                    </p>
                </div>
            </article>
        </section>
    )
}
