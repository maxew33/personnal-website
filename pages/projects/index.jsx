'use client'

import React, { useEffect, useState } from 'react'
import styles from './Projects.module.css'
import Image from 'next/image'
import ProjectModale from '@/components/projectModale/ProjectModale'
import { useSwipeable } from 'react-swipeable'
import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'

async function getProjectsData() {
    const { projects } = await import('../../data/projects.json')
    return projects
}

export default function Projects() {
    const [data, setData] = useState([])

    const [position, setPosition] = useState([])

    const [firstAnimDone, setFirstAnimDone] = useState(false)

    const [canChange, setCanChange] = useState(true)

    const [modalDisplayed, setModalDisplayed] = useState(false)

    const [projectSelected, setProjectSelected] = useState()

    const [formerProjectSelected, setFormerProjectSelected] = useState()

    const searchParams = useSearchParams()

    const projectId = searchParams.get('id')

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()
            setData(projectsData)
        }
        fetchData()
    }, [])

    //get the index for the data pos
    useEffect(() => {
        setPosition(Array.from(Array(data.length).keys()))
        projectId &&
            data.find(
                (project) => project.id === projectId && handleClick(project)
            )
    }, [data])

    const handleDirection = (dir) => {
        const futurPosition = position.map((value) => value + dir)

        canChange &&
            (setPosition(futurPosition),
            setTimeout(() => {
                setCanChange(true)
            }, 500))

        setCanChange(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setFirstAnimDone(true)
        }, 1000)
    }, [])

    useEffect(() => {
        position.forEach((pos, index) => {
            if (pos < 0) {
                setTimeout(() => {
                    setPosition((prevPosition) => {
                        const newPosition = [...prevPosition]
                        newPosition[index] = data.length - 1
                        return newPosition
                    })
                }, 500)
            }
            if (pos > data.length - 1) {
                setTimeout(() => {
                    setPosition((prevPosition) => {
                        const newPosition = [...prevPosition]
                        newPosition[index] = 0
                        return newPosition
                    })
                }, 500)
            }
        })
    }, [position])

    // changig the image by swipe
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            handleDirection(-1)
        },
        onSwipedRight: () => {
            handleDirection(1)
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: false,
        delta: 75,
    })

    //select a project

    const handleClick = (project) => {
        setFormerProjectSelected(projectSelected)
        setProjectSelected(project)
        setModalDisplayed(!modalDisplayed)
    }

    const handleClose = () => {
        setModalDisplayed(false)
    }

    useEffect(() => {
        setTimeout(() => {
            projectSelected !== formerProjectSelected && setModalDisplayed(true)
        }, 750)
    }, [projectSelected])

    useEffect(() => {
        modalDisplayed && window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [modalDisplayed])

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Projets</h1>
                <p className={styles.headerContent}>
                    Explorez ces projets pour découvrir comment des idées se
                    transforment en expériences en ligne.
                </p>
            </header>
            <AnimatePresence>
                {modalDisplayed && (
                    <ProjectModale
                        id={projectSelected.id}
                        handleClose={handleClose}
                    />
                )}
            </AnimatePresence>
            <div className={styles.carousel}>
                <div className={styles.arrowsWrapper}>
                    <button
                        className={`${styles.arrow} ${styles.left}`}
                        onClick={() => handleDirection(-1)}
                        aria-label="projet précédent"
                    >
                        <div></div>
                    </button>
                    <button
                        className={`${styles.arrow} ${styles.right}`}
                        onClick={() => handleDirection(1)}
                        aria-label="projet suivant"
                    >
                        <div></div>
                    </button>
                </div>
                <div className={styles.projectsContainer} {...handlers}>
                    {data.map((project, index) => (
                        <div
                            className={firstAnimDone ? styles.projectContainer : styles.firstAnim}
                            onClick={() => handleClick(project)}
                            data-position={position[index]}
                            key={'project' + index}
                        >
                            <Image
                                src={project.result.path}
                                height={414}
                                width={272}
                                className={styles.illus}
                                alt={project.result.name}
                            />
                        </div>
                    ))}
                    {data.map((project, index) => (
                        <span
                            className={styles.name}
                            key={'name' + index}
                            data-position={position[index]}
                        >
                            {project.name.map((words, index) => (
                                <span key={'words' + index}>
                                    {words} <br />
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>
        </main>
    )
}
