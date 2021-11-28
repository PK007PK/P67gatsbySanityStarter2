import styled, { css } from 'styled-components';

export const CardBlogEntry2Style = styled.div`
    position: relative;
    margin-bottom: var(--spacingMedium);
    transition: var(--transitionBasic);
    border-radius: var(--borderRadius);

    ${({ theme }) => theme.media.smAbove} {
        display: flex;
        flex-direction: ${({ small }) => (small ? 'column' : 'row')};
    }

    &:hover {
        box-shadow: ${({ theme }) => theme.elevation.dp4};
    }

    .imgWrapper,
    .picture {
        height: 220px;
        width: 100%;

        ${({ theme }) => theme.media.smAbove} {
            width: ${({ small }) => (small ? '100%' : '300px')};
            height: ${({ small }) => (small ? '200px' : '220px')};
        }

        background-position: cover;
        flex-shrink: 0;
        border-radius: var(--borderRadius);
    }

    .imgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .textWrapper {
        padding: var(--cardPadding);

        ${({ small }) =>
            small &&
            css`
                position: absolute;
                bottom: -55px;
                left: 5%;
                width: 90%;
                min-height: 150px;
                background-color: rgba(255, 255, 255, 0.95);
                border: 1px solid black;
                border-radius: var(--borderRadius);
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            `}
    }

    .title {
        font-size: ${({ small }) => (small ? '15px' : '25px')} !important;
    }
`;
