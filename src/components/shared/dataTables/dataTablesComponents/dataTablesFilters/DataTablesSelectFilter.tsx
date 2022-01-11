import {FC, useEffect, useState} from "react";
import {IDataTablesFilterProps} from "./models";
import {MenuItem, Select, SelectChangeEvent, TableCell} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {List} from "linqscript";
import {useFilter} from "../../config/hooks/useFilter";

export const DataTablesSelectFilter: FC<IDataTablesFilterProps> = ({
                                                                       column
                                                                   }) => {
    const {actions} = useDataTablesContext();

    let selectData = actions.getSelectColumnData(column.dataSource);
    selectData = [{key: 'null', value: '-'}, ...selectData] as List<any>;

    const [setFilter, filter] = useFilter('null', column);
    const [value, setValue] = useState<string>(filter.filterValue);

    useEffect(() => {
        if (filter.filterValue === 'null') {
            setValue(filter.filterValue);
        }
    }, [filter]);

    const onFilterChange = (event: SelectChangeEvent) => {
        if (event.target.value === 'null') {
            setFilter(null);
        } else {
            setFilter(event.target.value);
        }

        setValue(event.target.value);
    }

    const items = selectData.map((item, index) => {
        return (
            <MenuItem
                key={index}
                value={item.key}
            >
                {item.value}
            </MenuItem>
        );
    });

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-select-filter dt-filter`}
        >
            <Select
                defaultValue={selectData[0].value}
                onChange={onFilterChange}
                value={value}
            >
                {items}
            </Select>
        </TableCell>
    )
}