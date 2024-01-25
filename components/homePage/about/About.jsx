import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Wave from '../../wave/wave'
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './About.module.css'
import AnimatedText from '@/components/animatedText/AnimatedText'

async function getTextData() {
    const { text } = await require('../../../data/animatedText.json')
    return text
}

export default function About(props) {
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

    useEffect(() => {
        console.log(textData)
    }, [textData])

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

    const videoPlayerVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: .5,
            },
        },
    }

    return (
        <section className={`home-section ${styles.about}`} ref={targetRef}>
            <Wave positionPlace="top" />
            {/* <Wave color="var(--bg)" positionPlace="bottom" /> */}
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
                            delay: 0.5,
                        }}
                    >
                        votre contact
                    </motion.h2>

                    <motion.div
                        className={styles.videoPlayerContainer}
                        variants={videoPlayerVariants}
                        initial="initial"
                        whileInView="animate"
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
                                width={'unset'}
                                height={'unset'}
                                muted
                                loop
                                playing
                                className={styles.videoPlayer}
                            />
                        )}
                    </motion.div>
                </div>
                <div className={styles.content}>
                    {/* {textData && textData.map((data, id) => 
                    <AnimatedText text={data} className={styles.contentWrapper} once='true' key={'data'+id}/>)
                    } */}
                    {textData &&
                        textData.map(
                            (data, id) => (
                                <p
                                    className={styles.contentWrapper}
                                    key={'data' + id}
                                >
                                    {data}
                                </p>
                            )
                            // <AnimatedText text={data} className={styles.contentWrapper} key={'data'+id}/>
                        )}
                    <p className={styles.contentWrapper}></p>
                </div>
            </article>
        </section>
    )
}
