import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesCurrencyCellProps} from "./models/IDataTablesCellProps";
import {Link} from "@material-ui/core";

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

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-currency-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
            // onClick={this.onClick}
        >
            {/*{clickHandler instanceof Function*/}
            {/*    ? <Link*/}
            {/*        component={'button'}*/}
            {/*        onClick={() => {*/}
            {/*            clickHandler(props.rowCells);*/}
            {/*        }}*/}
            {/*    >{cellValue}</Link>*/}
            {/*    : cellValue*/}
            {/*}*/}
            {cellValue}
        </div>
    )
}