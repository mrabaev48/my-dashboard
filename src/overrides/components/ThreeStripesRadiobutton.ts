import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiRadiobutton = (palette: ThreeStripesPalette) => {
    return {
        MuiFormControlLabel: {
            root: {
                marginRight: '24px',
                '&:last-child': {
                    marginRight: '0px',
                },
                marginTop: '-5px',
            },
        },
        MuiRadio: {
            colorPrimary: {
                color: palette.primary.light,
                '&$checked': {
                    color: palette.primary.main,
                    '&:hover': {
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                "&.focused": {
                    color: palette.primary.light,
                },
                '&:focus': {
                    color: palette.primary.light,
                },
                '&:hover': {
                    color: palette.primary.dark,
                },
                '&$disabled': {
                    color: palette.primary.main,
                    opacity: '0.4'
                }
            },
            root: {
                '& svg': {
                    fontSize: '16px',
                }
            },
        },
    }
}