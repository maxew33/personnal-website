import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Project(props) {
    const [data, setData] = useState({
        name: 'nom',
        description: 'description',
        objectives: 'objectifs',
        implementation: 'réalisation',
        highlights: ['points forts'],
        result: { nom: 'name', path: '' },
        banner: '',
        link:'/'
    })

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (props) {
            const {
                name,
                description,
                objectives,
                highlights,
                result,
                banner,
                implementation,
                link
            } = props

            // Update the state with the values from props
            setData({
                name: name || 'nom',
                description: description || 'description',
                objectives: objectives || 'objectifs',
                implementation: implementation || 'réalisation',
                highlights: highlights || ['points forts'],
                result: {
                    name: result?.name || 'visuels',
                    path: result?.path || '',
                },
                banner: banner || '/assets/projects/banner.jpg',
                link: link || '/'
            })
        }
    }, [props])

    const openWrapper = () => {
        setActive(!active)
    }

    return (
        <section className={styles.section}>
            <header
                style={{ backgroundImage: `url(${data.banner})` }}
                className={styles.header}
            >
                <div className={styles.nameContainer} onClick={openWrapper}>
                    <h2>{data.name}</h2>
                    <span
                        className={`${styles.chevron} ${
                            active && styles.chevronActive
                        }`}
                    >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </header>

            <div className={`${styles.content} ${active && styles.active}`}>
                <p className={styles.description}>{data.description}</p>
                <div
                    className={`${styles.contentWrapper} ${styles.objectives}`}
                >
                    <h3 className={styles.contentTitle}>Objectifs : </h3>
                    {data.objectives}
                </div>
                <div
                    className={`${styles.contentWrapper} ${styles.implementation}`}
                >
                    <h3 className={styles.contentTitle}>Réalisation : </h3>
                    {data.implementation}
                </div>
                <div
                    className={`${styles.contentWrapper} ${styles.highlights}`}
                >
                    <h3 className={styles.contentTitle}>Points forts :</h3>{' '}
                    <ul>
                        {data.highlights.map((highlight, index) => (
                            <li key={`hightlight${index}`}>{highlight}</li>
                        ))}
                    </ul>
                </div>
                <a href={data.link} target="_blank" rel="noopener noreferrer" className={styles.contentLink} >
                <Image
                    src={data.result.path || '/assets/home/chooseUs.png'}
                    height={295}
                    width={530}
                    className={styles.contentIllus}
                    alt={data.result.name || 'visuels du site'}
                /></a>

            </div>
        </section>
    )
}
