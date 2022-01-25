import React from 'react';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ data, className }) => {
    const { projectName: title, projectImage, color, backgroundColor } = data;
    return (
        <CardSimpleStyles color={color} backgroundColor={backgroundColor} className={className}>
            <div className="textBlock">
                <h3 className="title">{title}</h3>
            </div>
        </CardSimpleStyles>
    );
};

export default CardSimple;
