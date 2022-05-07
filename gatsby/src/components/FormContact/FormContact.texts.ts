import { languageInterface } from "types/languageInterface";

export const FormContactTexts = {
    firstName: {
        [languageInterface.eng]: "Name",
        [languageInterface.pl]: "Imię",
    },
    phoneNumber: {
        [languageInterface.eng]: "Phone number",
        [languageInterface.pl]: "Numer telefonu",
    },
    email: {
        [languageInterface.eng]: "Email",
        [languageInterface.pl]: "Email",
    },
    message: {
        [languageInterface.eng]: "Message",
        [languageInterface.pl]: "Wiadomość",
    },
    agreement: {
        [languageInterface.eng]: `I consent to the processing of my personal data by XYZ in accordance with the principles of personal data protection principles expressed in`,
        [languageInterface.pl]: `Wyrażam zgodę na przetwarzanie przez XYZ moich danych osobowych zgodnie z zasadami ochrony danych osobowych wyrażonymi w`,
    },
    policy: {
        [languageInterface.eng]: "Privacy Policy",
        [languageInterface.pl]: "Polityce Prywatności",
    },
}