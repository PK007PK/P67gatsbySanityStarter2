import styled from 'styled-components';

export const SectionStatisticsStyle = styled.section`
    position: relative;
    background-color: rgba(0, 96, 100, 0.05);
    padding: var(--spacingBig1) 0 var(--spacingBig1) 0;
    p,
    span {
        margin-top: 0;
    }

    .backgroundImage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        z-index: 0;
    }

    .btn {
        font-size: var(--fontSizeLead);
        cursor: pointer;
        background-color: inherit;
        border: none;
        color: black;

        &:first-of-type {
            padding-left: 0;
        }

        &:hover {
            color: var(--colorActiveSecondary);
        }
    }

    .titleBar {
        margin-bottom: 50px;
        position: relative;
        color: white;
    }

    .title {
        color: black;
        margin-bottom: 10px;
    }

    .cardContainer {
        text-align: center;
        position: relative;
        padding: 50px var(--cardPadding) var(--cardPadding) var(--cardPadding);
        background-color: var(--colorActivePrimary);
        font-weight: 900;
        border-radius: var(--borderRadius);
        transition: var(--transitionBasic);

        &:hover {
            box-shadow: ${({ theme }) => theme.elevation.dp4};
        }

        .iconContainer {
            position: absolute;
            top: -30px;
            right: 50%;
            background-color: white;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateX(50%);
            border: 1px solid gray;
            border-radius: var(--borderRadius);
        }

        .icon {
            font-size: 25px;
        }

        .number {
            font-size: var(--fontSizeBig3);
            color: var(--colorActiveSecondary);
            color: white;
            font-weight: 300;
            text-shadow: var(--txtShadow);
        }
    }
`;
