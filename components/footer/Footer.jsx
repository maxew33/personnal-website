import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
                        src="/assets/logoB.webp"
                        width={118}
                        height={129}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                    TechQuest
                </Link>
                <span className={styles.copyright}>
                    ©TechQuest Bordeaux 2024
                </span>
                <Link href="/service" className={styles.solutions}>
                    Services
                </Link>
                <Link href="/legal" className={styles.legal}>
                    Mentions Légales
                </Link>
                {/* <Link href="/blog">articles</Link> */}
                <Link href="/contact" className={styles.contact}>
                    contact
                </Link>
                <div className={styles.social}>
                    <Link
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        aria-label="Linkedin"
                        target="_blank"
                        rel="noopener"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener"
                    >
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
