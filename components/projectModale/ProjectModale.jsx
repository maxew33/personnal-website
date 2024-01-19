import React, { useEffect, useState } from 'react'
import styles from './ProjectModale.module.css'

async function getProjectsData() {
    const { projects } = await require('../../data/projects.json')
    return projects
}

export default function ProjectModale({ id, project, handleClick }) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const projectsData = await getProjectsData()

            const selectedProject = projectsData.find((p) => p.id === id)

            selectedProject
                ? setData([selectedProject])
                : console.error('pas de correspondance')
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div>ProjectModale {project && project}</div>
                <button onClick={handleClick}>X</button>
            </div>
        </section>
    )
}
