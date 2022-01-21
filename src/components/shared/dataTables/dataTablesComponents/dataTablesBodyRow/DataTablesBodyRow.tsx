import React, {CSSProperties, FC} from "react";
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

import {DataTablesSelectionCell} from "../dataTablesCell/DataTablesSelectionCell";
import {DataTablesExpandCell} from "../dataTablesCell/DataTablesExpandCell";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";

const TABLE_COLUMNS: any = {
    SELECTION: DataTablesSelectionCell,
    STRING: DataTablesStringCell,
    INT: DataTablesIntCell,
    DECIMAL: DataTablesDecimalCell,
    BOOLEAN: DataTablesBooleanCell,
    SELECT: DataTablesSelectCell,
    CURRENCY: DataTablesCurrencyCell,
    ACTION: DataTablesActionCell,
    DATE: DataTablesDateCell,
    EXPAND: DataTablesExpandCell,
}

export interface IDataTablesBodyRowProps {
    rowCells: any;
    className?: string;
    style?: CSSProperties;
}

export const DataTablesBodyRow:FC<IDataTablesBodyRowProps> = ({rowCells, className, style}) => {
    const context = useDataTablesContext();

    const getPropertiesByColumnType = (type: DataTablesColumnType) => {
        switch (type) {
            case DataTablesColumnType.EXPAND:
                return {
                    className: 'dt-expand-column',
                    style
                };
            case DataTablesColumnType.SELECTION:
                return {
                    className: 'dt-selection-column',
                    style: {}
                };
            default:
                return {
                    className: '',
                    style: {}
                };
        }
    }

    const cells = context.options.columns.map((column, index) => {
        const ColumnComponent = TABLE_COLUMNS[column.type];
        const errorMessage = false;
        const properties = getPropertiesByColumnType(column.type);
        return (
            <TableCell
                key={column.dataSource + '_' + index}
                className={properties.className}
            >
                <ColumnComponent
                    useAutofocus={index === 0}
                    cellValue={_.get(rowCells, column.dataSource)}
                    column={column}
                    rowCells={rowCells}
                    style={properties.style}
                />
            </TableCell>
        )
    });

    return (
        <TableRow
            style={style || {}}
            className={`${className} dt-body-row`}
            data-cy={rowCells[context.options.uniqueKey]}
            entity-data-id={rowCells[context.options.uniqueKey]}
        >
            {cells}
        </TableRow>
    )
}
