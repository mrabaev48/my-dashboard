import {FC} from "react";
import {Box, Button, TableCell} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DtUtils} from "../../utils/DtUtils";
import {IDataTablesFilterProps} from "./models";

export const DataTablesActionFilterCell:FC<IDataTablesFilterProps> = ({column, className}) => {

    const {actions} = useDataTablesContext();

    return (
        <TableCell className={`dt-filter dt-action-btns-filter-cell ${DtUtils.getCellClassNameByColumn(column)}`}>
            <div className={'dt-action-btns-filter-fieldsContainer flex'}>
                <Button size={'small'} variant={'text'} onClick={actions.applyFilters}>
                    Apply
                </Button>
                <Box sx={{ mx: 1 }} />
                <Button size={'small'} onClick={actions.clearFilters}>
                    Clear
                </Button>
            </div>
        </TableCell>
    )
}