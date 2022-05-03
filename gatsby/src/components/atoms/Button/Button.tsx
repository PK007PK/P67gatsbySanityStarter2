import { FC } from 'react';
import styled from 'styled-components';
import { StylingProps } from 'types/stylingProps';

interface Props extends StylingProps{
    full?: boolean,
    secondary?: boolean,
}

export const ButtonStyle = styled.button<Props>`
    background-color: ${({ secondary }) => (secondary ? 'var(--colorActiveSecondary)' : 'var(--colorActivePrimary)')};
    color: ${({ color }: StylingProps) => color || 'white'};
    padding: ${({ padding }: StylingProps) => padding || ' var(--spacingSmall) var(--spacingMedium)'};
    text-shadow: var(--txtShadow);
    font-size: var(--fontSizeLead);
    transition: var(--transitionBasic);
    border: none;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

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
