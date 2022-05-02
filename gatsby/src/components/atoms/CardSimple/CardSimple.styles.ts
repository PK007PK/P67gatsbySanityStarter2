import styled from 'styled-components';

interface Props {
    color?: string,
    backgroundColor?: string,
    className?: string,
}

export const CardSimpleStyles = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    background-color: ${({ backgroundColor }) => backgroundColor || 'var(--cardDefaultBackgroundColor)'};
    
    .image {
        height: 200px;
    }

    .textBlock {
        padding: var(--cardPadding);
        bottom: 0;
        left: 0;
        width: 100%;
        height: 350px;
        color: ${({ color }) => color || 'var(--cardDefaultColor)'};
        display: flex;
        align-items: center;
        justify-content: center;
        text-shadow: var(--txtShadow);
        text-align: center;
`;
