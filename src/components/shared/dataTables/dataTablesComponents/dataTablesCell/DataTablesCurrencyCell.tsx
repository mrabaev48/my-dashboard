import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesCurrencyCellProps} from "./models/IDataTablesCellProps";

export const DataTablesCurrencyCell:FC<IDataTablesCurrencyCellProps> =
    (
        {
            cellValue,
            column,
            rowCells,
            useAutofocus,
            error,
            className,
            children
        }
    ) => {
    const { options } = useDataTablesContext();

    let displayValue = cellValue;

    if (column.transform) {
        displayValue = column.transform(displayValue);
    }

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-currency-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            {displayValue}
        </div>
    )
}