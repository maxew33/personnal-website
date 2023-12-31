import React, { useEffect, useState } from 'react'
import styles from './Project.module.css'
import Image from 'next/image'

export default function Project(props) {

    const [data, setData] = useState({
        name: 'nom',
        description: 'description',
        goal: 'objectifs',
        highlights: ['points forts'],
        image: { nom: 'name', path: '' },
    })

    useEffect(() => {
      if (props) {
          const { name, description, goal, highlights, image } = props;

          // Update the state with the values from props
          setData({
              name: name || 'nom',
              description: description || 'description',
              goal: goal || 'objectifs',
              highlights: highlights || ['points forts'],
              image: { nom: image?.nom || 'name', path: image?.path || '' },
          });
      }
  }, [props]);

    return (
        <section className={styles.section}>
            <header>
                <h2>{data.name}</h2>
            </header>
            <div className={styles.content}>
                <div>
                <p>{data.description}</p>
                    <p>Goal: {data.goal}</p>
                    <ul>
                        {data.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={data.image.path || '/assets/home/chooseUs.png'}
                    height={467}
                    width={700}
                    className={styles.articleIllus}
                    alt={data.image.nom || 'pourquoi choisir Velvet Studio'}
                />
            </div>
        </section>
    )
}
