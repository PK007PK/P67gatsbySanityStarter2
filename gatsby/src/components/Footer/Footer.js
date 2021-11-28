import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FooterStyles } from './Footer.style';

export default function Footer() {
    return (
        <FooterStyles>
            <BootsContainer between>
                <BootsRow>
                    <BootsColumn sm={6}>
                        <Link to="/polityka">Polityka prywatności</Link>
                    </BootsColumn>
                    <BootsColumn className="copyright" sm={6}>
                        &copy; Stowarzyszenie EkoMonterzy {new Date().getFullYear()}
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </FooterStyles>
    );
}
