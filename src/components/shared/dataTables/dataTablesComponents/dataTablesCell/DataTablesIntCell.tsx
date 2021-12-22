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
            className={`${className} dt-column-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
            // style={props.displayStyle ? props.displayStyle: defaultDisplayStyle}
            // onClick={this.onClick}
        >
            {/*{clickHandler instanceof Function*/}
            {/*    ? <Link*/}
            {/*        component={'button'}*/}
            {/*        onClick={() => {*/}
            {/*            clickHandler(this.props.rowCells);*/}
            {/*        }}*/}
            {/*    >{this.props.cellValue}</Link>*/}
            {/*    : this.props.cellValue*/}
            {/*}*/}
            {cellValue}
        </div>
    )
}