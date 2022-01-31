import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiAutocomplete = (palette:ThreeStripesPalette) => {
    return {
        MuiAutocomplete: {
            paper: {
                margin: '0px',
                boxShadow: 'none',
                borderWidth: '1px !important',
                borderColor: palette.grey['500'],
                borderStyle: 'solid',
            },
            listbox: {
                paddingLeft: '12px',
                paddingTop: '8px',
                paddingBottom: '8px'
            },
            popupIndicator:{
                '&:hover': {
                    backgroundColor: 'unset'
                }
            },
            option: {
                padding: '0px 0px 0px 0px !important',
                lineHeight: 'normal',
                color: palette.grey['500'],
                '&[data-focus="true"]': {
                    backgroundColor: 'unset',
                    color: palette.primary.black
                },
                '&[aria-selected="true"]': {
                    backgroundColor: 'unset'
                },
                '&:active': {
                    backgroundColor: palette.primary.contrastText
                },
                marginBottom: '4px',
                '&:last-child': {
                    marginBottom: '0px'
                },
            },
            inputRoot: {
                '&:hover': {
                    // borderColor: palette.grey['500']
                },
                paddingLeft: '2px !important',
                '& .MuiAutocomplete-input': {
                    minWidth: '35px',
                },
                '&&[class*="MuiOutlinedInput-root"] $input': {
                    padding: 0,
                },
                '&&[class*="MuiOutlinedInput-root"]': {
                    padding: 0,
                },
            },
        },
    }
}

export const getThreeStripesControlProps = () => {
    return {
        props: {
            // Disable ripple globally
            MuiButtonBase: {
                disableRipple: true
            },
            // Select menu position
            MuiSelect: {
                MenuProps: {
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null
                },
                variant: 'outlined'
            },
            // Text fields default variant
            MuiTextField: {
                variant: 'outlined'
            }
        }
    }
}