import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
    const [imageData, setImageData] = useState('')

    useEffect(() => {
        setImageData(
            '/assets/portraits/quinten-de-graaf-iwBfqKwaJQI-unsplash.jpg'
        )
    }, [])

    return (
        <>
            <main>
                <section className={styles.hero}>
                    <span className={styles.txtHook1}>
                        Soyez{' '}
                        <span className={styles.highlighted}>En ligne</span>
                    </span>
                    <span className={styles.txtHook2}>
                        Avec un site <br />
                        qui <span className={styles.highlighted}>
                            vous
                        </span>{' '}
                        ressemble.
                    </span>
                    <div className={styles.slider}>
                        <div className={styles.imgContainer}>
                            <Image
                                src={imageData}
                                alt="eyes"
                                layout="fill"
                                objectFit="cover"
                                // className={styles.imgContainer}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
