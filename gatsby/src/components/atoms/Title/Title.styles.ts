import styled from "styled-components";
import { ThemeEntity } from "styles/Theme";
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    as?: React.ElementType,
    spacing?: boolean,
}
// --spacingSmall

export const TitleStyles = styled.h1<Props>`
    padding: ${({spacing}) => spacing ? "0 var(--spacingSmall)" : null };
    margin-bottom: var(--spacingSmall);
`;
