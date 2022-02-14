import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {TableCell, TableRow} from "@mui/material";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {DtUtils} from "../../utils/DtUtils";
import {DataTableEmptyTableFilter} from "../dataTablesFilters/DataTableEmptyTableFilter";


export const DataTablesFiltersRow: FC = ({
                                             children
                                         }) => {
    const {state, options} = useDataTablesContext();

    const filters: JSX.Element[] = [];

    if (state.columns.some(x => x.type === DataTablesColumnType.EXPAND)) {
        filters.push(
            <DataTableEmptyTableFilter column={DtUtils.getExpandColumnObject()} className={'dt-expand-column'}/>
        )
    }

    if (state.columns.some(x => x.type === DataTablesColumnType.SELECTION)) {
        filters.push(
            <DataTableEmptyTableFilter column={DtUtils.getSelectionColumnObject()} className={'dt-selection-column'}/>
        )
    }

    options.filters?.map((filterEntity, index) => {
        filters.push(
            <TableCell colSpan={filterEntity.colspan || 1} style={{
                border: 'none'
            }}>
                {filterEntity.filter}
            </TableCell>
        )
    });

    return (
        <TableRow className="dt-filters-row" style={{
            borderBottom: "1px solid rgba(224, 224, 224, 1)"
        }}>
            {filters}
        </TableRow>
    )

}