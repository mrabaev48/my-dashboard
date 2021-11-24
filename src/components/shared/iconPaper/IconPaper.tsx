import React, {FC} from "react";
import {Paper} from "@mui/material";
import {CustomIconColor, IconExt, IconSize} from "../icon/IconExt";

export interface IIconPaperProps {
    backgroundColor?: string
    iconColor?: CustomIconColor;
    iconName?: string;
    iconSize?: IconSize;
}

export const IconPaper: FC<IIconPaperProps> = (props) => {
    return (
        <Paper
            elevation={3}
            style={{
                minWidth: 80,
                minHeight: 80,
                width: "fit-content",
                height: "fit-content",
                borderRadius: 4,
                display: 'flex',
                float: 'left',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: props.backgroundColor || 'white'
            }}
        >
            {props.iconName &&  <IconExt
                iconName={props.iconName}
                iconSize={props.iconSize as IconSize}
                iconColor={props.iconColor}
            />}
        </Paper>
    )
}