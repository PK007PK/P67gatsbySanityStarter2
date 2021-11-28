import React from 'react';
import ButtonSmall from 'src/components/ButtonSmall/ButtonSmall';
import { CardToDoStyle } from './CardToDo.style';

const CardToDo = ({ selected }) => (
    <CardToDoStyle selected={selected}>
        <h3>Wymiana pieców XYZ</h3>
        {selected ? 'Termin: 2022.01.01 - Pozostało: 233 dni' : 'Termin: 2022.01.01'}
        <div className="buttonBar">
            <ButtonSmall bottomRounded type="button" className="button">
                {selected ? 'Zrobione!' : 'Przypnij'}
            </ButtonSmall>
            <ButtonSmall bottomRounded type="button" className="button">
                {selected ? 'Odepnij' : 'Usuń'}
            </ButtonSmall>
            <ButtonSmall bottomRounded type="button" className="button">
                Więcej
            </ButtonSmall>
        </div>
    </CardToDoStyle>
);

export default CardToDo;
