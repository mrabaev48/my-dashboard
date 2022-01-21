import {FC} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {
    IDataTablesStringCellProps
} from "./models/IDataTablesCellProps";

export const DataTablesStringCell: FC<IDataTablesStringCellProps> = ({
                                                                         rowCells,
                                                                         column,
                                                                         cellValue,
                                                                         className,
                                                                         error,
                                                                         useAutofocus,
                                                                         children,
                                                                     }) => {

    const {options} = useDataTablesContext();
    return (
        <div
            className={`${className} dt-column-body-cell dt-column-string-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            {cellValue}
        </div>
    )
}