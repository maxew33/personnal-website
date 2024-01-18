import React, { useRef, useState } from 'react'
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
            <header className="contact-pageTitle">Contact</header>
            <main className="contact-main">
                
                <section className="contact-section contact-formContact">
                    <article className="contact-article">
                        <h2 className="contact-articleTitle">Une question ?</h2>
                        <p className="contact-formTitle">
                            Envoyez-moi un message. <br />
                            Je vous répondrai dès que possible.
                        </p>
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="contact-formWrapper"
                        >
                            <div className="contact-inputWrapper">
                                <label
                                    htmlFor="nameInput"
                                    className="contact-label"
                                >
                                    Nom
                                </label>
                                <input
                                    id="nameInput"
                                    type="text"
                                    name="from_name"
                                    value={formState.name}
                                    onChange={(e) => handleInput(e, 'name')}
                                    className="contact-input"
                                    required
                                />
                            </div>
                            <div className="contact-inputWrapper">
                                <label
                                    htmlFor="emailInput"
                                    className="contact-label"
                                >
                                    Email
                                </label>
                                <input
                                    id="emailInput"
                                    type="email"
                                    name="user_email"
                                    value={formState.email}
                                    onChange={(e) => handleInput(e, 'email')}
                                    className="contact-input"
                                    required
                                />
                            </div>
                            <div className="contact-textAreaWrapper">
                                <label
                                    htmlFor="messageInput"
                                    className="contact-label"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="messageInput"
                                    name="message"
                                    className="contact-textArea"
                                    rows="5"
                                    value={formState.message}
                                    onChange={(e) => handleInput(e, 'message')}
                                    required
                                />
                            </div>
                            <button type="submit" className="contact-formButton">
                                envoyer {` `}
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                    </article>
                </section>

                <section className="contact-section contact-linksWrapper">
                    <article className="contact-article">
                        {/* <!-- Google Calendar Appointment Scheduling begin --> */}
                        <h2 className="contact-articleTitle">
                            <span className="contact-iconContainer">
                                <FontAwesomeIcon
                                    icon={faCalendarDays}
                                    className="contact-icon"
                                />
                            </span>{' '}
                            Rencontrez-moi
                        </h2>
                        <div className="contact-linkWrapper">
                            <a href="https://calendar.app.google/x5FM2reA2PDo4JkA8">
                                Prendre rendez-vous
                            </a>
                        </div>
                        {/* <!-- end Google Calendar Appointment Scheduling --> */}
                    </article>
                    <article className="contact-article">
                        <h2 className="contact-articleTitle">
                            <span className="contact-iconContainer">
                                <FontAwesomeIcon
                                    icon={faMobileScreen}
                                    className="contact-icon"
                                />
                            </span>{' '}
                            Appelez-moi
                        </h2>
                        <div className="contact-linkWrapper">
                            <a href="tel:0781847657" className="contact-contact">
                                07-81-84-76-57
                            </a>
                        </div>
                    </article>
                    <article className="contact-article">
                        <h2 className="contact-articleTitle">
                            <span className="contact-iconContainer">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="contact-icon"
                                />
                            </span>{' '}
                            écrivez-moi
                        </h2>
                        <div className="contact-linkWrapper">
                            <a
                                href="mailto:contact@techquest.fr"
                                className="contact-contact"
                            >
                                contact@techquest.fr
                            </a>
                        </div>
                    </article>
                    <article
                        className="contact-article contact-followUs"
                    >
                        <h2 className="contact-articleTitle">
                            <span className="contact-iconContainer">
                                <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className="contact-icon"
                                />
                            </span>{' '}
                            Suivez-moi
                        </h2>
                        <div className="contact-linkWrapper">
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                className="contact-contact"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="contact-socialIcon"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/maxime-malfilatre/"
                                className="contact-contact"
                            >
                                <FontAwesomeIcon
                                    icon={faSquareFacebook}
                                    className="contact-socialIcon"
                                />
                            </a>
                        </div>
                    </article>
                </section>
            </main>

            {modalDisplayed && (
                <div className="contact-modal">
                    <section
                        className="contact-section contact-modalContent"
                    >
                        <h3 className="contact-modalTitle">
                            Votre message a été envoyé avec succès!
                        </h3>
                        <br /> Nous reviendrons vers vous dès que possible.
                        <br /> En attendant, n'hésitez pas à explorer davantage
                        notre site.
                        <button
                            onClick={displayModal}
                            className="contact-modalButton"
                        >
                            OK
                        </button>
                    </section>
                </div>
            )}
        </>
    )
}
