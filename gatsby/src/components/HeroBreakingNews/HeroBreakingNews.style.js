import styled from 'styled-components';

export const HeroBreakingNewsStyle = styled.div`
    display: none;
    ${({ theme }) => theme.media.mdAbove} {
        display: block;
        position: absolute;
        bottom: 40px;
        left: 0;
        width: 100%;
        z-index: 1000;
    }

    p {
        margin: 0;
    }

    .title {
        position: absolute;
        z-index: 1;
        top: -15px;
        left: 46px;
        background-color: white;
        /* border: 1px solid gray; */
        padding: 2px var(--spacingXSmall);
        box-shadow: var(--boxShadow);
        color: var(--colorActiveSecondary);
    }

    .close {
        position: absolute;
        z-index: 1;
        top: -10px;
        right: 38px;
        background-color: rgba(255, 255, 255, 0.8);
        border: none;
        padding: 4px 7px;
        transition: var(--transitionFast);

        &:hover {
            background-color: var(--colorActiveSecondary);
            color: white;
        }
    }

    .card {
        display: block;
        padding: var(--cardPadding) var(--spacingMedium);
        background-color: white;
        box-shadow: var(--hoverShadow);
        font-weight: 100;
        position: relative;
        text-align: center;
    }

    .phone {
        margin-left: 20px;
        font-weight: 400;
        /* display: inline-flex; */
        flex-wrap: nowrap;
        justify-content: center;
    }
`;
