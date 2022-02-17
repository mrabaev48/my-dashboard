import {FC, useEffect, useState} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import {DtUtils} from "../../shared/dataTables/utils/DtUtils";
import {WithNumberOnChange} from "./models";


export const IntField:FC<TextFieldProps & WithNumberOnChange> = (props) => {
    const [value, setValue] = useState(props.value);

    const processValue = (event: any) => {
        if (DtUtils.isInteger(event.target.value) || event.target.value === '') {
            setValue(event.target.value);
        }
    }

    useEffect(() => {
        props.onChange(Number(value));
    }, [value])

    return (
        <TextField
            {...props}
            value={value}
            onChange={processValue}
            fullWidth={props.fullWidth || true}
            className={`field-control int-field`}
        />
    )
}