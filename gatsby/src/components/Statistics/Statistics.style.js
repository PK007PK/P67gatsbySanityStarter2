import styled from 'styled-components';

export const StatisticsStyle = styled.div`
    .cardContainer {
        margin-bottom: var(--spacingMedium);
        min-height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;

        ${({ theme }) => theme.media.smAbove} {
            margin-bottom: 0px;
        }

        p {
            color: white;
        }
    }
`;
