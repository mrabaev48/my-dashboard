import {FC} from "react";
import {Paper, PaperProps} from "@mui/material";

export const PaperExt:FC<PaperProps> = (props) => {
    return (
        <Paper
            {...props}
            elevation={3}
            style={{
                ...props.style,
                borderRadius: '8px',
                maxWidth: '393px'
            }}
        >
            {props.children}
        </Paper>
    )
}