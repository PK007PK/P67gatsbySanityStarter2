import styled from 'styled-components';
import Background from '../../assets/images/mainback.svg';

export const SectionOurProjectsStyles = styled.div`
    padding: var(--spacingBig1) 0 var(--spacingBig1);
    overflow: hidden;
    /* background-color: #1f2029; */
    /* background-image: url('/mainback.svg');
    background-position: center;
    background-repeat: repeat;
    background-size: 2%; */

    .cardContainer {
        margin-top: var(--spacingMedium);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
`;
