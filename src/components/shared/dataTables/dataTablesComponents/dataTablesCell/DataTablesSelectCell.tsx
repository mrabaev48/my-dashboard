import {FC, useEffect, useState} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {IDataTablesSelectCellProps} from "./models/IDataTablesCellProps";
import {List} from "linqscript";
import {KeyValuePair} from "../../utils/DtUtils";


export const DataTablesSelectCell: FC<IDataTablesSelectCellProps> = ({
                                                                         rowCells,
                                                                         column,
                                                                         cellValue,
                                                                         useAutofocus,
                                                                         error,
                                                                         className,
                                                                         children,
                                                                     }) => {
    const {options, actions} = useDataTablesContext();
    const [selectData, setSelectData] = useState<KeyValuePair<string, string>[]>([]);

    useEffect(() => {
        const loadSelectData = async () => {
            let data = undefined;

            if (!actions.isSelectDataExist(column.dataSource)) {
                data = await column.loadSelectDataSource() as List<KeyValuePair<string, string>>;
                actions.setSelectColumnData({
                    key: column.dataSource,
                    value: data
                });
            } else {
                data = actions.getSelectColumnData(column.dataSource);
            }

            setSelectData(data);
        }

        loadSelectData();
    }, [])

    let displayValue = selectData.find(search => search.key === cellValue)?.value || '';

    if (column.transform) {
        displayValue = column.transform(displayValue);
    }

    return (
        <div
            className={`${className} dt-column-body-cell dt-column-select-body-cell`}
            data-cy={rowCells[options.uniqueKey] + '_' + column.dataSource}
        >
            {displayValue}
        </div>
    )
}