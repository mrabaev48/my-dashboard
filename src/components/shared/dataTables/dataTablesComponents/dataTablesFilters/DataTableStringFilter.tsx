import {TableCell, TextField} from "@mui/material";
import {ChangeEvent, FC, useEffect, useState} from "react";
import {IDataTablesFilterProps} from "./models";
import {useFilter} from "../../config/hooks/useFilter";
import {IDataTablesStringColumn} from "../../models/IDataTablesColumn";
import {DtUtils} from "../../utils/DtUtils";

export const DataTableStringFilter:FC<IDataTablesFilterProps> = ({
    column
                                         }) => {

    const stringColumn = column as IDataTablesStringColumn;

    const [setFilter] = useFilter('', stringColumn);
    const [value, setValue] = useState('');

    useEffect(() => {
        setFilter(value);
    }, [value]);

    const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-string-filter dt-filter ${DtUtils.getCellClassNameByColumn(column)}`}
        >
            <TextField
                onChange={onFilterChange}
                value={value}
                placeholder={stringColumn.filterPlaceholder ?? 'Search'}
            />
        </TableCell>
    )
}