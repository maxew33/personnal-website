import React, { useEffect, useState } from 'react'
import styles from './ProjectModale.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function ProjectModale({ id, handleClose }) {
    const [data, setData] = useState()

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()

            const selectedProject = projectsData.find((p) => p.id === id)

            selectedProject
                ? setData(selectedProject)
                : console.error('pas de correspondance')
        }

        fetchData()
    }, [])

    return (
        <motion.article
            className={styles.article}
            initial={{ opacity: 0.5, height: 0 }}
            animate={{ opacity: 1, height: 500 }}
            transition={{ ease: 'linear', duration: 0.5 }}
            exit={{ opacity: 0.5, height: 0 }}
        >
            <div className={styles.container}>
                {data ? (
                    <div className={styles.content}>
                        <p className={styles.description}>{data.description}</p>
                        <div
                            className={`${styles.contentWrapper} ${styles.objectives}`}
                        >
                            <h3 className={styles.contentTitle}>
                                Objectifs :{' '}
                            </h3>
                            <div className={styles.contentText}>
                                {data.objectives}
                            </div>
                        </div>
                        <div
                            className={`${styles.contentWrapper} ${styles.implementation}`}
                        >
                            <h3 className={styles.contentTitle}>
                                Réalisation :{' '}
                            </h3>
                            <div className={styles.contentText}>
                                {data.implementation}
                            </div>
                        </div>
                        <div
                            className={`${styles.contentWrapper} ${styles.highlights}`}
                        >
                            <h3 className={styles.contentTitle}>
                                Points forts :
                            </h3>{' '}
                            <ul>
                                {data.highlights.map((highlight, index) => (
                                    <li
                                        key={`hightlight${index}`}
                                        className={styles.contentText}
                                    >
                                        <Image
                                            src="/assets/logo.webp"
                                            width={13.5}
                                            height={15}
                                            className={styles.logo}
                                        />{' '}
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.contentLink}
                        >
                            <Image
                                src={
                                    data.result.path ||
                                    '/assets/home/chooseUs.webp'
                                }
                                height={295}
                                width={530}
                                className={styles.contentIllus}
                                alt={data.result.name || 'visuels du site'}
                            />
                        </a>
                    </div>
                ) : (
                    <div>Nous ne retrouvons pas l'article demandé.</div>
                )}
                <button onClick={handleClose} className={styles.exit}>
                    X
                </button>
            </div>
        </motion.article>
    )
}
