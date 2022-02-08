import {ThreeStripesColorNames} from "../utils/utils";
import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiNavigation = (palette:ThreeStripesPalette) => {
    return {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: palette.grey[ThreeStripesColorNames.LightGray ],
                },
                colorSecondary: {
                    backgroundColor: palette.grey[ThreeStripesColorNames.LightGray ],
                },
                root: {
                    height: '60px',
                    justifyContent: 'center',
                    boxShadow: 'none',
                    backgroundColor: palette.grey[ThreeStripesColorNames.LightGray ],
                },
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: palette.primary.main,
                    height: '1px',
                    width: '1px',
                },
                root: {
                    minHeight: '0px',
                    minWidth: '0px',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorInherit: {
                    color: palette.primary.main,
                    opacity: '1',
                    minWidth: '0px',
                    minHeight: '0px',
                },
                textColorPrimary: {
                    color: palette.primary.main,
                    opacity: '1',
                    minWidth: '0px',
                    minHeight: '0px',
                },
                textColorSecondary: {
                    color: palette.primary.main,
                    opacity: '1',
                    minWidth: '0px',
                    minHeight: '0px',
                },
                root: {
                    padding: '0px',
                    margin: '12px',
                    marginTop: '6px',
                    marginBottom: '6px',
                    minHeight: '0px',
                    minWidth: '0px',

                    color: palette.primary.main,
                    opacity: '1',
                    "&.Mui-disabled": {
                        color: palette.grey[ThreeStripesColorNames.Black50],
                        opacity: '1',
                    }
                }
            }
        },
    }
}