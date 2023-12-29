import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    faMobileScreen,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    const form = useRef()

    const sendEmail = () => {
        console.log('sent')
    }

    return (
        <main className={styles.main}>
            {/* <Image
                src="/assets/contact/phone.png"
                height={600}
                width={400}
                className={styles.image}
                alt="nous contacter Velvet Studio"
            /> */}

            <section>
                <Image
                    src="/assets/contact/phone.jpg"
                    height={600}
                    width={400}
                    className={styles.image}
                    alt="nous contacter Velvet Studio"
                />
            </section>

            <section className={styles.contactUs}>
                <article>
                    <h2>Une question ?</h2>
                    <p className={styles.prez}>
                        Envoyez-nous un message. <br />
                        Nous vous répondrons dès que possible.
                    </p>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={styles.formWrapper}
                    >
                        <div className={styles.inputWrapper}>
                            <input
                                id="nameInput"
                                type="text"
                                name="from_name"
                                className={styles.input}
                                required
                            />
                            <label htmlFor="nameInput" className={styles.label}>
                                Nom
                            </label>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                id="emailInput"
                                type="email"
                                name="user_email"
                                className={styles.input}
                                required
                            />
                            <label
                                htmlFor="emailInput"
                                className={styles.label}
                            >
                                Email
                            </label>
                        </div>
                        <div className={styles.messageWrapper}>
                            <textarea
                                id="messageInput"
                                name="message"
                                className={styles.textArea}
                                rows="5"
                                required
                                defaultValue={''}
                            />
                            <label
                                htmlFor="messageInput"
                                className={styles.label}
                            >
                                Message
                            </label>
                        </div>
                        <button type="submit" className={styles.button}>
                            envoyer
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </article>
            </section>
            
            <section className={styles.linksWrapper}>
                <article>
                    {/* <!-- Google Calendar Appointment Scheduling begin --> */}
                    <h2>rencontrez-nous</h2>
                    <a href="https://calendar.app.google/x5FM2reA2PDo4JkA8">
                        prendre rendez-vous
                    </a>
                    {/* <!-- end Google Calendar Appointment Scheduling --> */}
                </article>
                <article>
                    <h2>Contactez-nous</h2>
                    <a href="tel:07555555" className={styles.contact}>
                        <FontAwesomeIcon
                            icon={faMobileScreen}
                            className={styles.icon}
                        />
                        07-555-555
                    </a>
                    <a
                        href="mailto:contact@velvetweb.fr"
                        className={styles.contact}
                    >
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className={styles.icon}
                        />
                        contact@velvetweb.fr
                    </a>
                </article>
                <article className={styles.followUs}>
                    <h2>Suivez-nous</h2>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        className={styles.contact}
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={styles.icon}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/maxime-malfilatre/"
                        className={styles.contact}
                    >
                        <FontAwesomeIcon
                            icon={faSquareFacebook}
                            className={styles.icon}
                        />
                    </a>
                </article>
            </section>
        </main>
    )
}
