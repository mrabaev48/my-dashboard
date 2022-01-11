import {TableCell, TextField} from "@mui/material";
import {ChangeEvent, FC, useEffect, useState} from "react";
import {IDataTablesFilterProps} from "./models";
import {useFilter} from "../../config/hooks/useFilter";
import {IDataTablesStringColumn} from "../../models/IDataTablesColumn";

export const DataTableStringFilter:FC<IDataTablesFilterProps> = ({
    column
                                         }) => {

    const stringColumn = column as IDataTablesStringColumn;

    const [setFilter, filter] = useFilter('', stringColumn);
    const [value, setValue] = useState(filter.filterValue);

    useEffect(() => {
        setValue(filter.filterValue);
    }, [filter]);

    const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setFilter(event.target.value);
    }

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-string-filter dt-filter`}
        >
            <TextField
                onChange={onFilterChange}
                value={value}
                placeholder={stringColumn.filterPlaceholder ?? 'Search'}
            />
        </TableCell>
    )
}