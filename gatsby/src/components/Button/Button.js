import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: ${({ secondary }) => (secondary ? 'var(--colorActiveSecondary)' : 'var(--colorActivePrimary)')};
    color: ${({ color }) => color || 'white'};
    padding: ${({ padding }) => padding || ' var(--spacingSmall) var(--spacingMedium)'};
    border: none;
    text-shadow: var(--txtShadow);
    font-size: var(--fontSizeLead);
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transitionBasic);

    ${({ full }) =>
        full &&
        `
            width: 100%;
        `}

    &:hover {
        box-shadow: var(--hoverShadow);
        text-shadow: 1px 1px black;
    }

    .icon {
        margin-right: 5px;
    }
`;
