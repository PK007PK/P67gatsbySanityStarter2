import React from 'react';
import logoSign from 'src/assets/images/LogoSignVector.svg';
import { StyledLogo } from './Logo.style';

const Logo = () => (
    <StyledLogo>
        <img className="sign" src={logoSign} alt="Stowarzyszenie EkoPartner" />
        <div className="textBlock">
            <div className="top">Gatsby Sanity Starter</div>
        </div>
    </StyledLogo>
);
export default Logo;
