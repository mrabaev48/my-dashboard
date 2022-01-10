import {FC} from "react";
import {IDataTablesDateCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import moment from "moment";
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
    const formattedDate = DtUtils.getFormattedDate(cellValue, column, context);

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-select-body-cell`}
        >
            {formattedDate}
        </div>
    )
}