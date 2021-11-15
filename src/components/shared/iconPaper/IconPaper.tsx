import React, {FC} from "react";
import {Paper} from "@mui/material";
import {FIconSize, Icon, IconColor, IconType} from "../icon/Icon";
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';

export interface IIconPaperProps {
    backgroundColor?: string
    iconColor?: "inherit" | "action" | "disabled" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined

}

export const IconPaper: FC<IIconPaperProps> = (props) => {
    return (
        <Paper
            elevation={3}
            style={{
                minWidth: 60,
                minHeight: 60,
                borderRadius: 4,
                display: 'flex',
                float: 'left',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: props.backgroundColor || 'white'
            }}
        >
            <EuroSymbolIcon color={props.iconColor || 'action'}/>
            {/*<Icon*/}
            {/*    iconColor={IconColor.white}*/}
            {/*    iconName={'apple'}*/}
            {/*    iconType={IconType.regular}*/}
            {/*    iconSize={FIconSize.defaultRegular}*/}
            {/*/>*/}
        </Paper>
    )
}