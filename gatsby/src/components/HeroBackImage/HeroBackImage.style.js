import styled from 'styled-components';

export const HeroBackImageStyle = styled.div`
    display: none;

    ${({ theme }) => theme.media.xsAbove} {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: -1;
        overflow: hidden;
    }

    .back {
        height: 100%;
        width: 33%;
        position: absolute;
        right: 0;
    }
`;
