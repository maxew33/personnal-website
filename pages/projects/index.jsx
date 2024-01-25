'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Projects.module.css'
import Image from 'next/image'
import ProjectModale from '@/components/projectModale/ProjectModale'
import { AnimatePresence } from 'framer-motion'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function Projects() {
    const [data, setData] = useState([])

    const [position, setPosition] = useState([])

    const [projectPosition, setProjectPosition] = useState(0)

    const [modalDisplayed, setModalDisplayed] = useState(false)

    const [direction, setDirection] = useState(0)

    const [projectSelected, setProjectSelected] = useState()
    const [formerProjectSelected, setFormerProjectSelected] = useState()

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
    }, [data])

    const handleDirection = (dir) => {
        setDirection(dir)

        const futurPosition = position.map((value) =>
            value + dir 
        )

        setPosition(futurPosition)

        setProjectPosition((formerPos) =>
            formerPos + dir < 0
                ? data.length - 1
                : formerPos + dir > data.length - 1
                ? 0
                : formerPos + dir
        )
    }

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

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Projets</h1>
                <p className={styles.headerContent}>
                    Chaque projet est une histoire unique de créativité, de
                    collaboration et de réussite. <br />
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
                            position[index]
                        }
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
                        data-position={
                            position[index]
                        }
                    >
                        {project.name}
                    </span>
                ))}
            </div>
        </main>
    )
}
