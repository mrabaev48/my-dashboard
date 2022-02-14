import React, {CSSProperties, FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableRow} from "@mui/material";

import _ from 'lodash';

import {DataTablesBodyCell} from "../dataTablesCell/DataTablesBodyCell";


export interface IDataTablesBodyRowProps {
    rowCells: any;
    className?: string;
    style?: CSSProperties;
}

export const DataTablesBodyRow: FC<IDataTablesBodyRowProps> = ({rowCells, className, style}) => {
    const context = useDataTablesContext();

    const cells = context.state.columns.map((column, index) => {

        return (
            <DataTablesBodyCell
                key={column.dataSource + '_' + index}
                column={column}
                row={rowCells}
                value={_.get(rowCells, column.dataSource)}
                useAutofocus={index === 0}
                style={style}
            />
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
