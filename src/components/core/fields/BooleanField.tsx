import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {DEFAULT_SELECT_OPTION} from "../../../utils/DefaultValues";

export interface IBooleanFieldProps {
    value: boolean | null;
    onChange: (value: boolean | null) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    readOnly?: boolean;
}

export const BooleanField: FC<IBooleanFieldProps> = ({
                                                         value,
                                                         onChange,
                                                         label,
                                                         required,
                                                         disabled,
                                                         fullWidth,
                                                         readOnly
                                                     }) => {

    const selectValues = [
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
    ]

    const [selectValue, setSelectValue] = useState(DEFAULT_SELECT_OPTION.value);

    useEffect(() => {
        let val = '';

        if (value === null) {
            val = 'null'
        } else {
            val = value.toString();
        }
        setSelectValue(val);
    }, [])

    const processValue = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value);
    }

    useEffect(() => {
        let castedValue = null;
        if (selectValue) {
            castedValue = Boolean(selectValue);
        }

        onChange(castedValue);

    }, [selectValue])

    return (
        <Select
            label={label || ''}
            onChange={processValue}
            required={required || false}
            disabled={disabled || false}
            value={selectValue}
            fullWidth={fullWidth || true}
            defaultValue={DEFAULT_SELECT_OPTION.value}
            className={`field-control boolean-field`}
            readOnly={readOnly || false}
        >
            <MenuItem disabled={required === true} defaultValue={DEFAULT_SELECT_OPTION.value}
                      value={DEFAULT_SELECT_OPTION.value}>{DEFAULT_SELECT_OPTION.key}</MenuItem>
            {selectValues.map(e => {
                return (
                    <MenuItem
                        value={e.value}
                        key={e.value}
                    >
                        {e.label}
                    </MenuItem>
                )
            })}
        </Select>
    )
}