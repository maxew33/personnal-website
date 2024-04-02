import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Wave from '../wave/wave'
import Malt from '../malt/malt'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Wave color={'var(--secondary)'} />
            <div className={styles.footerWrapper}>
                <Link href="/" className={styles.logoWrapper}>
                    <Image
                        src="/assets/logo.webp"
                        width={120}
                        height={120}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                    M.Malfilâtre
                </Link>
                <span className={styles.copyright}>
                    ©Maxime Malfilâtre 2024
                </span>
                <Link
                    href="/service"
                    className={`${styles.solutions} ${styles.link}`}
                >
                    Services
                </Link>
                <Link
                    href="/legal"
                    className={`${styles.legal} ${styles.link}`}
                >
                    Mentions Légales
                </Link>
                {/* <Link href="/blog">articles</Link> */}
                <Link
                    href="/contact"
                    className={`${styles.contact} ${styles.link}`}
                >
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
                    <a
                        href="https://www.instagram.com/maxew.dev/"
                        aria-label="instagram"
                        target="_blank"
                        rel="noopener"
                    >
                        <FontAwesomeIcon
                            icon={faSquareInstagram}
                            className={styles.icon}
                        />
                    </a>{' '}
                    <a
                        href="https://www.malt.fr/profile/maximemalfilatre"
                        target="_blank"
                        rel="noopener"
                        aria-label="malt"
                    >
                        <span className={styles.icon}>
                            <Malt size="2rem" />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
