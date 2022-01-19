import {FC} from "react";
import {Box, Button, TableCell} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";

export const DataTablesActionFilterCell: FC = () => {

    const {actions} = useDataTablesContext();

    return (
        <TableCell className={'dt-filter dt-action-btns-filter-cell'}>
            <div className={'dt-action-btns-filter-container'}>
                <Button size={'small'} variant={'text'}>
                    Filter
                </Button>
                <Box sx={{ mx: 1 }} />
                <Button size={'small'} onClick={actions.clearFilters}>
                    Clear
                </Button>
            </div>
        </TableCell>
    )
}