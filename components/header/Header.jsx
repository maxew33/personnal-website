import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './Header.module.css'
import AppContext from '../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const context = useContext(AppContext)

    const handleClick = () => {
        context.setDarkMode(!context.darkMode)
        console.log('clic !', context.darkMode)
    }

    const handleScroll = () => {
        console.log(123)
    }

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header} onScroll={handleScroll}>
                <Link href="/" className={styles.link}>
                    <Image
                        src="/assets/logo.png"
                        width={256}
                        height={77}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                </Link>
                <nav className={styles.navigation}>
                    <Link href="/">accueil</Link>
                    <Link href="/projects">projets</Link>
                    <Link href="/pricing">devis</Link>
                    {/* <Link href="/blog">articles</Link> */}
                    <Link href="/contact" className={styles.contact}>
                        contact
                    </Link>
                </nav>
            </header>
        </div>
    )
}
