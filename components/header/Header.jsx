import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './Header.module.css'
import AppContext from '../context/AppContext'

export default function Header() {

    const context = useContext(AppContext)
    
const handleClick = () =>{
    context.setDarkMode(!context.darkMode)
    console.log('clic !', context.darkMode)
}

    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    src="/assets/logo2.png"
                    width={60}
                    height={57.5}
                    alt="logo de techquest"
                />
            </Link>
            <nav>
                <Link href="/#about">à propos</Link>
                <Link href="/#projects">projets</Link>
                <Link href="/#estimate">devis</Link>
                <Link href="/blog">blog</Link>
                <Link href="/#contact">contact</Link>
            </nav>
            <button onClick={handleClick}>click me</button>
        </header>
    )
}
