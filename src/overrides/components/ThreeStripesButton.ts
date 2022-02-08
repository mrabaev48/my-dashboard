import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiButton = (palette: ThreeStripesPalette) => {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '34px !important',
                    marginRight: '24px',
                    '&:last-child': {
                        marginRight: '0px',
                    },
                },
                contained: {
                    width: '118px',
                    borderRadius: '3px',
                    backgroundColor: palette.primary.main,
                    color: palette.primary.contrastText,
                    textAlign: 'center',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: palette.primary.dark,
                        boxShadow: 'none'
                    },
                    '&$disabled': {
                        backgroundColor: palette.primary.main,
                        opacity: 0.4,
                        color: palette.primary.contrastText
                    },
                    '&$focusVisible': {
                        boxShadow: 'none',
                        backgroundColor: palette.primary.light,
                        transition: 'none'
                    },
                },
                outlined: {
                    width: '118px',
                    height: '34px !important',
                    borderRadius: '3px',
                    borderColor: palette.primary.black,
                    backgroundColor: palette.primary.contrastText,
                    color: palette.primary.black,
                    textAlign: 'center',
                    boxShadow: 0,
                    '&:hover': {
                        boxShadow: 0,
                        borderColor: palette.primary.dark,
                        color: palette.primary.dark,
                        backgroundColor: palette.primary.contrastText
                    },
                    '&$disabled': {
                        borderColor: palette.primary.black,
                        opacity: 0.4
                    },
                    '&$focusVisible': {
                        boxShadow: 'none',
                        borderColor: palette.primary.light,
                        color: palette.primary.light
                    }
                },
                text: {
                    color: palette.primary.main,
                    backgroundColor: 'unset',
                    '&:hover': {
                        backgroundColor: 'unset',
                        color: [palette.primary.dark, '!important'].join(' '),
                        '& svg': {
                            color: [palette.primary.dark, '!important'].join(' ')
                        },
                    },
                    '& svg': {
                        padding: [0, '!important'].join(''),
                    },
                    '&$focusVisible ': {
                        color: palette.primary.light,
                        '& svg': {
                            color: [palette.primary.light, '!important'].join(' '),
                        }
                    },
                    '&$disabled': {
                        borderColor: palette.primary.black,
                        opacity: 0.4,
                        '& svg': {
                            color: [palette.primary.black, '!important'].join(' '),
                            opacity: 0.4
                        }
                    }
                },
                startIcon: {
                    marginRight: '4px',
                    verticalAlign: 'middle',
                    '& svg': {
                        '&.fa-plus': {
                            fontSize: '8px'
                        },
                        '&.fa-trash': {
                            width: '12.25px',
                            height: '14px',
                            marginTop: '-2px'
                        }
                    },
                }
            }
        },

        MuiButtonBase: {
            styleOverrides: {
                root: {
                    height: '34px !important'
                }
            }
        }
    }
}