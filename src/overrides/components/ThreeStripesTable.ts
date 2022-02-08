import {ThreeStripesColorNames} from "../utils/utils";
import {ThreeStripesPalette} from "./ThreeStripesPalette";

export const getThreeStripesMuiTable = (palette:ThreeStripesPalette) => {
    return {
        MuiTableCell: {
            styleOverrides: {
                head: {
                    height: '38px !important',
                    padding: '0 24px 0 24px',
                    fontSize: '10px',
                    color: palette.grey[ThreeStripesColorNames.Black50]
                },
                body: {
                    height: '39px !important',
                    maxHeight: '39px !important',
                    padding: '0 24px 0 24px',
                    borderColor: palette.grey[ThreeStripesColorNames.LightGray],
                    fontSize: '12px',
                    color: palette.grey[ThreeStripesColorNames.FullBlack]
                },
                footer: {
                    height: '39px !important',
                    padding: '0 24px 0 24px',
                }
            }
        },
        MuiTableFooter: {
            styleOverrides: {
                root: {
                    height: '39px !important',
                    padding: '0 24px 0 24px',
                    backgroundColor: palette.grey[ThreeStripesColorNames.LightGray50],
                    borderColor: palette.grey[ThreeStripesColorNames.DarkGray]
                }
            }
        }
    }
}