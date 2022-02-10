import {FC} from "react";
import {IDataTablesActionCellProps} from "./models/IDataTablesCellProps";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {Box} from "@mui/material";

export const DataTablesActionCell: FC<IDataTablesActionCellProps> = ({className, rowCells}) => {

    const context = useDataTablesContext();
    const elements: JSX.Element[] = [];

    if (context.options.renderCustomActionsControls) {
        let customActions = context.options.renderCustomActionsControls(rowCells) || [];
        customActions = customActions.map((CustomElement, index) => {
            return (
                <>
                    {CustomElement}
                    {customActions.length > 1 && index !== customActions.length - 1 &&  <Box sx={{mx: 1}} key={'action-btns-delimiter'}/>}
                </>
            )
        });
        elements.push(...customActions);
    }

    return (
        <div className={`${className || ''} dt-column-body-action-cell dt-column-body-cell`}>
            {elements}
        </div>
    )
}