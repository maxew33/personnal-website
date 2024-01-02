'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    const pathname = usePathname()

    const paths =[
        {
            'path':'/',
            'name':'accueil'
        },
        {
            'path':'/projects/',
            'name':'projets'
        },
        {
            'path':'/pricing/',
            'name':'tarifs'
        },
    ]

    console.log(pathname)

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <Link href="/" className={styles.logoLink}>
                    <Image
                        src="/assets/logo.png"
                        width={256}
                        height={77}
                        alt="logo de techquest"
                        className={styles.logo}
                    />
                </Link>
                <nav className={styles.navigation}>
                    {paths.map((path, index) => (
                        <Link href={path.path} key={`path${index}`} className={`${styles.link} ${pathname === path.path && styles.active}`}>{path.name}</Link>
                    ))}
                    <Link href='/contact/' className={`${styles.contact} ${pathname === '/contact/' && styles.active}`}>contact</Link>
                </nav>
            </header>
        </div>
    )
}


