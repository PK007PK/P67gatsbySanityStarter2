import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FooterStyles } from './Footer.style';

export default function Footer() {
    const query = useStaticQuery(graphql`
        {
            sanitySiteSettings {
                copyright
            }
        }
    `);
    const {
        sanitySiteSettings: { copyright: copyRightName },
    } = query;
    return (
        <FooterStyles>
            <BootsContainer between>
                <BootsRow>
                    <BootsColumn sm={6}>
                        <Link to="/polityka">Privacy Policy</Link>
                    </BootsColumn>
                    <BootsColumn className="copyright" sm={6}>
                        &copy; {copyRightName} {new Date().getFullYear()}
                    </BootsColumn>
                </BootsRow>
            </BootsContainer>
        </FooterStyles>
    );
}
