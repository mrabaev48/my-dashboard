import {FC} from "react";
import ReactDialog from '@material-ui/core/Dialog';
import {DialogHeader} from "./components/DialogHeader";
import {IDialogProps} from "./models";

export const ThreeStripesDialog:FC<IDialogProps> = (props) => {
    const {closeButtonCallback, title, children, headerClassName, ...other} = props;

    return (
        <div>
            <ReactDialog
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

            </ReactDialog>
        </div>
    );
}