import {ChangeEvent, FC, useEffect, useState} from "react";
import {IDataTablesHeadCellProps} from "./models";
import {Checkbox, TableCell} from "@mui/material";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {DtUtils} from "../../utils/DtUtils";

export const DataTablesSelectionHeadCell: FC<IDataTablesHeadCellProps> = ({
                                                                              column
                                                                          }) => {
    const [isAllSelected, setIsAllSelected] = useState(false);
    const {actions} = useDataTablesContext();

    useEffect(() => {
        if (isAllSelected) {
            actions.selectAllRows();
        } else {
            actions.unselectAllRows();
        }
    }, [isAllSelected]);

    const onSelectAllChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setIsAllSelected(!isAllSelected);
    }

    return (
        <TableCell
            role={'gridcell'}
            className={`dt-head-cell dt-selection-column-head ${DtUtils.getCellClassNameByColumn(column)}`}
            sortDirection={false}
        >
            <Checkbox
                checked={isAllSelected}
                onChange={onSelectAllChanged}
            />
        </TableCell>
    )
}