import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    return (
        <>
            <Header />
            <main>
                <section id="about">
                    <h1>TechQuest</h1>
                    <h2>Être en ligne</h2>
                    <h2>Être remarqué</h2>
                    <h3>Avec un site qui vous distingue</h3>
                </section>
                <section id="projects">
                  <h2>Ils nous ont fait confiance</h2>
                </section>
                <section id="estimate">devis</section>
                <section id="contact">contact</section>
            </main>
            <Footer/>
        </>
    )
}
