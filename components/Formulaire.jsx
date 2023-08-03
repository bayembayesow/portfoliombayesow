import { useRef, useState } from "react";

import styles from "../styles/Formulaire.module.css"

export default function Formulaire() {
    const nomRef = useRef(null);
    const courrielRef = useRef(null);
    const sujetRef = useRef(null);
    const messageRef = useRef(null);
    const formRef = useRef(null);

    const [erreurNom, setErreurNom] = useState('');
    const valideNom = () => {
        if (nomRef.current.validity.valid) {
            setErreurNom('');
        }
        else {
            if (nomRef.current.validity.valueMissing) {
                setErreurNom('Le nom est requis');
            }
        }
    }

    const [erreurCourriel, setErreurCourriel] = useState('');
    const valideCourriel = () => {
        if (courrielRef.current.validity.valid) {
            setErreurCourriel('');
        }
        else {
            if (courrielRef.current.validity.valueMissing) {
                setErreurCourriel('Le courriel est requis');
            }
            else if (courrielRef.current.validity.typeMismatch) {
                setErreurCourriel('Le courriel n\'est pas valide');
            }
        }
    }

  

    const [erreurSujet, setErreurSujet] = useState('');
    const valideSujet = () => {
        if (sujetRef.current.validity.valid) {
            setErreurSujet('');
        }
        else {
            if (sujetRef.current.validity.valueMissing) {
                setErreurSujet('Le sujet est requis');
            }
        }
    }

    const [erreurMessage, setErreurMessage] = useState('');
    const valideMessage = () => {
        if (messageRef.current.validity.valid) {
            setErreurMessage('');
        }
        else {
            if (messageRef.current.validity.valueMissing) {
                setErreurMessage('Le message est requis');
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        valideNom();
        valideCourriel();
        valideSujet();
        valideMessage();

        if (formRef.current.checkValidity()) {
            let data = {
                nom : nomRef.current.value,
                courriel: courrielRef.current.value,
                sujet: sujetRef.current.value,
                message: messageRef.current.value

            }

            console.log(data);
        }
    }

    return <fieldset className={styles.forme}>
    <form className={styles.form} noValidate ref={formRef} onSubmit={handleSubmit}>
        <label>
            Nom:
            <input type="text" ref={nomRef} required onBlur={valideNom} />
        </label>
        {erreurNom &&
            <div className={styles.erreur}>
                {erreurNom}
            </div>
        }
        <label>
            Courriel:
            <input type="email" ref={courrielRef} required onBlur={valideCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        
        <label>
            Sujet:
            <input type="text" ref={sujetRef} required onBlur={valideSujet} />
        </label>
        {erreurSujet &&
            <div className={styles.erreur}>
                {erreurSujet}
            </div>
        }

        <label>
            Message:
            <textarea ref={messageRef} required onBlur={valideMessage} />
        </label>
        {erreurMessage &&
            <div className={styles.erreur}>
                {erreurMessage}
            </div>
        }

        <input type="submit" value="Connecter" />
    </form>
    </fieldset>
}