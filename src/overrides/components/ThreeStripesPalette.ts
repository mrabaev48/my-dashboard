import {Modify} from "../utils/utils";
import {Palette} from "@material-ui/core/styles/createPalette";

export interface IPaletteItem {
    light?: string,
    main?: string,
    dark?: string,
    contrastText?: string,
    black?: string,
}

export type ThreeStripesPalette = Modify<Palette, {
    primary: IPaletteItem,
    error: IPaletteItem,
    info: IPaletteItem,
    success: IPaletteItem
    grey: any
}>

export const getExtendedPalette = (basePalette:Palette) : ThreeStripesPalette => {

    return {
        ...basePalette,
        primary: {
            ...basePalette.primary,
            light: '#70D6FD',
            main: '#48B1FF',
            dark: '#026B93',
            contrastText: '#fff',
            black: '#212A38'
        },
        error: {
            ...basePalette.error,
            main: '#FC4850',
            contrastText: '#fff'
        },
        info: {
            ...basePalette.info,
            light: '#70D6FD',
            main: '#48B1FF',
            dark: '#026B93',
            contrastText: '#fff'
        },
        success: {
            ...basePalette.success,
            main: '#36C960',
            contrastText: '#fff'
        },
        grey: {
            ...basePalette.grey,
            //LightGray50%
            '100': '#EEF0F5',
            //LightGray
            '200': '#DDE1EB',
            //Black20%
            '300': '#D3D4D7',
            //black50%
            '500': '#90949B',
            //DarkGray
            '800': '#404D56',
            //black
            '900': '#212A38',
        }
    }
}