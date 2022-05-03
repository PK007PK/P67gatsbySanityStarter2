import { CardButtonStyles } from "./CardButton.styles";
import React, { FC } from 'react'
import { CommonProps } from "types/commonProps";

interface Props extends CommonProps {
    title: string, 
    iconComponent?: React.ElementType,
    color?: string, 
    backgroundColor?: string,
}

export const CardButton: FC = (props: Props) => {
    const {
        title, 
        iconComponent: IconComponent, 
        onClick, 
        color, 
        backgroundColor, 
        className, 
        style, 
        children,
    } = props;

    return (
        <CardButtonStyles 
            onClick={onClick} 
            color={color} 
            backgroundColor={backgroundColor}
            className={className}
            style={style}
        >
            {IconComponent && <IconComponent />}
            <h3>{title}</h3>
            {children}
        </CardButtonStyles>
    )
}