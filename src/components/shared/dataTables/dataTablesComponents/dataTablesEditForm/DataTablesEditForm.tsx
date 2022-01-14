import {ChangeEvent, FC, useEffect, useState} from "react";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {TextField} from "@mui/material";
import {IntField} from "../../../fields/IntField";
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
    //todo validation should be here
        console.log('formData changed')
        if (validateRow()) {
            console.log('true')
            actions.setHasError(false);
            actions.editRecord(formData);
        } else {
            console.log('false')
            actions.setHasError(true);
        }
    }, [formData]);

    const validateRow = (): boolean => {

        for (let i = 0; i < columns.length; i++) {
            const { dataSource, required } = columns[i];
            const editedValue = (formData as any)[dataSource];
            if (required === true) {
                if (!editedValue || editedValue === '' || editedValue === null) {
                    console.log('here')
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