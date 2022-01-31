import {ThreeStripesPalette} from "./ThreeStripesPalette";
import {ThreeStripesColorNames} from "../utils/utils";

export type ThreeStripesIconography = {
    display: string
    paddingRight: string
    paddingLeft: string
    fontSize: string
    color: string
    lightBlue: IColor,
    lightGray: IColor,
    lightGray50: IColor,
    darkGray: IColor,
    defaultBlack: IColor,
    defaultGreen: IColor,
    defaultRed: IColor,

    medium: ISize,
    small: ISize,
    extraSmall: ISize,
    defaultRegular: ISize
}

interface ISize {
    fontSize: string
}

interface IColor {
    color: string
}

export const getThreeStripesIconography = (palette: ThreeStripesPalette): ThreeStripesIconography => {
    return {
        display: 'flex',
        paddingRight: '3px',                             // default padding
        paddingLeft: '3px',
        fontSize: '16px',                           // default size
        color: palette.grey[ThreeStripesColorNames.Black50],    // default color

        //color:
        lightBlue: {
            color: palette.primary.main!,
        },
        lightGray: {
            color: palette.grey[ThreeStripesColorNames.LightGray ],
        },
        lightGray50: {
            color: palette.grey[ThreeStripesColorNames.LightGray50 ],
        },
        darkGray: {
            color: palette.grey[ThreeStripesColorNames.DarkGray ],
        },
        defaultBlack: {
            color: palette.grey[ThreeStripesColorNames.Black50],
        },
        defaultGreen: {
            color: palette.success.main!,
        },
        defaultRed : {
            color: palette.error.main!
        },

        //size:
        medium: {
            fontSize: '12px'
        },
        small: {
            fontSize: '8px',
        },
        extraSmall: {
            fontSize: '6px',
        },
        defaultRegular: {
            fontSize: '16px',
        }
    }
}