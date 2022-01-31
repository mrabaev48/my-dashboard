import {Modify} from "./utils/utils";
import { Theme} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import {getExtendedTypography, ThreeStripesTypography} from "./components/ThreeStripesTypography";
import {getExtendedPalette, ThreeStripesPalette } from "./components/ThreeStripesPalette";
import {getThreeStripesIconography, ThreeStripesIconography} from "./components/ThreeStripesIconography";
import {getThreeStripesControlProps} from "./components/ThreeStripesControlsProps";
import {getThreeStripesMuiButton} from "./components/ThreeStripesButton";
import {getThreeStripesMuiCheckbox} from "./components/ThreeStripesCheckbox";
import {getThreeStripesMuiRadiobutton} from "./components/ThreeStripesRadiobutton";
import {getThreeStripesMuiTextField} from "./components/ThreeStripesTextField";
import {getWrxMuiDropdownMenu} from "./components/ThreeStripesDropdownMenu";
import {getThreeStripesMuiDialog} from "./components/ThreeStripesDialog";
import {getThreeStripesMuiNavigation} from "./components/ThreeStripesNavigation";
import {getThreeStripesMuiAutocomplete} from "./components/ThreeStripesAutocomplete";
import {getThreeStripesMuiTable} from "./components/ThreeStripesTable";


export type ThreeStripesDefaultTheme = Modify<Theme,
    {
        typography: ThreeStripesTypography;
        palette: ThreeStripesPalette;
        overrides: any | {},
        props: any | {},
        iconography: any | ThreeStripesIconography
    }>;


const createThreeStripesDefaultTheme = (): ThreeStripesDefaultTheme => {
    const baseTheme = createTheme({});

    const extendedPalette = getExtendedPalette(baseTheme.palette)
    const extendedTypography = getExtendedTypography(baseTheme.typography)

    return {
        ...baseTheme,
        typography: extendedTypography,
        palette: extendedPalette,
        props: {
            ...getThreeStripesControlProps()
        },
        iconography: getThreeStripesIconography(extendedPalette),
        overrides: {
            ...baseTheme.overrides,
            ...getThreeStripesMuiButton(extendedPalette),
            ...getThreeStripesMuiCheckbox(extendedPalette),
            ...getThreeStripesMuiRadiobutton(extendedPalette),
            ...getThreeStripesMuiTextField(extendedPalette),
            ...getThreeStripesMuiTable(extendedPalette),
            ...getWrxMuiDropdownMenu(extendedPalette, extendedTypography),
            ...getThreeStripesMuiDialog(),
            ...getThreeStripesMuiNavigation(extendedPalette),
            ...getThreeStripesMuiAutocomplete(extendedPalette)
        }
    }
}

export const ThreeStripesDefaultTheme: ThreeStripesDefaultTheme = createThreeStripesDefaultTheme();
