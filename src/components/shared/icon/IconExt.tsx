import {FC} from "react";
import {Icon} from "@mui/material";

export interface IIconExtProps {
    iconName: string;
    iconSize: IconSize
    iconColor: IconColor,
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

export const IconExt:FC<IIconExtProps> = (props) => {
    return (
        <Icon
            fontSize={props.iconSize}
            color={props.iconColor}
        >
            {props.iconName}
        </Icon>
    )
}

IconExt.defaultProps = {
    iconName: '',
    iconColor: IconColor.primary,
    iconSize: IconSize.large,
};