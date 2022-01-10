import {FC, useState} from "react";
import {MenuItem, Select, SelectChangeEvent, TableCell} from "@mui/material";
import {IDataTablesFilterProps} from "./models";
import {useFilter} from "../../config/hooks/useFilter";

export const DataTableBooleanFilter: FC<IDataTablesFilterProps> = ({
                                                                       column
                                                                   }) => {
    const selectValues = [
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
        {
            label: '-',
            value: 'null'
        }
    ]
    const [setFilter, filter] = useFilter('null', column);
    const [value, setValue] = useState(filter.filterValue);

    const onFilterChange = (event: SelectChangeEvent) => {
        if (event.target.value === 'null') {
            setFilter(null)
        } else {
            setFilter(Boolean(JSON.parse(event.target.value)));
        }
        setValue(event.target.value);
    }

    const items = selectValues.map((item, index) => {
        return (
            <MenuItem
                value={item.value}
                key={index}
            >
                {item.label}
            </MenuItem>
        )
    })

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-boolean-filter dt-filter`}
        >
            <Select
                value={value}
                onChange={onFilterChange}
            >
                {items}
            </Select>
        </TableCell>
    )
}