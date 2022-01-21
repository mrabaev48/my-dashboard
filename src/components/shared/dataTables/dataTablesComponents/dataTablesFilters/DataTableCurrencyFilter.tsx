import {ChangeEvent, FC, useEffect, useState} from "react";
import {Box, TableCell, TextField} from "@mui/material";
import {IDataTablesFilterProps} from "./models";
import {useFilter} from "../../config/hooks/useFilter";
import {DtUtils} from "../../utils/DtUtils";
import {IDataTablesCurrencyColumn} from "../../models/IDataTablesColumn";

export const DataTableCurrencyFilter: FC<IDataTablesFilterProps> = ({
                                                                        column
                                                                    }) => {
    const currencyColumn = column as IDataTablesCurrencyColumn;

    const [setFilter, filter] = useFilter(null, column);
    const [fromValue, setFromValue] = useState(filter.filterValue?.fromValue || '');
    const [toValue, setToValue] = useState(filter.filterValue?.toValue || '');

    useEffect(() => {
        setFilter({
            fromValue: Number(fromValue),
            toValue: Number(toValue)
        });
    },[fromValue, toValue]);


    const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (DtUtils.isDecimal(event.target.value) || event.target.value === '') {
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
            className={`dt-currency-filter dt-filter ${DtUtils.getCellClassNameByColumn(column)}`}
            data-cy={column.dataSource + '-filter'}
        >
            <div className="flex">
                <TextField
                    onChange={onFilterChange}
                    value={fromValue}
                    placeholder={currencyColumn.filterPlaceholder?.fromPlaceholder ?? 'From'}
                    name={'fromValue'}
                />
                <Box sx={{ mx: 1 }}>  </Box>
                <TextField
                    onChange={onFilterChange}
                    value={toValue}
                    placeholder={currencyColumn.filterPlaceholder?.toPlaceholder ?? 'To'}
                    name={'toValue'}
                />
            </div>
        </TableCell>
    )
}