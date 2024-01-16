import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Wave from '../wave/wave'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false }) // prevent hydration error

export default function About() {
    return (
        <section className="home-section home-about">
            <Wave color="var(--primary)" positionPlace="top" />
            <Wave color="var(--bg)" positionPlace="bottom" />
            <article className="home-article home-about-article">
                <div className="home-about-title-wrapper">
                    <h2 className="home-section-title home-about-title">
                        à propos
                    </h2>
                    <ReactPlayer
                        url="/assets/video/ben-video.mp4"
                        muted
                        loop
                        playing
                    />
                    {/* <Image
                src="/assets/home/max-portrait-2.jpg"
                height={400}
                width={600}
                className="home-about-illus"
                alt="pourquoi choisir TechQuest Bordeaux"
            /> */}
                </div>
                <div className="home-about-content">
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Bonjour, je m'appelle Maxime.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Je suis développeur web.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            J'ai créé TechQuest pour vous proposer{' '}
                            <Link href="/service/"> mes services</Link>.
                        </span>
                    </p>
                    <p className="home-about-content-wrapper">
                        <span className="home-about-content-text">
                            Et pour vous accompagner dans la conception de votre
                            site web.
                        </span>
                    </p>
                </div>
            </article>
        </section>
    )
}
