import styled from "styled-components";
import { ThemeEntity } from "styles/Theme";

interface Props {
    color: string,
    backgroundColor: string,
}

export const CardButtonStyles = styled.button<Props>`
    border-radius: var(--borderRadius);
    font-size: var(--fontSizeLead);
    transition: var(--transitionBasic);
    background-color: var(--colorActivePrimary);
    color: var(--colorWhite);
    height: 150px;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: ${({ theme }: {theme: ThemeEntity}) => theme.elevation.dp4};
    }

    svg {
        width: 40px;
        height: 50px;
        margin-right: 10px;
    }
`;