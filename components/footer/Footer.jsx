import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <Link href="/" className={styles.link}>
                    <Image
                        src="/assets/logo.png"
                        width={256}
                        height={77}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                    <span className={styles.name}>
                        <span>Velvet</span>
                        <span> Web</span>
                        <span>Agency</span>
                    </span>
                </Link>
                <span>©Velvet web agency Bordeaux 2024</span>
                <Link href="/pricing">Nos solutions</Link>
                <Link href="/legal">Mentions Légales</Link>
                {/* <Link href="/blog">articles</Link> */}
                <Link href="/contact" className={styles.contact}>
                    contact
                </Link>
                <Link
                    href="https://www.linkedin.com/in/maxime-malfilatre/"
                    className={styles.contact}
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.icon}
                    />
                </Link>
            </div>
        </footer>
    )
}
