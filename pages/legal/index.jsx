import React from 'react'
import styles from './Legal.module.css'

export default function Legal() {
    return (
        <main className={styles.legalNoticeWrapper}>
            <h1>Mentions légales</h1>
            <section>
                <h2>Édition du site</h2>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l'économie numérique, il est précisé aux
                utilisateurs du site internet{' '}
                <a href="https://techquest.fr/">https://techquest.fr/</a>{' '}
                l'identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :<h3>Propriétaire du site</h3>
                Maxime Malfilâtre <br />
                Contact :{' '}
                <a href="mailto:contact@techquest.fr">contact@techquest.fr</a> /
                07 81 84 76 57
                <h3>Identification de l'entreprise</h3>
                EI - SIREN : 84281711600010
                <h3>Hébergeur</h3>
                AutreHOSTINGER HOSTINGER INTERNATIONAL LTD <br />
                61 Lordou Vironos Street, 6023 Larnaca, Chypre
                <h3>Autres contributeurs</h3>
                Photos et video : Benedict Priam - unsplash <br />
                Illustrations : freepik <br />
                Mentions légales générées par{' '}
                <a href="https://la-webeuse.com/generateur-mentions-legales">
                    la-webeuse.com
                </a>
            </section>
            <section>
                <h2>Propriété intellectuelle et contrefaçons</h2>
                Maxime Malfilâtre est propriétaire des droits de propriété
                intellectuelle et détient les droits d'usage sur tous les
                éléments accessibles sur le site internet, notamment les textes,
                images, graphismes, logos, vidéos, architecture, icônes et sons.
                <br /> Toute reproduction, représentation, modification,
                publication, adaptation de tout ou partie des éléments du site,
                quel que soit le moyen ou le procédé utilisé, est interdite,
                sauf autorisation écrite préalable de Maxime Malfilâtre.
                <br /> Toute exploitation non autorisée du site ou de l'un
                quelconque des éléments qu'il contient sera considérée comme
                constitutive d'une contrefaçon et poursuivie conformément aux
                dispositions des articles L.335-2 et suivants du Code de
                Propriété Intellectuelle.
            </section>
            <section>
                <h2>Limitations de responsabilité</h2>
                Maxime Malfilâtre ne pourra être tenu pour responsable des
                dommages directs et indirects causés au matériel de
                l'utilisateur, lors de l'accès au site{' '}
                <a href="https://techquest.fr/">https://techquest.fr/</a>.{' '}
                <br />
                Maxime Malfilâtre décline toute responsabilité quant à
                l'utilisation qui pourrait être faite des informations et
                contenus présents sur
                <a href="https://techquest.fr/">https://techquest.fr/</a>.
                <br />
                Maxime Malfilâtre s'engage à sécuriser au mieux le site
                <a href="https://techquest.fr/">https://techquest.fr/</a>,
                cependant sa responsabilité ne pourra être mise en cause si des
                données indésirables sont importées et installées sur son site à
                son insu.
            </section>
            <section>
                <h2>CNIL et gestion des données personnelles.</h2>
                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
                modifiée, l'utilisateur du site{' '}
                <a href="https://techquest.fr/">https://techquest.fr/</a>{' '}
                dispose d'un droit d'accès, de modification et de suppression
                des informations collectées.
                <br /> Pour exercer ce droit, envoyez un message à{' '}
                <a href="mailto:contact@techquest.fr">
                    contact@techquest.fr
                </a>.{' '}
            </section>
            <section>
                <h2> Droit applicable et attribution de juridiction.</h2> Tout
                litige en relation avec l'utilisation du site{' '}
                <a href="https://techquest.fr/">https://techquest.fr/</a> est
                soumis au droit français.
                <br /> En dehors des cas où la loi ne le permet pas, il est fait
                attribution exclusive de juridiction aux tribunaux compétents de
                Bordeaux.
            </section>
        </main>
    )
}
