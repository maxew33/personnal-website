'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Wave from '../wave/wave'
import Malt from '../malt/malt'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const paths = [
        {
            path: '/',
            name: 'accueil',
        },
        {
            path: '/projects/',
            name: 'projets',
        },
        {
            path: '/service/',
            name: 'services',
        },
        {
            path: '/contact/',
            name: 'contact',
        },
    ]

    const displayNav = () => {
        setMenuOpen(!menuOpen)
    }

    const hideNav = () => {
        setMenuOpen(false)
    }

    return (
        <div
            className={`${styles.headerContainer} ${
                menuOpen && styles.headerMenuOpen
            }`}
        >
            <header
                className={`${styles.header} ${menuOpen && styles.menuOpen}`}
            >
                <Link
                    href="/"
                    className={styles.logoLink}
                    aria-label={paths.name}
                >
                    <Image
                        src="/assets/logo.webp"
                        width={36}
                        height={40}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                </Link>
                <button
                    onClick={displayNav}
                    className={styles.burger}
                    aria-label="menu"
                >
                    <span></span>
                </button>
                <div className={styles.phoneContainer}>
                    <a href="tel:0781847657" className={styles.phone}>
                        07 81 84 76 57
                    </a>
                    {/* -
                    <a
                        href="https://www.malt.fr/profile/maximemalfilatre"
                        target="_blank"
                        rel="noopener"
                        aria-label="malt"
                    >
                        <span className={styles.malt}>
                            <Malt size="1.75rem" />
                        </span>
                    </a> */}
                </div>

                <section
                    className={`${styles.navigationWrapper} ${
                        menuOpen && styles.navigationWrapperOpen
                    }`}
                >
                    <nav className={styles.navigation}>
                        {paths.map((path, index) => (
                            <Link
                                href={path.path}
                                key={`path${index}`}
                                aria-current={
                                    pathname === path.path ? 'true' : 'false'
                                }
                                className={`${styles.link} ${
                                    pathname === path.path && styles.active
                                }`}
                                onClick={hideNav}
                            >
                                {path.name}
                            </Link>
                        ))}
                    </nav>
                    <div className={styles.contact}>
                        <Link
                            href="/"
                            className={styles.navBarLogoLink}
                            aria-label={paths.name}
                        >
                            <Image
                                src="/assets/logo.webp"
                                width={150}
                                height={150}
                                alt="logo de Maxime Malfilâtre"
                                className={styles.navBarlogo}
                            />
                            Maxime Malfilâtre
                        </Link>
                        <div className={styles.navigationLink}>
                            <a
                                href="tel:0781847657"
                                className={styles.navBarPhone}
                            >
                                07 81 84 76 57
                            </a>
                            <div className={styles.social}>
                                <a
                                    href="https://www.linkedin.com/in/maxime-malfilatre/"
                                    aria-label="Linkedin"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className={styles.icon}
                                    />
                                </a>
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
                                </a>
                                <a
                                    href="https://www.malt.fr/profile/maximemalfilatre"
                                    target="_blank"
                                    rel="noopener"
                                    aria-label="malt"
                                >
                                    <span className={styles.icon}>
                                        <Malt size="2.5rem" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Wave positionPlace="bottom" />
                </section>
            </header>
        </div>
    )
}
