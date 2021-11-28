import styled from 'styled-components';

export const MenuDropDownStyles = styled.div`
    position: fixed;
    display: none;
    z-index: 5;
    top: -100vh;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--colorWhite);
    height: 100vh;
    text-align: center;

    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        ${({ theme }) => theme.media.smAbove} {
            margin-top: 50px;
        }
    }

    .postsTitle {
        display: none;
        ${({ theme }) => theme.media.smAbove} {
            display: block;
            text-align: center;
            margin-bottom: 0;
            line-height: 100%;
        }
    }
    .posts {
        display: none;
        ${({ theme }) => theme.media.smAbove} {
            display: flex;
        }
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        ${({ theme }) => theme.media.smAbove} {
            display: block;
        }
        padding: 0;
        padding-left: 0;
        margin-left: 0;
        min-width: 150px;
        flex-grow: 1;
        font-size: 14px;

        ${({ theme }) => theme.media.smAbove} {
            font-size: 16px;
        }
    }

    li {
        display: block;
        margin-bottom: 10px;
        margin-right: 20px;

        ${({ theme }) => theme.media.smAbove} {
            margin-right: 0px;
            margin-bottom: var(--spacingRegular);
        }
    }

    .title {
        font-size: 18px;
        text-align: left;

        ${({ theme }) => theme.media.smAbove} {
            text-align: center;
            font-size: var(--fontSizeBig1);
        }
    }

    @keyframes emerge {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .title,
    a {
        opacity: 0;
        animation-name: emerge;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }

    .colorWrapper1 {
        background-color: var(--colorActivePrimary);
        height: 30vh;
    }
    .colorWrapper2 {
        background-color: var(--colorActiveSecondary);
        height: 30vh;
    }
`;
