import styled from 'styled-components';

export const CardProductStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    border-radius: 10px 10px 10px 10px;
    background-color: ${({ backgroundColor }) => backgroundColor || 'var(--cardDefaultBackgroundColor)'};
    transition: var(--transitionFast);

    .image {
        height: ${({ small }) => (small ? '140px' : '200px')};
        border-radius: 10px 10px 0 0;
    }

    .textBlock {
        padding: var(--cardPadding);
        bottom: 0;
        left: 0;
        width: 100%;
        /* height: 180px; */
        height: ${({ small }) => (small ? null : '200px')};
        color: ${({ color }) => color || 'var(--cardDefaultColor)'};
        display: ${({ small }) => (small ? 'block' : 'flex')};
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .title {
        text-transform: uppercase;
        font-size: var(--fontSizeRegular);
        font-weight: 600;
    }

    .subTitle {
        line-height: 1.4;
    }
`;
