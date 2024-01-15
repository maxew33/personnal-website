'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Header.module.css'

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

                <a href="tel:0781847657" className={styles.phone}>
                    07 81 84 76 57
                </a>
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
                </section>
            </header>
        </div>
    )
}
