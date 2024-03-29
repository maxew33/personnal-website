import React from 'react'
import Link from 'next/link'
import styles from './Conclusion.module.css'

export default function Conclusion() {
    return (
        <section className={styles.section}>
            <h2 className={`section-title ${styles.title}`}>
                Prêt à donner vie à votre projet&nbsp;?
            </h2>
            <p className={styles.content}>
                Discutons ensemble de vos idées et créons un site web qui vous
                ressemble.
            </p>
            <Link href="/contact" className={styles.btn}>
                Contactez-moi
            </Link>
        </section>
    )
}
