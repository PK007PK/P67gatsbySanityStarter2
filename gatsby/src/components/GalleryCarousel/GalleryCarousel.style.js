import styled from 'styled-components';

export const GalleryCarouselStyles = styled.div`
    /* padding: var(--spacingBig1) 0 var(--spacingBig1); */

    .cardContainer {
        margin-top: var(--spacingMedium);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }

    button::before {
        color: white !important;
    }
`;
