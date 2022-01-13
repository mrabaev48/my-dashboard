import {ButtonProps} from "@material-ui/core";
import {ModalProps} from "@material-ui/core/Modal";
import React from "react";

export interface IDialogProps {
    closeButtonCallback?: (event: React.MouseEvent<HTMLElement>) => void;
    title?: string;
    open: boolean;
    onClose?: ModalProps['onClose'];
    fullWidth?: boolean;
    headerClassName?: string;
}

export const ConfirmDialogProviderDefaults: IConfirmDialogProviderProps = {
    title: 'Are you sure?',
    description: '',
    confirmationText: 'Ok',
    cancellationText: 'Cancel',
    dialogProps: {
        open: false,
        title: '',
        fullWidth: false,
        closeButtonCallback: (event => {}),
        onClose:event => {},
        headerClassName: ''
    },
    confirmationButtonProps: {},
    cancellationButtonProps: {},
};

export interface IConfirmDialogProviderProps {
    title?: string;
    description?: string | IDialogDescription;
    confirmationText?: string;
    cancellationText?: string;
    dialogProps?: IDialogProps;
    confirmationButtonProps?: ButtonProps;
    cancellationButtonProps?: ButtonProps;
    defaultOptions?: IConfirmDialogProviderProps;
}

export interface IDialogError {
    description?: string
}

export interface IDialogDescription {
    errors?: IDialogError[]
}

export interface IDialogOptions {
    title?: string,
    description?: IDialogDescription | string;
    cancellationText?: string;
    confirmationText?: string;
    dialogProps?: IDialogProps;
    confirmationButtonProps?: ButtonProps;
    cancellationButtonProps?: ButtonProps;
}

export interface IConfirmDialogProps {
    open: boolean;
    onCancel: (event: any) => void;
    onConfirm: (event: any) => void;
    onClose?: (event: any) => void;
    options: IDialogOptions;
}

export interface IDialogHeader {
    title?: string;
    closeButtonCallback?: (event: any) => void;
    className?: string;
}