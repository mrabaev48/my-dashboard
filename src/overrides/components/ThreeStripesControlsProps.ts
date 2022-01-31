export const getThreeStripesControlProps = () => {
    return {
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