import {ChangeEvent, FC} from "react";
import {Checkbox} from "@mui/material";
import {IDataTablesSelectionCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";

export const DataTablesSelectionCell: FC<IDataTablesSelectionCellProps> = ({
                                                                               rowCells,
                                                                               className
                                                                           }) => {

    const {actions} = useDataTablesContext();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        actions.toggleRowSelection(rowCells);
    }

    return (
        <Checkbox
            className={`dt-selection-cell ${className || ''}`}
            onChange={onChange}
            checked={actions.isRowSelected(rowCells)}
        />
    )
}