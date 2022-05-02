import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import logoSign from 'assets/images/LogoSignVector.svg';
import { StyledLogo } from './Logo.style';

interface QueryStructure {
    sanityWebsiteSettings: {
        copyright: string;
    }
}

export const Logo = () => {

    const {  sanityWebsiteSettings: {copyright = "Abc"} }: QueryStructure = useStaticQuery(graphql`
        {
            sanityWebsiteSettings {
                copyright
            }
        }
    `);

    return (
        <StyledLogo>
            <img className="sign" src={logoSign} alt={copyright} />
            <div className="textBlock">
                <div className="top">Gatsby&Sanity starter</div>
            </div>
        </StyledLogo>
    )
};

