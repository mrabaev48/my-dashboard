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

    return (
        <div
            className={`${className} dt-column-body-cell`}
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