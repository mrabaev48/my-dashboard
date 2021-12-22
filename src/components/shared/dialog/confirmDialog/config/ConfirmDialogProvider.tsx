import {IConfirmDialogProviderProps, ConfirmDialogProviderDefaults} from "../../models";
import {FC, useCallback, useState} from "react";
import { ConfirmContext } from "./ConfirmContext";
import {ConfirmDialog} from "../ConfirmDialog";

const buildOptions = (defaultOptions: IConfirmDialogProviderProps, options: IConfirmDialogProviderProps) => {
    const dialogProps = {
        ...(defaultOptions.dialogProps || ConfirmDialogProviderDefaults.dialogProps),
        ...(options.dialogProps || {}),
    };

    const confirmationButtonProps = {
        ...(defaultOptions.confirmationButtonProps || ConfirmDialogProviderDefaults.confirmationButtonProps),
        ...(options.confirmationButtonProps || {}),
    };

    const cancellationButtonProps = {
        ...(defaultOptions.cancellationButtonProps || ConfirmDialogProviderDefaults.cancellationButtonProps),
        ...(options.cancellationButtonProps || {}),
    };

    return {
        ...ConfirmDialogProviderDefaults,
        ...defaultOptions,
        ...options,
        dialogProps,
        confirmationButtonProps,
        cancellationButtonProps,
    }
}

export const ConfirmDialogProvider:FC<IConfirmDialogProviderProps> =
    (
        // {
        //     children,
        //     defaultOptions:IThreeStripesConfirmDialogProviderProps = {}
        // }
        props
    ) => {

        let {defaultOptions} = props;
        // defaultOptions = defaultOptions ?? ThreeStripesConfirmDialogProviderDefaults;

        if (!defaultOptions) {
            defaultOptions = ConfirmDialogProviderDefaults;
        }

        const [options, setOptions] = useState<IConfirmDialogProviderProps>({ ...ConfirmDialogProviderDefaults, ...defaultOptions});
        const [resolveReject, setResolveReject] = useState<any>([]);
        const [resolve, reject] = resolveReject;

        const confirm = useCallback((options = ConfirmDialogProviderDefaults) => {
            return new Promise((resolve: any, reject: any) => {
                setOptions(buildOptions(defaultOptions as IConfirmDialogProviderProps, options) as IConfirmDialogProviderProps);
                setResolveReject([resolve, reject]);
            });
        }, []);

        const handleClose = useCallback(() => {
            setResolveReject([]);
        }, []);

        const handleCancel = useCallback(() => {
            reject();
            handleClose();
        }, [reject, handleClose]);

        const handleConfirm = useCallback(() => {
            resolve();
            handleClose();
        }, [resolve, handleClose]);

    return (
        <>
            <ConfirmContext.Provider value={confirm}>
                {props.children}
            </ConfirmContext.Provider>
            <ConfirmDialog
                open={resolveReject.length === 2}
                options={options}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </>
    )
}