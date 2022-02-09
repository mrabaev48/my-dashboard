import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {
    IDataTablesDecimalCellProps
} from "./models/IDataTablesCellProps";

export const DataTablesDecimalCell:FC<IDataTablesDecimalCellProps> = ({
    rowCells,
    column,
    cellValue,
    useAutofocus,
    className,
    error,
    children
                                                                      }) => {
    const { options } = useDataTablesContext();

    let displayValue = cellValue;

    if (column.transform) {
        displayValue = column.transform(displayValue);
    }

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-decimal-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            {displayValue}
        </div>
    )
}