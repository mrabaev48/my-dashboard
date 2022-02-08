import {ThreeStripesPalette} from "./ThreeStripesPalette";
import {ThreeStripesColorNames} from "../utils/utils";
import {ThreeStripesTypography} from "./ThreeStripesTypography";

export const getWrxMuiDropdownMenu = (palette: ThreeStripesPalette, typography:ThreeStripesTypography) => {
    return {
        MuiList: {
            styleOverrides: {
                'root': {
                    '&.dropdown-menu': {
                        border: '0px',
                    },
                },
                'padding': {
                    '&.dropdown-menu': {
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    },
                },
            }
        },

        MuiMenuItem: {
            styleOverrides: {
                'root': {
                    '&.dropdown-menu': {
                        paddingLeft: '16px',
                        paddingRight: '32px',
                        paddingTop: '6px',
                        paddingBottom: '6px',
                        textTransform: 'uppercase',
                        color: palette.grey[ThreeStripesColorNames.FullBlack],
                        fontSize: typography.button.fontSize,
                        fontWeight: typography.button.fontWeight,
                        lineHeight: typography.button.lineHeight,
                        '&.dark': {
                            color: palette.primary.main,
                            backgroundColor: palette.grey[ThreeStripesColorNames.DarkGray],
                        },
                    },
                },
            }
        },

        MuiPaper: {
            styleOverrides: {
                'root': {
                    '&.dropdown-menu': {
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        '&.dark': {
                            color: palette.primary.main,
                            backgroundColor: palette.grey[ThreeStripesColorNames.DarkGray],
                        },
                    },
                },
                'rounded': {
                    borderRadius: '3px'
                },
                'elevation1': {
                    '&.dropdown-menu': {
                        boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
                    },
                },
            }
        }
    }
}