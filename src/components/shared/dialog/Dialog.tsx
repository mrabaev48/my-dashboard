import {FC} from "react";
import ReactDialog from '@material-ui/core/Dialog';
import {DialogHeader} from "./components/DialogHeader";
import {IDialogProps} from "./models";

export const Dialog:FC<IDialogProps> = (props) => {
    const {closeButtonCallback, title, children, headerClassName, onClose, ...other} = props;

    return (
        <div>
            <ReactDialog
                onClose={onClose}
                PaperProps={{
                    className: 'dialog',
                    style: {
                        "width": "100%"
                    }
                }}
                {...other}
            >
                <DialogHeader
                    title={title}
                    closeButtonCallback={closeButtonCallback}
                    className={headerClassName}
                />
                {children}
            </ReactDialog>
        </div>
    );
}