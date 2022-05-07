import React, { useState } from 'react';
import { IoIosContact } from '@react-icons/all-files/io/IoIosContact';

import { CardContactFormStyle } from './CardContactForm.style';
import { CardButton } from 'components/atoms/CardButton/CardButton';
import { CommonProps } from 'types/commonProps';
import { languageCheck } from 'hooks/languageCheck'
import { CardContactFormTexts } from './CardContactForm.texts';
import { FormContact } from 'components/FormContact/FormContact';

interface Props extends CommonProps {}

const CardContactForm: React.FunctionComponent<Props> = ({ className, style }) => {
    const [open, setOpen] = useState(false);

    return (
        <CardContactFormStyle style={style} className={className}>
            {!open && (
                <CardButton 
                    title="Contact form"
                    iconComponent={()=><IoIosContact className="icon" />}
                    onClick={() => setOpen(!open)}
                />
            )}
            {open && (
                <div className="openedCard">
                    <button className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </button>
                    <h3 className="title">{CardContactFormTexts.title[languageCheck()]}</h3>
                    <FormContact />
                </div>
            )}
        </CardContactFormStyle>
    );
};

export default CardContactForm;
