import styled from 'styled-components';

export const CardToDoStyle = styled.div`
    margin-bottom: var(--spacingMedium);
    padding: var(--spacingRegular);
    position: relative;
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    /* color: ${({ selected }) => (selected ? 'white' : 'black')}; */
    background-color: ${({ selected }) => (selected ? '#FFE0B2' : 'var(--colorWhite)')};
    /* border-radius: 20px; */

    .buttonBar {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: -21px;
        left: 0;
        width: 100%;
        padding-left: var(--spacingRegular);
        padding-right: var(--spacingRegular);
    }
`;
