import styled from 'styled-components';

export const CooperatingCitiesCarouselStyle = styled.div`
    /* padding: var(--spacingMedium) 0; */
    /* background-color: rgba(0, 96, 100, 0.05); */
    /* margin-top: -150px; */
    display: none;

    ${({ theme }) => theme.media.smAbove} {
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 15px;
    }

    .slider {
        padding: 0 10px;
        margin-left: 18px;
    }

    .title {
        /* margin-left: 32px; */
        margin-bottom: 10px;
    }
    .cardContainer {
        /* border-radius: 0 0 20px 20px;
        border: 1px solid black; */
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85px;
        /* border: 1px solid black; */
        /* padding: 10px; */
    }
    .image {
        margin: 10px;
        /* width: 30px;
        height: 160px; */
        /* height: 80px; */
        /* height: 100%; */
        width: auto;
        /* width: 66px; */
        /* margin-left: auto;
        margin-right: auto; */
        display: block;
    }

    .cityName {
        font-size: 14px;
    }
`;
