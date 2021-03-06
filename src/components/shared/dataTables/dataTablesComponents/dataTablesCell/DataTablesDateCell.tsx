import {FC} from "react";
import {IDataTablesDateCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DtUtils} from "../../utils/DtUtils";

export const DataTablesDateCell: FC<IDataTablesDateCellProps> = (
    {
        rowCells,
        column,
        cellValue,
        error,
        className,
        useAutofocus,
        children
    }
) => {

    const context = useDataTablesContext();
    let formattedDate = '';

    if (cellValue) {
        formattedDate = DtUtils.getFormattedDate(cellValue, column, context) || '';
    }

    if (column.transform) {
        formattedDate = column.transform(formattedDate);
    }

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-date-body-cell`}
        >
            {formattedDate}
        </div>
    )
}