import React, {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTablesStringCell} from "../dataTablesCell/DataTablesStringCell";
import {DataTablesIntCell} from "../dataTablesCell/DataTablesIntCell";
import {DataTablesBooleanCell} from "../dataTablesCell/DataTablesBooleanCell";
import {DataTablesCurrencyCell} from "../dataTablesCell/DataTablesCurrencyCell";
import {DataTablesSelectCell} from "../dataTablesCell/DataTablesSelectCell";
import {DataTablesDecimalCell} from "../dataTablesCell/DataTablesDecimalCell";
import {DataTablesActionCell} from "../dataTablesCell/DataTablesActionCell";
import {DataTablesDateCell} from "../dataTablesCell/DataTablesDateCell";
import {TableCell, TableRow} from "@mui/material";

import _ from 'lodash';

const TABLE_COLUMNS: any = {
    STRING: DataTablesStringCell,
    INT: DataTablesIntCell,
    DECIMAL: DataTablesDecimalCell,
    BOOLEAN: DataTablesBooleanCell,
    SELECT: DataTablesSelectCell,
    CURRENCY: DataTablesCurrencyCell,
    ACTION: DataTablesActionCell,
    DATE: DataTablesDateCell,
}

export interface IDataTablesBodyRowProps {
    rowCells: any;
    className?: string;
}

export const DataTablesBodyRow:FC<IDataTablesBodyRowProps> = ({rowCells, className}) => {
    const context = useDataTablesContext();

    const cells = context.options.columns.map((column, index) => {
        const ColumnComponent = TABLE_COLUMNS[column.type];
        const errorMessage = false;

        return (
            <TableCell
                key={column.dataSource + '_' + index}
                className={'dt-body-cell'}
                // style={{textAlign: ColumnTypeSorting[column.type]}}
            >
                <ColumnComponent
                    useAutofocus={index === 0}
                    cellValue={_.get(rowCells, column.dataSource)}
                    column={column}
                    rowCells={rowCells}
                />
            </TableCell>
        )
    });

    return (
        <TableRow
            className={`${className} dt-body-row`}
            // onDoubleClick={this.rowDoubleClick}
            data-cy={rowCells[context.options.uniqueKey]}
            entity-data-id={rowCells[context.options.uniqueKey]}
        >
            {cells}
        </TableRow>
    )
}
