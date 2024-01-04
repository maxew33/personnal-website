import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
    faCalendarDays,
    faEnvelope,
    faMobileScreen,
    faPaperPlane,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    const [modalDisplayed, setModalDisplayed] = useState(false)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILKEY_SERVICE_ID,
            process.env.REACT_APP_EMAILKEY_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILKEY_USER_ID
        )
        .then(
            (result) => {
                console.log(result)
                setModalDisplayed(true)
            },
            (error) => {
                console.log(error.text)
                alert("le message n'a pas pu être envoyé.")
            }
        )
        .catch((err) => {
            console.error('FAILED...', err)
        })
    }

    const displayModal = () => {
        setModalDisplayed(!modalDisplayed)

    }

    return (
        <>
            <header className={styles.pageTitle}>Nous contacter</header>
            <main className={styles.main}>
                <section className={styles.title}>
                    <article>
                        <h3>
                            Ensemble, explorons les opportunités qui s'offrent à
                            vous.
                        </h3>
                    </article>
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
                                <label
                                    htmlFor="nameInput"
                                    className={styles.label}
                                >
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
                                envoyer {` `}
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </article>
                </section>

                <section className={styles.linksWrapper}>
                    <article>
                        {/* <!-- Google Calendar Appointment Scheduling begin --> */}
                        <h2>
                            <FontAwesomeIcon
                                icon={faCalendarDays}
                                className={styles.icon}
                            />{' '}
                            Rencontrez-nous
                        </h2>
                        <div className={styles.contentWrapper}>
                            <a href="https://calendar.app.google/x5FM2reA2PDo4JkA8">
                                Prendre rendez-vous
                            </a>
                        </div>
                        {/* <!-- end Google Calendar Appointment Scheduling --> */}
                    </article>
                    <article>
                        <h2>
                            <FontAwesomeIcon
                                icon={faMobileScreen}
                                className={styles.icon}
                            />{' '}
                            Appelez-nous
                        </h2>
                        <div className={styles.contentWrapper}>
                            <a href="tel:07555555" className={styles.contact}>
                                07-555-555
                            </a>
                        </div>
                    </article>
                    <article>
                        <h2>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={styles.icon}
                            />{' '}
                            écrivez-nous
                        </h2>
                        <div className={styles.contentWrapper}>
                            <a
                                href="mailto:contact@velvetweb.fr"
                                className={styles.contact}
                            >
                                contact@velvetweb.fr
                            </a>
                        </div>
                    </article>
                    <article className={styles.followUs}>
                        <h2>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                className={styles.icon}
                            />{' '}
                            Suivez-nous
                        </h2>
                        <div className={styles.contentWrapper}>
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                className={styles.contact}
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className={styles.socialIcon}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                className={styles.contact}
                            >
                                <FontAwesomeIcon
                                    icon={faSquareFacebook}
                                    className={styles.socialIcon}
                                />
                            </a>
                        </div>
                    </article>
                </section>
            </main>
            {modalDisplayed && (
                <div className={styles.modal}>
                    <section className={styles.modalContent}>
                        <h3 className={styles.modalTitle}>
                            Votre message a été envoyé avec succès!
                        </h3>
                        <br /> Nous reviendrons vers vous dès que possible.
                        <br /> En attendant, n'hésitez pas à explorer davantage
                        notre site.
                        <button
                            onClick={displayModal}
                            className={styles.modalButton}
                        >
                            OK
                        </button>
                    </section>
                </div>
            )}
        </>
    )
}
