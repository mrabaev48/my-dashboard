import {FC} from "react";
import {IDataTablesBooleanCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import CheckIcon from '@mui/icons-material/Check';

export const DataTablesBooleanCell:FC<IDataTablesBooleanCellProps> = ({rowCells, column, cellValue, className}) => {
    const { options } = useDataTablesContext();

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-bool-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            { cellValue &&
                <CheckIcon color={"success"}/>
            }
        </div>
    )
}