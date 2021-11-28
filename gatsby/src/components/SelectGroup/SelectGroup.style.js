import styled from 'styled-components';

export const SelectGroupStyle = styled.div`
    .title {
        margin-bottom: 10px;
    }
    .subtitle {
        margin: 0;
    }
`;

export const StyledButton = styled.button`
    font-size: var(--fontSizeLead);
    cursor: pointer;
    background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
    border: none;
    color: ${({ selected }) => (selected ? `var(--colorActiveSecondary)` : 'none')};

    &:first-of-type {
        padding-left: 0;
    }

    &:hover {
        color: var(--colorActiveSecondary);
    }
`;
