import {FC, useEffect, useState} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesSelectCellProps} from "./models/IDataTablesCellProps";
import {IDataTablesSelectColumn} from "../../models/IDataTablesColumn";
import {KeyValuePair} from "../../../../../utils/dtHelper";


export const DataTablesSelectCell: FC<IDataTablesSelectCellProps> = ({
                                                                         rowCells,
                                                                         column,
                                                                         cellValue,
                                                                         useAutofocus,
                                                                         error,
                                                                         className,
                                                                         children,
                                                                     }) => {
    const {options} = useDataTablesContext();
    const [selectData, setSelectData] = useState<KeyValuePair<string, string>[]>([]);

    useEffect(() => {
        const loadSelectData = async () => {
            const data = await (column as IDataTablesSelectColumn).loadSelectDataSource();
            setSelectData(data);
        }

        loadSelectData();
    }, [selectData])

    const displayValue = selectData.find(search => search.key === cellValue)?.value || '';

    return (
        <div
            className={`${className} dt-column-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
            // onClick={this.onClick}
        >
            {displayValue}
        </div>
    )
}