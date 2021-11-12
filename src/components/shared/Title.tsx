import React from "react";
import Typography from "@material-ui/core/Typography";

export interface ITitleProps {
    text: string
}

export const Title: React.FC<ITitleProps> = ({ text }) =>
    <Typography variant={'h3'}>
        {text}
    </Typography>