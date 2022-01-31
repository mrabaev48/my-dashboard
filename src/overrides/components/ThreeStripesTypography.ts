import {Modify} from "../utils/utils";
import {Typography} from "@material-ui/core/styles/createTypography";

interface ITypographyText {
    fontSize: string,
    lineHeight: string,
    fontWeight: number
}

export type ThreeStripesTypography = Modify<Typography, {
    fontWeightLight: number,
    fontWeightRegular: number,
    fontWeightMedium: number,
    fontWeightBold: number,
    label: ITypographyText,
    h1: ITypographyText,
    h2: ITypographyText,
    button: ITypographyText,
    body1: ITypographyText,
    body2: ITypographyText,
}>

export const getExtendedTypography = (baseTypography:Typography) : ThreeStripesTypography => {
    return {
        ...baseTypography,
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        label: {
            fontSize: '10px',
            lineHeight: '14px',
            fontWeight: 400
        },
        h1: {
            fontSize: '24px',
            lineHeight: '30px',
            fontWeight: 400
        },
        h2: {
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 500
        },
        button: {
            fontSize: '10px',
            lineHeight: '18px',
            fontWeight: 500
        },
        //base body element
        body1: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 400
        },
        //body light
        body2: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 300
        }
    }
}

