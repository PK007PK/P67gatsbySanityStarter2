import { TitleStyles } from "./Title.styles";
import React from 'react'
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    as?: React.ElementType,
    spacing?: boolean,
}

export const Title: React.FunctionComponent<Props> = (props): JSX.Element => {
    const {children, as, spacing} = props;

    return (
        <TitleStyles as={as} spacing={spacing}>{children}</TitleStyles>
    )
}