import { Link } from 'gatsby';
import React from 'react';
import { ButtonStyle } from '../Button/Button';
import { FormContactStyle } from './FormContact.style';

export default function FormContact() {
    return (
        <FormContactStyle
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit={() => 'submit'}
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact v1" />

            <div hidden>
                <input name="bot-field" />
            </div>

            <div className="wrapper">
                <label htmlFor="first-name">
                    Imię:
                    <br /> <input type="text" name="first-name" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="phone">
                    Telefon:
                    <br /> <input type="text" name="phone" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="email">
                    Email:
                    <br /> <input type="email" name="email" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="message">
                    Wiadomość:
                    <br /> <textarea row="4" type="email" name="message" />
                </label>
            </div>
            <div className="acceptPolicy">
                <input className="check" type="checkbox" id="policy" name="policy" required />
                <p className="text">
                    Wyrażam zgodę na przetwarzanie Stowarzyszenie moich danych osobowych zgodnie z zasadami ochrony
                    danych osobowych wyrażonymi w{' '}
                    <Link to="/polityka/">
                        <strong>Polityce Prywatności.</strong>
                    </Link>
                </p>
            </div>
            <ButtonStyle full type="submit">
                Wyślij
            </ButtonStyle>
        </FormContactStyle>
    );
}
