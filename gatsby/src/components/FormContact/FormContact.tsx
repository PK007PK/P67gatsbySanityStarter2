import { Link } from 'gatsby';
import React from 'react';
import { ButtonStyle } from 'components/atoms/Button/Button';
import { FormContactStyle } from './FormContact.style';
import { FormContactTexts } from './FormContact.texts';
import { languageCheck } from 'hooks/languageCheck';

export const FormContact: React.FunctionComponent = () => {
    const lang = languageCheck();
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
                    {FormContactTexts.firstName[lang]}
                    <br /> <input type="text" name="first-name" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="phone">
                    {FormContactTexts.phoneNumber[lang]}
                    <br /> <input type="text" name="phone" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="email">
                    {FormContactTexts.email[lang]}
                    <br /> <input type="email" name="email" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="message">
                    {FormContactTexts.message[lang]}
                    <br /> <textarea row="4" type="email" name="message" />
                </label>
            </div>
            <div className="acceptPolicy">
                <input className="check" type="checkbox" id="policy" name="policy" required />
                <p className="text">
                    {FormContactTexts.agreement[lang]}{' '}
                    <Link to="/polityka/">
                        <strong>{FormContactTexts.policy[lang]}</strong>
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
