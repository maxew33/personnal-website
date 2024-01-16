import React from 'react'
import Link from 'next/link'

export default function Conclusion() {
    return (
        <section className="home-ctaSection">
            <h2 className="home-ctaTitle">
                Prêt à donner vie à votre projet&nbsp;?
            </h2>
            <p className="home-ctaContent">
                Discutons ensemble de vos idées et créons un site web qui vous
                ressemble.
            </p>
            <Link href="/contact" className="home-ctaBtn">
                Contact
            </Link>
        </section>
    )
}
