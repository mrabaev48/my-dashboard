import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {KeyValuePair} from "../dataTables/utils/DtUtils";

export interface ISelectFieldProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    options: KeyValuePair<string, string> [];
    defaultValue: string;
}

export const SelectField: FC<ISelectFieldProps> = ({
                                                       defaultValue,
                                                       value,
                                                       disabled,
                                                       options,
                                                       required,
                                                       label,
                                                       onChange
                                                   }) => {

    const [selectValue, setSelectValue] = useState(value);

    const processValue = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value);
    }

    useEffect(() => {
        onChange(selectValue);
    }, [selectValue]);

    return (
        <Select
            label={label || ''}
            onChange={processValue}
            required={required || false}
            disabled={disabled || false}
            value={selectValue}
            defaultValue={defaultValue}
        >
            <MenuItem value={'null'}>{'-'}</MenuItem>
            {options.map((pair, index) => {
                return (
                    <MenuItem
                        value={pair.value}
                        key={index}
                    >
                        {pair.key}
                    </MenuItem>
                )
            })}
        </Select>
    )
}