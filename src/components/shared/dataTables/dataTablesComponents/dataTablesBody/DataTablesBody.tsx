import React, {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTablesBodyRow} from "../dataTablesBodyRow/DataTablesBodyRow";
import {TableBody, TableCell, TableRow, Typography} from "@mui/material";
import _ from "lodash";

export const DataTablesBody:FC = (props) => {
    const context = useDataTablesContext();

    const _expandedRows: JSX.Element[] = [];

    const getExpandDataSource = (rowData: any) => {
        switch (typeof context.options.expandDataSource) {
            case "string":
                console.log('string');
                return rowData[context.options.expandDataSource];
            case "function":
                console.log('function')
                return context.options.expandDataSource(rowData);
            default:
                console.log('default')
                return null;
        }
    }

    const loadRows = (data: any, expandLevel: number = 0) => {
        if (data) {
            return data.map((row: any, index: number) => {
                let rows = [];

                if (context.actions.isTableRowExpanded(row[context.options.uniqueKey])) {
                    let expandData = getExpandDataSource(row);

                    expandData.forEach( (obj: any )=> {
                        if (_.includes(_expandedRows, obj[context.options.uniqueKey])) {
                            _expandedRows.push(obj[context.options.uniqueKey]);
                        }
                    });

                    rows = loadRows(expandData, expandLevel + 1);
                }

                return (
                    <React.Fragment key={`${index}_${row[context.options.uniqueKey]}`}>
                        <DataTablesBodyRow
                            className={expandLevel === 0 ? 'dt-table-row' : 'dt-expanded-sub-row'}
                            style={{
                                marginLeft: (expandLevel * 13) + 'px',
                            }}
                            key={index + '_' + row[context.options.uniqueKey]}
                            rowCells={row}
                            data-cy={'table-row_' + context.options.uniqueKey}
                        />
                        {rows}
                    </React.Fragment>
                )
            });
        }
        return null;
    }

    const rows = loadRows(context.state.data, 0) || [];

    if (rows.length === 0) {
        return (
            <TableBody data-cy={''}>
                <TableRow>
                    <TableCell colSpan={context.options.columns.length}>
                        <Typography>
                            No data
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableBody>
        )
    }

    return (
        <TableBody data-cy={'datatables-tableBody_' + context.options.uniqueKey} className={`${context.options.dtBodyClassName} dt-body`}>
            {/*{tableRows}*/}
            {rows}
        </TableBody>
    )
}