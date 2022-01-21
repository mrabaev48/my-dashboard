import {FC} from "react";
import {IDataTablesIntCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";

export const DataTablesIntCell:FC<IDataTablesIntCellProps> = ({
    rowCells,
    column,
    cellValue,
    error,
    className,
    useAutofocus,
    children
                                                              }) => {
    const { options } = useDataTablesContext();

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-int-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            {cellValue}
        </div>
    )
}