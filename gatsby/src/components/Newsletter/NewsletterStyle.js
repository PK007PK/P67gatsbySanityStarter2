import styled from 'styled-components';

export const NewsletterStyle = styled.div`
    text-align: center;
    padding: var(--spacingMedium) var(--cardPadding);
    position: relative;
    margin-bottom: var(--spacingMedium);
    background-color: rgba(0, 96, 100, 0.3);
    position: relative;
    border-radius: var(--borderRadius);
    box-shadow: ${({ theme }) => theme.elevation.dp4};
`;

export const CustomFormStyle = styled.div`
    position: relative;
    .openBtn {
        cursor: pointer;
    }

    .closeBtn {
        cursor: pointer;
        position: absolute;
        top: -20px;
        right: var(--cardPadding);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid black;
        z-index: 100;
    }

    input {
        width: 100%;
        outline: none;
        border: 1px solid gray;
        font-size: 1em;
        transition: 100ms;
        border-radius: 0px;
        padding: 10px 25px;
    }

    .acceptPolicy {
        margin-top: var(--spacingRegular);
        margin-bottom: 20px;
        display: flex;
        align-items: flex-start;
    }

    .check {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        float: left;
        flex-shrink: 0;
        margin-top: 5px;
    }

    .text {
        margin-top: 0;
        font-size: var(--fontSizeSmall);
        text-align: left;
    }
`;

export const OpeningButton = styled.button`
    height: 180px;
    width: 100%;
    border-radius: var(--borderRadius);
    background-color: #006064;
    color: white;
    font-size: var(--fontSizeLead);
    border: none;
    transition: var(--transitionBasic);

    &:hover {
        box-shadow: ${({ theme }) => theme.elevation.dp4};
    }

    .innerWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        width: 40px;
        height: 50px;
        margin-right: 10px;
    }
`;
