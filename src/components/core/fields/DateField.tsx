import {FC, useEffect, useState} from "react";
import {TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";

export interface IDateFieldProps {
    value: Date | null;
    onChange: (value: Date | null) => void;
    dateFormat?: string;
    disabled?: boolean;
    label?: string
    fullWidth?: boolean;
    readOnly?: boolean;
}

export const DateField: FC<IDateFieldProps> = ({
                                                   value,
                                                   onChange,
                                                   dateFormat,
                                                   disabled,
                                                   label,
                                                   fullWidth,
                                                   readOnly
                                               }) => {
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        onChange(currentValue);
    }, [currentValue])

    const processValue = (val: Date | null) => {
        setCurrentValue(val);
    }

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
                readOnly={readOnly}
                label={label || ''}
                value={currentValue}
                onChange={processValue}
                inputFormat={dateFormat}
                disabled={disabled || false}
                className={`field-control date-field`}
                renderInput={(params) => <TextField {...params} fullWidth={fullWidth}/>}
            />
        </LocalizationProvider>
    )
}
