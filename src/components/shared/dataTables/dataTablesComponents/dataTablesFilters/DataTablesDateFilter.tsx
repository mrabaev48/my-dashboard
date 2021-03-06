import {FC, useEffect, useState} from "react";
import {Box, TableCell, TextField} from "@mui/material";
import {IDataTablesFilterProps} from "./models";
import {
    DateTimePicker,
    DesktopDatePicker,
    LocalizationProvider,
} from "@mui/lab";
import {useFilter} from "../../config/hooks/useFilter";
import DateAdapter from '@mui/lab/AdapterDateFns';
import {IDataTablesDateColumn} from "../../models/IDataTablesColumn";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DtUtils} from "../../utils/DtUtils";

export const DataTablesDateFilter: FC<IDataTablesFilterProps> = ({
                                                                     column
                                                                 }) => {
    const [setFilter, filter] = useFilter(null, column);
    const castedColumn = column as IDataTablesDateColumn;
    const context = useDataTablesContext();

    const [fromValue, setFromValue] = useState(filter.filterValue?.fromValue || null);
    const [toValue, setToValue] = useState(filter.filterValue?.toValue || null);

    useEffect(() => {
        setFilter({
            fromValue,
            toValue
        });
    }, [fromValue, toValue]);

    const handleFilterChange = (fieldName: string, value: Date | null) => {
         switch (fieldName) {
            case 'fromValue':
                setFromValue(value);
                break;
            case 'toValue':
                setToValue(value);
                break;
        }
    }

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-date-filter dt-filter ${DtUtils.getCellClassNameByColumn(column)}`}
        >
            <LocalizationProvider dateAdapter={DateAdapter}>
                {
                    castedColumn.useTime === true ?
                        <div className={'dt-range-filter-fieldsContainer flex'}>
                            <DateTimePicker
                                value={fromValue}
                                onChange={(newValue) => {
                                    handleFilterChange('fromValue', newValue);
                                }}
                                inputFormat={DtUtils.getDateFormat(castedColumn, context)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <Box sx={{ mx: 1 }}>  </Box>
                            <DateTimePicker
                                value={toValue}
                                onChange={(newValue) => {
                                    handleFilterChange('toValue', newValue);
                                }}
                                inputFormat={DtUtils.getDateFormat(castedColumn, context)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div> :
                        <div className={'dt-range-filter-fieldsContainer flex'}>
                            <DesktopDatePicker
                                value={fromValue}
                                inputFormat={DtUtils.getDateFormat(castedColumn, context)}
                                onChange={(newValue) => {
                                    handleFilterChange('fromValue', newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <Box sx={{ mx: 1 }}>  </Box>
                            <DesktopDatePicker
                                value={toValue}
                                inputFormat={DtUtils.getDateFormat(castedColumn, context)}
                                onChange={(newValue) => {
                                    handleFilterChange('toValue', newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                }
            </LocalizationProvider>
        </TableCell>
    )
}