import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

export interface IBooleanFieldProps {
    value: boolean | null;
    onChange: (value: boolean | null) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
}

export const BooleanField: FC<IBooleanFieldProps> = ({
                                                         value,
                                                         onChange,
                                                         label,
                                                         required,
                                                         disabled

                                                     }) => {

    const selectValues = [
        {
            label: '-',
            value: 'null'
        },
        {
            label: 'Yes',
            value: 'true'
        },
        {
            label: 'No',
            value: 'false'
        },
    ]

    const [selectValue, setSelectValue] = useState(value);

    const processValue = (event: SelectChangeEvent) => {
        if (event.target.value === 'null') {
            setSelectValue(null);
        } else {
            setSelectValue(Boolean(event.target.value));
        }
    }

    useEffect(() => {
        onChange(selectValue);
    }, [selectValue])

    return (
        <Select
            label={label || ''}
            onChange={processValue}
            required={required || false}
            disabled={disabled || false}
            value={selectValue?.toString() || 'null'}
            defaultValue={selectValues[0].value}
        >
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