import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import { useScroll, useTransform, motion } from 'framer-motion'


async function getIllusData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}


export default function Hero() {
    const [illusData, setIllusData] = useState([])

    // fetching data

    useEffect(() => {
        console.log(`
_                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
     \\_________/
     
`)

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
            setTimeout(() => setCounter((counter + 1) % illusData.length), 3000)
    }, [counter, illusData])

    /* 1st part fade out */

    const targetRef = useRef()

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['end end', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    /* */
 
    return (
        <motion.section className="home-hero home-section" ref={targetRef}>
            <motion.article
                className="home-hero-article home-article"
                style={{ opacity }}
            >
                <h1 className="home-title">
                    Soyez <span className="home-highlighted">En ligne</span>{' '}
                    avec un site qui{' '}
                    <span className="home-highlighted">vous</span> ressemble.
                </h1>

                <p className="home-welcome">
                    TechQuest, création de site web originaux.
                </p>

                {illusData.length > 0 && (
                    <motion.div
                        className="home-carousel"
                        initial={{ y: 250, opacity: 0.7, scale: 0.75 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                        }}
                        style={{ originX: 0.5, originY: 1 }}
                    >
                        <div className="home-carousel-illus-container">
                            {illusData.map((illus, index) => (
                                <Image
                                    key={'illus' + index}
                                    src={illus.result.minify}
                                    height="351"
                                    width="204"
                                    className="home-carousel-illus"
                                    alt={illus.result.name}
                                    data-position={
                                        index + counter > illusData.length - 1
                                            ? index + counter - illusData.length
                                            : index + counter
                                    }
                                    priority
                                />
                            ))}
                        </div>
                        <div className="home-carousel-name-container">
                            {illusData.map((illus, index) => (
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
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.article>
        </motion.section>
    )
}
