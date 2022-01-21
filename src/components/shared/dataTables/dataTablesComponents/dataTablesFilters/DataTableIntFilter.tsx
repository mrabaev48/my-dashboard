import {ChangeEvent, FC, useEffect, useState} from "react";
import {IDataTablesFilterProps} from "./models";
import {Box, TableCell, TextField} from "@mui/material";
import {useFilter} from "../../config/hooks/useFilter";
import {DtUtils} from "../../utils/DtUtils";
import {IDataTablesIntColumn} from "../../models/IDataTablesColumn";

export const DataTableIntFilter:FC<IDataTablesFilterProps> = ({
    column
                                                              }) => {
    const intColumn = column as IDataTablesIntColumn;

    const [setFilter, filter] = useFilter(0, column);
    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    useEffect(() => {
        setFilter({
            fromValue: Number(fromValue),
            toValue: Number(toValue)
        });

    }, [fromValue, toValue]);

    const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (DtUtils.isInteger(event.target.value) || event.target.value === '') {
            switch (event.target.name) {
                case 'fromValue':
                    setFromValue(event.target.value);
                    break;
                case 'toValue':
                    setToValue(event.target.value);
                    break;
            }
        }
    }

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-int-filter dt-filter ${DtUtils.getCellClassNameByColumn(column)}`}
        >
           <div className="flex">
               <TextField
                   onChange={onFilterChange}
                   value={fromValue}
                   name={'fromValue'}
                   placeholder={intColumn.filterPlaceholder?.fromPlaceholder ?? 'From'}
                   color="primary"
               />
               <Box sx={{ mx: 1 }}>  </Box>
               <TextField
                   onChange={onFilterChange}
                   value={toValue}
                   name={'toValue'}
                   placeholder={intColumn.filterPlaceholder?.toPlaceholder ?? 'To'}
                   color="primary"
               />
           </div>
        </TableCell>
    )
}