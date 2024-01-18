import React from 'react'
import Link from 'next/link'

export default function Conclusion() {
    return (
        <section className="home-cta-section">
            <h2 className="home-section-title home-cta-title">
                Prêt à donner vie à votre projet&nbsp;?
            </h2>
            <p className="home-cta-content">
                Discutons ensemble de vos idées et créons un site web qui vous
                ressemble.
            </p>
            <Link href="/contact" className="home-cta-btn">
                Contact
            </Link>
        </section>
    )
}
