import styled from 'styled-components';

export const MenuItemsWrapperStyles = styled.ul`
    display: none;

    ${({ theme }) => theme.media.mdAbove} {
        align-items: center;
        display: flex;
        margin-left: auto;
        list-style-type: none;
        display: flex;
    }

    li:not(:last-child) {
        margin-right: var(--spacingMedium);
    }

    li {
        font-weight: 400;
    }

    .active {
        color: var(--colorActive1);
    }
`;
