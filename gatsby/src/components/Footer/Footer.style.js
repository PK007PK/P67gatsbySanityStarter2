import styled from 'styled-components';

export const FooterStyles = styled.footer`
    padding: var(--spacingSmall) 0;
    background-color: #006064;
    color: var(--colorWhite);

    .copyright {
        text-align: left;

        ${({ theme }) => theme.media.smAbove} {
            text-align: right;
        }
    }
`;
