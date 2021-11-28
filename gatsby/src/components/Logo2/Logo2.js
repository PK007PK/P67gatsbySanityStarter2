import React from 'react';
import logoSign from '../../assets/images/logoSignSvg3.svg';
import { StyledLogo2 } from './Logo2.style';

const Logo = ({ small }) => (
    <StyledLogo2 small={small}>
        <img className="sign" src={logoSign} alt="Stowarzyszenie EkoPartner" />
        <div className="textBlock">
            <div className="top">Stowarzyszenie</div>
            <div className="main">
                Eko<span>Monterzy</span>
            </div>
            <div className="bottom">ekologia / transformacja energetyczna</div>
        </div>
    </StyledLogo2>
);
export default Logo;
