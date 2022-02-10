import {CSSProperties, FC} from "react";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {DataTablesColumn, IDataTablesDateColumn, IDataTablesSelectColumn} from "../../models/IDataTablesColumn";
import {DataTablesStringCell} from "./DataTablesStringCell";
import {DataTablesIntCell} from "./DataTablesIntCell";
import {DataTablesDecimalCell} from "./DataTablesDecimalCell";
import {DataTablesBooleanCell} from "./DataTablesBooleanCell";
import {DataTablesSelectCell} from "./DataTablesSelectCell";
import {DataTablesCurrencyCell} from "./DataTablesCurrencyCell";
import {DataTablesActionCell} from "./DataTablesActionCell";
import {DataTablesDateCell} from "./DataTablesDateCell";
import {DataTablesSelectionCell} from "./DataTablesSelectionCell";
import {DataTablesExpandCell} from "./DataTablesExpandCell";
import {TableCell} from "@mui/material";
import {DtUtils} from "../../utils/DtUtils";

export interface IDataTablesBodyCellProps {
    column: DataTablesColumn;
    row: any;
    value: any;
    useAutofocus: boolean;
    style?: CSSProperties;
}

export const  DataTablesBodyCell: FC<IDataTablesBodyCellProps> = ({
                                                                     column,
                                                                     row,
                                                                     value,
                                                                     useAutofocus,
                                                                     style
                                                                 }) => {
    let control = null;
    let className = '';

    switch (column.type) {
        case DataTablesColumnType.STRING:
            control = <DataTablesStringCell cellValue={value} useAutofocus={useAutofocus} column={column} rowCells={row}/>;
            break;
        case DataTablesColumnType.INT:
            control = <DataTablesIntCell cellValue={value} useAutofocus={useAutofocus} column={column} rowCells={row}/>;
            break;
        case DataTablesColumnType.DECIMAL:
            control = <DataTablesDecimalCell cellValue={value} useAutofocus={useAutofocus} column={column} rowCells={row}/>
            break;
        case DataTablesColumnType.BOOLEAN:
            control = <DataTablesBooleanCell cellValue={value} useAutofocus={useAutofocus} column={column} rowCells={row}/>;
            break;
        case DataTablesColumnType.SELECT:
            control = <DataTablesSelectCell cellValue={value} useAutofocus={useAutofocus}
                                            column={column as IDataTablesSelectColumn} rowCells={row}/>;
            break;
        case DataTablesColumnType.CURRENCY:
            control = <DataTablesCurrencyCell cellValue={value} useAutofocus={useAutofocus} column={column} rowCells={row}/>;
            break;
        case DataTablesColumnType.ACTION:
            control = <DataTablesActionCell rowCells={row}/>;
            break;
        case DataTablesColumnType.DATE:
            control = <DataTablesDateCell cellValue={value} useAutofocus={useAutofocus}
                                          column={column as IDataTablesDateColumn} rowCells={row}/>;
            break;
        case DataTablesColumnType.SELECTION:
            className = 'dt-selection-column';
            control = <DataTablesSelectionCell rowCells={row}/>;
            break;
        case DataTablesColumnType.EXPAND:
            className = 'dt-expand-column';
            control = <DataTablesExpandCell rowCells={row} style={style}/>;
            break;
        case DataTablesColumnType.EMPTY:
        default:
           control = <></>;
    }

    return (
        <TableCell
            className={`${DtUtils.getCellClassNameByColumn(column)} ${className}`}
        >
            {control}
        </TableCell>
    )
}