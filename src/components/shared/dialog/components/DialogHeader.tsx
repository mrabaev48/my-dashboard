import {Typography, withStyles} from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {FC} from "react";
import {IDialogHeader} from "../models";
import './dialogHeader.scss';
import {Close} from "@material-ui/icons";


export const DialogHeader: FC<IDialogHeader> = (props) => {

    const {title, closeButtonCallback, className, ...other} = props;

    return (
        <MuiDialogTitle
            disableTypography className={className}
            {...other}
            style={{
                display: 'flex',
                justifyContent: "space-between"
            }}>
            <Typography variant={'h5'}>{title}</Typography>
            <Close
                onClick={closeButtonCallback}
                color={"primary"}
                fontSize={"medium"}
                style={{
                    display: "flex",
                    float: "right"
                }}
            />
        </MuiDialogTitle>
    )
};