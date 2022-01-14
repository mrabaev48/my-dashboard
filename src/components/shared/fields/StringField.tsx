import {ChangeEvent, FC, useEffect, useState} from "react";
import {TextField, TextFieldProps} from "@mui/material";
import {WithStringOnChange} from "./models";

export const StringField:FC<TextFieldProps & WithStringOnChange> = (props) => {

    const [val, setVal] = useState(props.value as string || '');

    const processValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setVal(event.target.value);
    }

    useEffect(() => {
        props.onChange(val);
    }, [val])

    return (
        <TextField
            {...props}
            value={val}
            onChange={processValue}
        />
    )
}