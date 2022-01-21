import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesExpandCellProps} from "./models/IDataTablesCellProps";
import {DtUtils} from "../../utils/DtUtils";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const DataTablesExpandCell: FC<IDataTablesExpandCellProps> = ({
                                                                         rowCells,
                                                                         className,
                                                                         style
                                                                     }) => {

    const context = useDataTablesContext();

    const handleExpandTableRowClick = (event: any, uniqueKey: any) => {
        if (!context.actions.isTableRowExpanded(uniqueKey)) {
            context.actions.expandTableRow(uniqueKey);
        }
    }

    const handleCollapseTableRowClick = (event: any, uniqueKey: any) => {
        context.actions.collapseTableRow(uniqueKey);
    }

    const renderCollapseTableRowBtn = () => {
        return (
            <div
                style={style}
                key={'collapseTableRowActionKeyContainer'}
            >
                <div
                    className={'dt-collapse-table-row-btn'}
                    key={'expandButton'}
                    onClick={(e) => handleCollapseTableRowClick(e, rowCells[context.options.uniqueKey])}
                >
                    <div className={'dt-expand-table-row-icon-container'}>
                        <ExpandLessIcon
                            color={"primary"}
                            className={'dt-collapse-table-row-icon'}
                        />
                        &nbsp;
                    </div>
                </div>
            </div>
        )
    }

    const renderExpandTableRowBtn = () => {
        return (
            <div
                style={style}
                key={'expandTableRowActionKeyContainer'}
            >
                <div
                    className={'dt-expand-table-row-btn'}
                    key={'expandButton'}
                    onClick={(e) => handleExpandTableRowClick(e, rowCells[context.options.uniqueKey])}
                >
                    <div className={'dt-expand-table-row-icon-container'}>
                        <ExpandMoreIcon
                            color={"primary"}
                            className={'dt-expand-table-row-icon'}
                        />
                        &nbsp;
                    </div>
                </div>
            </div>
        )
    }

    const getExpandCollapseButton = () => {
        let expandCollapseTableRowBtn = null;

        if (context.options.useExpand) {
            expandCollapseTableRowBtn = (
                <div
                    style={{
                        ...style,
                    }}
                    className={`${className || ''} dt-column-body-cell dt-column-expand-body-cell dt-no-expand`}
                >
                </div>
            )
        }

        if (DtUtils.hasTableRowExpand(context.options, rowCells)) {
            expandCollapseTableRowBtn = renderExpandTableRowBtn();

            if (context.actions.isTableRowExpanded(rowCells[context.options.uniqueKey])) {
                expandCollapseTableRowBtn = renderCollapseTableRowBtn();
            }
        }

        return expandCollapseTableRowBtn;
    }


    const control = getExpandCollapseButton();

    return (
        <>
            {control}
        </>
    )
}