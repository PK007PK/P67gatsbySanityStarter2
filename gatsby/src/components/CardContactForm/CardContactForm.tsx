import React, { useState } from 'react';
import { IoIosContact } from '@react-icons/all-files/io/IoIosContact';
import FormContact from 'src/components/FormContact/FormContact';
import { CardContactFormStyle } from './CardContactForm.style';
import { CardButton } from 'components/atoms/CardButton/CardButton';

const CardContactForm = ({ className, style }) => {
    const [open, setOpen] = useState(false);
    return (
        <CardContactFormStyle style={style} className={className}>
            {!open && (
                // <button className="openingButton" type="button" onClick={() => setOpen(!open)}>
                //     <div className="innerWrapper">
                //         <IoIosContact className="icon" />
                //         Contact form
                //     </div>
                // </button>
                <CardButton 
                    title="Contact form"
                    type="button"
                    iconComponent={()=><IoIosContact className="icon" />}
                    onClick={() => setOpen(!open)}
                />
            )}
            {open && (
                <div className="openedCard">
                    <button className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </button>
                    <h3 className="title">Formularz kontaktowy</h3>
                    <FormContact />
                </div>
            )}
        </CardContactFormStyle>
    );
};

export default CardContactForm;
