import {Typography, withStyles} from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import {FC} from "react";
import {IDialogHeader} from "../models";
import {IconColor, IconExt, IconSize} from "../../icon/IconExt";
import './dialogHeader.scss';


export const DialogHeader: FC<IDialogHeader> = (props) => {

    const {title, closeButtonCallback, className, ...other} = props;

    return (
        <MuiDialogTitle disableTypography className={className} {...other} >
        <Typography variant={'h1'}>{title}</Typography>
        {/*<ThreeStripesIcon
            iconName={'times'}
            iconColor={IconColor.lightGray}
            iconSize={IconSize.defaultRegular}
            title={'Close'}
            data-testid={'dialog-button-cancel'}
            className={classes.dialogCloseButton}
            onClick={closeButtonCallback}
        />*/}
        <IconExt
            iconColor={IconColor.primary}
            iconSize={IconSize.medium}
            iconName={'Close'}
            onClick={closeButtonCallback}
            className={'dialog-button-cancel'}
        />
    </MuiDialogTitle>
    )
};

// export const DialogHeader = withStyles
// ({
//     root: {
//         margin: 0,
//         padding: MuiTheme.spacing(2),
//     },
//     dialogCloseButton: {
//         display: 'flex',
//         float: 'right',
//     },
// })(DialogHeaderBase);