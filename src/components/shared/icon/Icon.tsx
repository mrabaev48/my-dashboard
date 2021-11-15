import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC} from "react";
import {IconName, IconPrefix} from "@fortawesome/free-solid-svg-icons";
import {library, SizeProp} from "@fortawesome/fontawesome-svg-core";
// import {far, fas, fal, fad} from '@fortawesome/pro-svg-icons';

// library.add(far, fas, fal, fad);

export interface IIconProps {
    iconName: string | IconName,
    iconColor: string | IconColor,
    iconSize:  FIconSize | SizeProp
    iconType: IconType | IconPrefix
}

export enum IconColor {
    lightBlue = 'lightBlue',
    white = 'white',
    black = 'black',
    // lightGray = 'lightGray',
    // lightGray50 = 'lightGray50',
    darkGray = 'darkGray',
    defaultBlack = 'defaultBlack',
    defaultGreen = 'defaultGreen',
    defaultRed = 'defaultRed',
    defaultWhite = 'defaultWhite'
}

export enum FIconSize {
    medium = 'medium',
    small = 'small',
    extraSmall = 'extraSmall',
    defaultRegular = 'defaultRegular',
    large = 'large'
}

export enum IconType {
    regular = "far",
    solid = "fas",
    light = "fal",
    dualTone = "fad",
}

export const Icon:FC<IIconProps> = (props) => {
    const {iconName, iconColor, iconSize, iconType, ...other } = props;
    console.log('ICON PRIOS: ', props)
    return (
        <FontAwesomeIcon
            color={iconColor}
            icon={[iconType as IconPrefix, iconName as IconName]}
            size={iconSize as SizeProp}
        />
    )
}

const defaultProps: IIconProps = {
    iconName: '',
    iconType: IconType.regular,
    iconColor: IconColor.black,
    iconSize: FIconSize.defaultRegular
}

Icon.defaultProps = defaultProps;
