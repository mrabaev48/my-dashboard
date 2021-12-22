import React from "react";
import {useConfirmDialog} from "../hooks/useConfirmDialog";

export const withThreeStripsConfirmDialog = <T extends object>(PassedComponent: React.ComponentType<T>) => {
    return (props: T) => {
        const confirm = useConfirmDialog();
        return (
            <PassedComponent
                {...props}
                confirm={confirm}
            />
        );
    }
}