import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiCheckbox = (palette: ThreeStripesPalette) => {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    marginRight: '24px',
                    '&:last-child': {
                        marginRight: '0px',
                    },
                    marginTop: '-5px',
                },
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '& svg': {
                        fontSize: '16px',
                    }
                },
                colorPrimary: {
                    color: palette.primary.light,
                    disableFocusRipple: false,
                    '&:hover': {
                        color: palette.primary.dark,
                    },
                    '&:focus': {
                        color: palette.primary.light,
                    },
                    "&.Mui-focusVisible": {
                        color: palette.primary.light,
                    },
                    "&.focused": {
                        color: palette.primary.light,
                    },
                    '&$checked': {
                        color: palette.primary.main,
                        '&:hover': {
                            color: palette.primary.dark
                        },
                        '&:focus': {
                            color: palette.primary.light,
                        },
                        '&$focusVisible': {
                            color: palette.primary.light,
                        }
                    },
                    '&$disabled': {
                        color: palette.primary.main,
                        opacity: '0.4'
                    },
                    '&$focusVisible': {
                        color: palette.primary.light,
                    }
                }
            }
        }
    }
}