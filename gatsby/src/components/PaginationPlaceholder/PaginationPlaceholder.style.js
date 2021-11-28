import styled from 'styled-components';

export const PaginationPlaceholderStyle = styled.div`
    margin-top: var(--spacingRegular);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 40px;

    & > * {
        display: inline-block;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: var(--transitionBasic);

        &:hover,
        &[aria-current],
        &.current {
            box-shadow: ${({ theme }) => theme.elevation.dp8};
            background-color: var(--colorDarkGray);
            color: var(--colorWhite);
            border: none;
        }
    }

    & > *:not(:last-child) {
        margin-right: var(--spacingSmall);
    }
`;
