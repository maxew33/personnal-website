import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
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
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInput = (e, target) => {
        setFormState((prevFormState) => ({
            ...prevFormState,
            [target]: e.target.value,
        }))
    }

    const form = useRef(null)

    const sendEmail = (event) => {
        const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
        const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        const user = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        event.preventDefault()
        if (service && template && user && form.current) {
            emailjs
                .sendForm(service, template, form.current, user)
                .then(
                    (result) => {
                        setModalDisplayed(true)
                        setFormState({ name: '', email: '', message: '' })
                    },
                    (error) => {
                        alert("le message n'a pas pu être envoyé.")
                        console.error('FAILED...', error)
                    }
                )
                .catch((err) => {
                    console.error('FAILED...', err)
                })
        }
    }

    const displayModal = () => {
        setModalDisplayed(!modalDisplayed)
    }

    return (
        <>
            <header className={styles.pageTitle}>Contact</header>
            <main className={styles.main}>
                <section className={`${styles.section} ${styles.formContact}`}>
                    <article className={styles.article}>
                        <h2 className={styles.articleTitle}>Une question ?</h2>
                        <p className={styles.formTitle}>
                            Envoyez-moi un message. <br />
                            Je vous répondrai dès que possible.
                        </p>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className={styles.formWrapper}
                        >
                            <div className={styles.inputWrapper}>
                                <label
                                    htmlFor="nameInput"
                                    className={styles.label}
                                >
                                    Nom
                                </label>
                                <input
                                    id="nameInput"
                                    type="text"
                                    name="from_name"
                                    value={formState.name}
                                    onChange={(e) => handleInput(e, 'name')}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.inputWrapper}>
                                <label
                                    htmlFor="emailInput"
                                    className={styles.label}
                                >
                                    Email
                                </label>
                                <input
                                    id="emailInput"
                                    type="email"
                                    name="user_email"
                                    value={formState.email}
                                    onChange={(e) => handleInput(e, 'email')}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            <div className={styles.textAreaWrapper}>
                                <label
                                    htmlFor="messageInput"
                                    className={styles.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="messageInput"
                                    name="message"
                                    className={styles.textArea}
                                    rows="5"
                                    value={formState.message}
                                    onChange={(e) => handleInput(e, 'message')}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.formButton}>
                                envoyer {` `}
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </article>
                </section>

                <section className={`${styles.section} ${styles.linksWrapper}`}>
                    <article className={styles.article}>
                        {/* <!-- Google Calendar Appointment Scheduling begin --> */}
                        <h2 className={styles.articleTitle}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className={styles.icon}
                                />
                            </span>{' '}
                            Rencontrez-moi
                        </h2>
                        <div className={styles.linkWrapper}>
                            <a href="https://calendar.app.google/x5FM2reA2PDo4JkA8">
                                Prendre rendez-vous
                            </a>
                        </div>
                        {/* <!-- end Google Calendar Appointment Scheduling --> */}
                    </article>
                    <article className={styles.article}>
                        <h2 className={styles.articleTitle}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon
                                    icon={faMobileScreen}
                                    className={styles.icon}
                                />
                            </span>{' '}
                            Appelez-moi
                        </h2>
                        <div className={styles.linkWrapper}>
                            <a href="tel:0781847657" className={styles.contact}>
                                07-81-84-76-57
                            </a>
                        </div>
                    </article>
                    <article className={styles.article}>
                        <h2 className={styles.articleTitle}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className={styles.icon}
                                />
                            </span>{' '}
                            écrivez-moi
                        </h2>
                        <div className={styles.linkWrapper}>
                            <a
                                href="mailto:contact@techquest.fr"
                                className={styles.contact}
                            >
                                contact@techquest.fr
                            </a>
                        </div>
                    </article>
                    <article className={`${styles.article} ${styles.followUs}`}>
                        <h2 className={styles.articleTitle}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className={styles.icon}
                                />
                            </span>{' '}
                            Suivez-moi
                        </h2>
                        <div className={styles.linkWrapper}>
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                aria-label="Linkedin"
                                target="_blank"
                                rel="noopener"
                                className={styles.contact}
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className={styles.socialIcon}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener"
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
                    <section
                        className={`${styles.section} ${styles.modalContent}`}
                    >
                        <h3 className={styles.modalTitle}>
                            Votre message a été envoyé avec succès!
                        </h3>
                        <br /> Je reviendrai vers vous dès que possible.
                        <br /> En attendant, n'hésitez pas à explorer davantage
                        le site.
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
