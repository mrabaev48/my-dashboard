import {FC, useEffect, useState} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import {DtUtils} from "../dataTables/utils/DtUtils";
import {WithNumberOnChange} from "./models";

export const DecimalField:FC<TextFieldProps & WithNumberOnChange> = (props) => {
    const [value, setValue] = useState(props.value as string);

    const processValue = (event: any) => {
        if (DtUtils.isDecimal(event.target.value) || event.target.value === '') {
            setValue(event.target.value);
        }
    }

    useEffect(() => {
        props.onChange(Number(value));
    }, [value]);

    const onBlur = (event: any) => {
        if (value.endsWith('.')) {
            setValue(value + '00')
        }

        if (DtUtils.isInteger(value[value.length - 1])) {
            setValue(value + '.00')
        }
    }

    return (
        <TextField
            {...props}
            value={value}
            onChange={processValue}
            onBlur={onBlur}
        />
    )
}