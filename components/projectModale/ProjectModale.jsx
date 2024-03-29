import React, { useEffect, useState } from 'react'
import styles from './ProjectModale.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

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
            initial={{ opacity: 0.5, gridTemplateRows: '0fr' }}
            animate={{ opacity: 1, gridTemplateRows: '1fr' }}
            transition={{ ease: 'linear', duration: 0.5 }}
            exit={{ opacity: 0.5, gridTemplateRows: '0fr' }}
        >
            <div className={styles.container}>
                {data ? (
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {data.name.map((word, index) => (
                                <span key={`word` + index}>
                                    {word + ' '}
                                    <br />
                                </span>
                            ))}
                        </h2>
                        <p className={styles.description}>
                            {data.description.map((line, index) => (
                                <span key={`description${index}`}>{line}</span>
                            ))}
                        </p>
                        <div
                            className={`${styles.contentWrapper} ${styles.objectives}`}
                        >
                            <h3 className={styles.contentTitle}>Objectif</h3>
                            <div className={styles.contentText}>
                                {data.objectives.map((line, index) => (
                                    <span key={`objectives${index}`}>
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`${styles.contentWrapper} ${styles.implementation}`}
                        >
                            <h3 className={styles.contentTitle}>Réalisation</h3>
                            <div className={styles.contentText}>
                                {data.implementation.map((line, index) => (
                                    <span key={`implementation${index}`}>
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`${styles.contentWrapper} ${styles.highlights}`}
                        >
                            <h3 className={styles.contentTitle}>
                                Points forts
                            </h3>
                            <ul className={styles.hightlightsList}>
                                {data.highlights.map((highlight, index) => (
                                    <li
                                        key={`hightlight${index}`}
                                        className={styles.contentText}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />{' '}
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
                                src={data.result.illus}
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
                    <FontAwesomeIcon icon={faXmark} className={styles.icon} />
                </button>
            </div>
        </motion.article>
    )
}
