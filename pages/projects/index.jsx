'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'
import Image from 'next/image'
import ProjectModale from '@/components/projectModale/ProjectModale'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function Projects() {
    const [data, setData] = useState([])

    const [projectPosition, setProjectPosition] = useState(0)

    const [modalDisplayed, setModalDisplayed] = useState(false)

    const [direction, setDirection] = useState(0)

    const [projectSelected, setProjectSelected] = useState()

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()
            setData(projectsData)
        }
        fetchData()
    }, [])

    const handleClick = (project) => {
        setProjectSelected(project)
        setModalDisplayed(!modalDisplayed)
    }

    const handleDirection = (dir) => {
        setDirection(dir)
        setModalDisplayed(false)

        setProjectPosition((formerPos) =>
            formerPos + dir < 0
                ? data.length - 1
                : formerPos + dir > data.length - 1
                ? 0
                : formerPos + dir
        )
    }

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Projets</h1>
                <p className={styles.headerContent}>
                    Chaque projet est une histoire unique de créativité, de
                    collaboration et de réussite. <br />
                    Explorez ce portfolio pour découvrir comment je transforme
                    des idées en expériences en ligne exceptionnelles.
                </p>
                <Link href="/contact" className={styles.contactBtn}>
                    contact
                </Link>
            </header>
            <div className={styles.carousel}>
                <button
                    className={`${styles.button} ${styles.left}`}
                    onClick={() => handleDirection(-1)}
                >
                    left
                </button>
                <button
                    className={`${styles.button} ${styles.right}`}
                    onClick={() => handleDirection(1)}
                >
                    right
                </button>
                {data.map((project, index) => (
                    <div
                        className={styles.projectContainer}
                        onClick={() => handleClick(project)}
                        data-position={
                            ((index + projectPosition) % data.length) +
                            direction
                        }
                        key={'project' + index}
                    >
                        <Image
                            src={project.result.path}
                            height={295}
                            width={530}
                            className={styles.illus}
                            alt={project.result.name}
                        />
                        <span className={styles.name}>{project.name}</span>
                    </div>
                ))}
            </div>
            {modalDisplayed && (
                <ProjectModale
                    id={projectSelected.id}
                    handleClick={handleClick}
                />
            )}
        </main>
    )
}
