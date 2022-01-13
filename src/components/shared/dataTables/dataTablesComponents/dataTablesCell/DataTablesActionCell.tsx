import {FC} from "react";
import {IDataTablesActionCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {Delete, Edit} from "@material-ui/icons";
import {Box} from "@mui/material";

export const DataTablesActionCell: FC<IDataTablesActionCellProps> = ({className, rowCells}) => {

    const context = useDataTablesContext();
    const elements: JSX.Element[] = [];


    if (context.options.useEdit) {

        const onEditClick = () => {
            context.actions.editRecord(rowCells);
        }

        const editIconBtn = <Edit
            onClick={onEditClick}
            className={'dt-action-btn'}
            color={"primary"}
            key={`edit-action-btn`}
        />;
        elements.push(editIconBtn);
    }

    if (context.options.useDelete) {
        if (elements.length > 0) {
            elements.push(<Box sx={{ mx: 1 }} key={'action-btns-delimiter'}/>);
        }

        const onDeleteClick = async () => {
            if (context.options.deleteRecord) {
                await context.options.deleteRecord(rowCells);
            }
        }

        const deleteIconBtn = <Delete
            onClick={onDeleteClick}
            className={'dt-action-btn'}
            color={"primary"}
            key={`delete-action-btn`}
        />;
        elements.push(deleteIconBtn);
    }

    return (
        <div className={`${className || ''} dt-column-body-action-cell dt-column-body-cell`}>
            {elements}
        </div>
    )
}