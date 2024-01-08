import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faFacebookSquare,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Wave from '../wave/wave'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Wave />
            <div className={styles.footerWrapper}>
                <Link href="/" className={styles.link}>
                    <Image
                        src="/assets/logo.png"
                        width={118}
                        height={87}
                        alt="logo de velvet web"
                        className={styles.logo}
                    />
                    <span className={styles.name}>
                        <span>Velvet</span>
                        <span> Web</span>
                    </span>
                </Link>
                <span className={styles.copyright}>
                    ©Velvet web Bordeaux 2024
                </span>
                <Link href="/pricing" className={styles.solutions}>
                    Nos solutions
                </Link>
                <Link href="/legal" className={styles.legal}>
                    Mentions Légales
                </Link>
                {/* <Link href="/blog">articles</Link> */}
                <Link href="/contact" className={styles.contact}>
                    contact
                </Link>
                <div className={styles.social}>
                    <Link href="https://www.linkedin.com/in/maxime-malfilatre/">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/maxime-malfilatre/">
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            className={styles.icon}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
