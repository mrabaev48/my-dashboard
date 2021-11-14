import {FC} from "react";
import {Paper} from "@mui/material";

export interface ICardProps {
    cardTitle?: string
}

export const Card:FC<ICardProps> = (props) => {
    return (
        <Paper elevation={2}>
            
        </Paper>
    )
}