import {ChangeEvent, FC, useEffect, useState} from "react";
import {DataTablesColumn} from "../../models/IDataTablesColumn";
import {DataTablesColumnType} from "../../models/DataTablesColumnType";
import {TextField} from "@mui/material";
import {IntField} from "../../../fields/IntField";
import {DataTablesFormControl} from "../DataTablesFormControl";

export interface IDataTablesEditFormProps {
    columns: DataTablesColumn [];
    row: object;
}

export const DataTablesEditForm: FC<IDataTablesEditFormProps> = ({
                                                                     columns,
                                                                     row
                                                                 }) => {

    const [formData, setFormData] = useState({...row});

    useEffect(() => {

    }, [formData])

    const getFieldValueByName = (fieldName: string) => {
        return (formData as unknown as any)[fieldName];
    }

    /*const handleStringChange = (event: any) => {
        console.log('string val changed: ', event.target.value);
    }

    const handleIntChange = (e: number) => {
        console.log('int value changed: ', e)
    }*/

    const onChange = (value: any, column: DataTablesColumn) => {

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