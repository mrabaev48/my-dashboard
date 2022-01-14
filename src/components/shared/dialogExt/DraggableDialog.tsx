import React, {FC} from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ModalProps,
    Paper,
    PaperProps
} from "@mui/material";
import Draggable from 'react-draggable';
import Dialog from '@mui/material/Dialog';
import {Close} from "@material-ui/icons";

export interface IDialogProps {
    closeButtonCallback?: (event: React.MouseEvent<HTMLElement>) => void;
    title?: string;
    open: boolean;
    onClose?: ModalProps['onClose'];
    fullWidth?: boolean;
    headerClassName?: string;
    className?: string;
}

function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export const DraggableDialog: FC<IDialogProps> = ({
                                                      open,
                                                      onClose,
                                                      closeButtonCallback,
                                                      title,
                                                      headerClassName,
                                                      fullWidth,
                                                      children,
                                                      className
                                                  }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
            fullWidth={fullWidth || false}
            className={className || ''}
        >
            <div
                id="draggable-dialog-title"
            >
                <Close
                    color={"error"}
                    fontSize={"medium"}
                    style={{
                        display: "flex",
                        float: "right",
                        marginRight: '19px',
                        marginTop: '15px',
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        if (closeButtonCallback) {
                            closeButtonCallback(e as any);
                        }
                    }}
                />
                <DialogTitle
                    style={{
                        cursor: 'move',
                        display: 'flex',
                        justifyContent: 'start',
                        width: '100%',
                        paddingTop: 0,
                    }}
                    className={headerClassName || ''}
                >
                    {title}
                </DialogTitle>
            </div>
            {children}
        </Dialog>
    )
}