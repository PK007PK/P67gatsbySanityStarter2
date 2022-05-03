import { CardButtonStyles } from "./CardButton.styles";
import React, { FC, JSXElementConstructor, useMemo } from 'react'
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    title: string, 
    iconComponent: FC,
    color: string, 
    backgroundColor: string,
}

export const CardButton: FC = (props: Props) => {
    const {
        title, 
        iconComponent, 
        onClick, 
        color, 
        backgroundColor, 
        className, 
        style, 
        children,
    } = props;

    const MemoIcon = iconComponent;

    return (
        <CardButtonStyles 
            onClick={onClick} 
            color={color} 
            backgroundColor={backgroundColor}
            className={className}
            style={style}
        >
            <MemoIcon />
            <h3>{title}</h3>
            {children}
        </CardButtonStyles>
    )
}