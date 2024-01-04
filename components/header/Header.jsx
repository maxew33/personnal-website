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
            path: '/pricing/',
            name: 'tarifs',
        },
    ]

    const displayNav = () => {
        setMenuOpen(!menuOpen)
    }

    const hideNav = () => {
        setMenuOpen(false)
    }

    return (
        <div className={styles.headerContainer}>
            <header className={`${styles.header} ${
                            menuOpen && styles.menuOpen
                        }`}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/assets/logo.png"
                        width={256}
                        height={77}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                </Link>
                <button onClick={displayNav} className={styles.burger}>
                    <span></span>
                </button>
                <nav className={styles.navigation}>
                    {paths.map((path, index) => (
                        <Link
                            href={path.path}
                            key={`path${index}`}
                            className={`${styles.link} ${
                                pathname === path.path && styles.active
                            }`}
                            onClick={hideNav} 
                        >
                            {path.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact/"
                        className={`${styles.contact} ${
                            pathname === '/contact/' && styles.active
                        }`}
                        onClick={hideNav} 
                    >
                        contact
                    </Link>
                </nav>
            </header>
        </div>
    )
}
