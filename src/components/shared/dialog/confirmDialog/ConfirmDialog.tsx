import {FC} from "react";
import {Button, DialogActions, DialogContent, DialogContentText} from "@material-ui/core";
import {IDialogDescription, IDialogError, IConfirmDialogProps} from "../models";
import {ThreeStripesDialog} from "../Dialog";



export const ConfirmDialog:FC<IConfirmDialogProps> = ({ open, options, onCancel, onConfirm, onClose }) => {
    const {
        title,
        description,
        confirmationText,
        cancellationText,
        dialogProps,
        confirmationButtonProps,
        cancellationButtonProps,
    } = options;

    let dialogContentText = '';

    if (description && description.hasOwnProperty('errors')) {
        const descriptionObject = description as IDialogDescription;
        descriptionObject.errors?.forEach((error:IDialogError ) => {
            dialogContentText = dialogContentText.concat(`${error?.description}\n `);
        });
    }
    else {
        dialogContentText = description as string;
    }

    return (
        <ThreeStripesDialog
            fullWidth
            {...dialogProps}
            open={open}
            onClose={onClose}
            title={title}
            data-cy={'confirmation-dialog'}
        >
            {dialogContentText && (
                <DialogContent>
                    <DialogContentText>{dialogContentText}</DialogContentText>
                </DialogContent>
            )}
            <DialogActions>
                <Button
                    data-cy={'dialog-cancel'}
                    {...cancellationButtonProps} variant={'outlined'} onClick={onCancel}>
                    {cancellationText}
                </Button>
                <Button
                    data-cy={'dialog-ok'}
                    color="primary" {...confirmationButtonProps} variant={'contained'} onClick={onConfirm}>
                    {confirmationText}
                </Button>
            </DialogActions>
        </ThreeStripesDialog>
    );
}