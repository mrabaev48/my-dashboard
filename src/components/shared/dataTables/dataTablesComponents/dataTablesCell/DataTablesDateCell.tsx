import {FC} from "react";
import {IDataTablesCellPropsBase} from "./models/IDataTablesCellProps";

export const DataTablesDateCell:FC<IDataTablesCellPropsBase> = (
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
    return (
        <div
            className={`${className} dt-column-body-cell`}
        >
            {cellValue}
        </div>
    )
}