'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function Projects() {
    const searchParams = useSearchParams()

    const id = typeof(searchParams.get('id')) === 'string' ? parseInt(searchParams.get('id')) : 0

    const [data, setData] = useState([])

    const [projectPosition, setProjectPosition] = useState(id)

    const [modalDisplayed, setModalDisplayed] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()
            setData(projectsData)
        }
        fetchData()

    }, [])

    const handleClick = () => {
        console.log('click')
        setModalDisplayed(true)
    }

    const handleDirection = (dir) => {
        /*let newPosition = projectPosition

        newPosition += dir

        newPosition > data.length && (newPosition = 0)
        newPosition < 0 && (newPosition = data.length)

        console.log(newPosition)
        setProjectPosition(newPosition)*/
        setProjectPosition((formerPos) =>
            formerPos + dir < 0
                ? (data.length - 1)
                : formerPos + dir > (data.length - 1)
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
                    onClick={() => handleDirection(1)}
                >
                    left
                </button>
                <button
                    className={`${styles.button} ${styles.right}`}
                    onClick={() => handleDirection(-1)}
                >
                    right
                </button>
                {data.map((project, index) => (
                    <div
                        className={styles.projectContainer}
                        onClick={handleClick}
                        data-position={index - projectPosition}
                        key={'project' + index}
                    >
                        <Image
                            src={project.result.path}
                            height={295}
                            width={530}
                            className={styles.illus}
                            alt={project.result.name}
                        />
                        <span className={styles.name}>{project.name} - {projectPosition}</span>
                    </div>
                ))}
            </div>
            {modalDisplayed && <div className={styles.modale}>modale</div>}
        </main>
    )
}
