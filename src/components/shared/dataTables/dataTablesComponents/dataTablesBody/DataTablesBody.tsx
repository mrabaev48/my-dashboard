import React, {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DataTablesBodyRow} from "../dataTablesBodyRow/DataTablesBodyRow";
import {TableBody, TableCell, TableRow, Typography} from "@mui/material";
import _ from "lodash";

export const DataTablesBody: FC = (props) => {
    const context = useDataTablesContext();

    const _expandedRows: any[] = [];


    const loadDataWithExpandedControls = (data: any, expandLevel: number = 0) => {
        if (data) {
            return data.map((row: any, index: number) => {
                let expandedData = null;

                if (context.actions.isTableRowExpanded(row[context.options.uniqueKey]) && context.options.renderExpandedDataControl) {
                    expandedData = context.options.renderExpandedDataControl(row);
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
                        {expandedData &&
                            <TableRow>
                                <TableCell colSpan={context.options.columns.length}>
                                    {expandedData}
                                </TableCell>
                            </TableRow>
                        }
                    </React.Fragment>
                )
            });
        }
        return null;
    }

    const rows = loadDataWithExpandedControls(context.state.data) || [];
    context.actions.collectExpandedRows(_expandedRows);

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
        <TableBody data-cy={'datatables-tableBody_' + context.options.uniqueKey}
                   className={`${context.options.dtBodyClassName} dt-body`}>
            {rows}
        </TableBody>
    )
}