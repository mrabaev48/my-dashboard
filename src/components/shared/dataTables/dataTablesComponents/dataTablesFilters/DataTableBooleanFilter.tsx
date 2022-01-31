import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent, TableCell} from "@mui/material";
import {IDataTablesFilterProps} from "./models";
import {useFilter} from "../../config/hooks/useFilter";
import {DtUtils} from "../../utils/DtUtils";

export const DataTableBooleanFilter: FC<IDataTablesFilterProps> = ({
                                                                       column
                                                                   }) => {
    const selectValues = [
        {
            label: '-',
            value: 'null'
        },
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
    ]
    const [setFilter, filter] = useFilter('null', column);
    const [value, setValue] = useState(filter.filterValue);

    useEffect(() => {
        if (filter.filterValue === 'null') {
            setValue(filter.filterValue);
        }
    }, [filter])

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
            className={`dt-boolean-filter dt-filter ${DtUtils.getCellClassNameByColumn(column)}`}
        >
            {/*<div className={'flex justify-center flex-column '}>*/}
                <Select
                    defaultValue={selectValues[0].value}
                    value={value}
                    onChange={onFilterChange}
                >
                    {items}
                </Select>
            {/*</div>*/}
        </TableCell>
    )
}