import React from 'react';
import { HeroTextBlockStyle } from './HeroTextBlock.style';

const TextBlockIndex = ({ style, className, title, description }) => (
    <div>
        <HeroTextBlockStyle style={style} className={className}>
            <h1 className="title">{title}</h1>
            <p className="lead">{description}</p>
        </HeroTextBlockStyle>
    </div>
);

export default TextBlockIndex;
