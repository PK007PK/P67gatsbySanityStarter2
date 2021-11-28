import styled from 'styled-components';

export const HeroTextBlockStyle = styled.div`
    /* background-color: rgba(255, 255, 255, 0.9); */
    /* padding: var(--cardPadding); */

    .title {
        margin-bottom: 0px;
    }

    .tagBar {
        margin: 30px 0 30px;
        ${({ theme }) => theme.media.mdAbove} {
            display: flex;
            margin-bottom: 0 0 20px 0;
            font-size: 16px;
        }
        ${({ theme }) => theme.media.lgAbove} {
            font-size: 18px;
        }
    }
    .tagContainer {
        margin-right: 20px;
        font-weight: 300;
    }

    .bottomButtonsBar {
        display: flex;
    }

    .bottomBtn {
        color: white;
    }

    .pdfIcon {
        height: 25px;
    }
`;
