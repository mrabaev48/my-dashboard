import {ThreeStripesColorNames} from "../utils/utils";
import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiTextField = (palette: ThreeStripesPalette) => {
    return {
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    marginTop: -13,
                    '&.Mui-disabled': {
                        opacity: '70%'
                    }
                },
                shrink: {
                    color: [palette.grey.Black50, '!important'].join(' '),
                    marginTop: '-5px !important',
                    marginLeft: '-14px !important',
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                contained: {
                    fontSize: '10px',
                    marginTop: -1,
                    textAlign: 'right',
                    marginRight: '0px !importaint'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginRight: '24px',
                    '&:last-child': {
                        marginRight: '0px',
                    },
                },
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    'fx-vbar-policy': 'needed',
                    paddingRight: '0px !important',
                    '& $notchedOutline legend span': {
                        width: 0,
                        margin: 0,
                        padding: 0,
                        borderRadius: '3px'
                    },
                    '&:hover $notchedOutline': {
                        border: ['1px', 'solid', palette.grey[ThreeStripesColorNames.Black50], '!important'].join(' '),
                    },
                    '&.Mui-focused $notchedOutline': {
                        border: ['1px', 'solid', palette.grey[ThreeStripesColorNames.Black50], '!important'].join(' '),
                    },
                    '&.Mui-disabled': {
                        opacity: '70%'
                    },
                    '& textarea': {
                        paddingBottom: 36,
                        height: '52px !important',
                        overflowY: 'auto !important',
                        paddingRight: '-20px !important'
                    }
                },
                input: {
                    height: 24,
                    fontSize: 12,
                    padding: 0,
                    paddingLeft: 12,
                    borderRadius: '3px',
                    color: palette.grey[ThreeStripesColorNames.FullBlack],
                    '&:disabled': {
                        opacity: '70%'
                    }
                }
            }
        }
    }
}