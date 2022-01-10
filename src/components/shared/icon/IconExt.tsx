import React, {FC} from "react";
import {Icon} from "@mui/material";

export type CustomIconColor = IconColor | string | undefined

export interface IIconExtProps {
    iconName: string;
    iconSize: IconSize;
    iconColor: CustomIconColor;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
}

export enum IconSize {
    inherit = 'inherit' ,
    large = 'large' ,
    medium = 'medium' ,
    small = 'small'
}

export enum IconColor {
    inherit = 'inherit',
    action =  'action',
    disabled = 'disabled',
    primary = 'primary',
    secondary = 'secondary',
    error = 'error',
    info = 'info',
    success = 'success',
    warning =  'warning',
}

export const IconExt:FC<IIconExtProps> = ({iconColor, iconName, iconSize, className}) => {
    let propses: any = {
        fontSize: iconSize
    }

    if (iconColor && !(iconColor in IconColor)) {
        propses['style'] = {
            color: iconColor
        }
    } else {
        propses['color'] = iconColor;
    }

    return (
        <Icon
            {...propses}
            className={className}
        >
            {iconName}
        </Icon>
    )
}

IconExt.defaultProps = {
    iconName: '',
    iconColor: IconColor.primary,
    iconSize: IconSize.large,
};