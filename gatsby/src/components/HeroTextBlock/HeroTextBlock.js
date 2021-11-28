import React from 'react';
import { GrDocumentPdf } from '@react-icons/all-files/gr/GrDocumentPdf';
import iconPdf from 'src/assets/images/pdfSvg.svg';
import { Link } from 'gatsby';
import { ButtonStyle } from '../Button/Button';
import { HeroTextBlockStyle } from './HeroTextBlock.style';

const TextBlockIndex = ({ style, className, homePage, title, heroTags, description }) => (
    <div>
        <HeroTextBlockStyle style={style} className={className}>
            <h1 className="title">{title}</h1>
            <div className="tagBar">
                {heroTags &&
                    heroTags.split(',').map((item) => (
                        <div key={item} className="tagContainer">
                            {item}
                        </div>
                    ))}
            </div>
            <p className="lead">{description}</p>
            {homePage && (
                <div className="bottomButtonsBar">
                    <Link to="/onas">
                        <ButtonStyle className="bottomBtn" secondary>
                            Poznaj nas
                        </ButtonStyle>
                    </Link>

                    <a href="/Broszura.pdf" target="_blank" rel="noopener noreferrer">
                        <ButtonStyle className="bottomBtn" padding="0 16px 0 16px">
                            <img className="pdfIcon" src={iconPdf} alt="Broszura PDF EkoMonterzy" />
                        </ButtonStyle>{' '}
                    </a>
                </div>
            )}
        </HeroTextBlockStyle>
    </div>
);

export default TextBlockIndex;
