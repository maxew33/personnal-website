import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'

export default function Header() {
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
                <Link href="/#contact">contact</Link>
                <Link href="/blog">blog</Link>
            </nav>
        </header>
    )
}
