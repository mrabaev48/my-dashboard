import {FC} from "react";
import {Card} from "@mui/material";
import {CardProps} from "@mui/material/Card/Card";

export const CardExt:FC<CardProps> = (props) => {
    return (
        <Card
            {...props}
            style={{
                ...props.style,
                borderRadius: '8px',
                overflow: 'visible',
                padding: '5px'
            }}
        >
            {props.children}
        </Card>
    )
}