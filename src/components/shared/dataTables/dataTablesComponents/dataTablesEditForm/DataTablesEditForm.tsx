import {FC, useEffect, useState} from "react";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {DataTablesFormControl} from "./DataTablesFormControl";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";

export interface IDataTablesEditFormProps {
    columns: DataTablesColumn [];
    row: object;
}

export const DataTablesEditForm: FC<IDataTablesEditFormProps> = ({
                                                                     columns,
                                                                     row
                                                                 }) => {

    const [formData, setFormData] = useState({...row});

    const {actions} = useDataTablesContext();

    useEffect(() => {
        if (validateRow()) {
            actions.setHasError(false);
            actions.editRecord(formData);
        } else {
            actions.setHasError(true);
        }
    }, [formData]);

    const validateRow = (): boolean => {

        for (let i = 0; i < columns.length; i++) {
            const { dataSource, required } = columns[i];
            const editedValue = (formData as any)[dataSource];
            if (required === true) {
                if (!editedValue || editedValue === '' || editedValue === null) {
                    return false;
                }
            }
        }

        return true;
    }

    const getFieldValueByName = (fieldName: string) => {
        return (formData as unknown as any)[fieldName];
    }

    const onChange = (value: any, column: DataTablesColumn) => {
        const record = {...formData} as any;
        record[column.dataSource] = value;
        setFormData(record);
    }

    const content = columns.map((column, index) => {
        return (
            <DataTablesFormControl
                column={column}
                value={getFieldValueByName(column.dataSource)}
                onChange={onChange}
            />
        )
    });

    return (
        <>
            {content}
        </>
    )
}