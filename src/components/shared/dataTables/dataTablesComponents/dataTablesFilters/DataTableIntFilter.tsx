import {ChangeEvent, FC} from "react";
import {IDataTablesFilterProps} from "./models";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableCell, TextField} from "@mui/material";

export const DataTableIntFilter:FC<IDataTablesFilterProps> = ({
    column
                                                              }) => {
    const onFilterChange = (event: ChangeEvent) => {
        console.log('event: ', event)
    }

    const { actions } = useDataTablesContext();

    return (
        <TableCell
            data-cy={column.dataSource + '-filter'}
            className={`dt-string-filter`}
        >
            <TextField
                onChange={onFilterChange}
                value={actions.getFilterValue('', column)}
                // placeholder={this.props.t('dataTables.tableHead.filterTextPlaceholder')}
                color="primary"
            />
        </TableCell>
    )
}