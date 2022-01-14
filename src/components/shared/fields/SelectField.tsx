import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {KeyValuePair} from "../dataTables/utils/DtUtils";
import {DEFAULT_SELECT_OPTION} from "../../../utils/DefaultValues";

export interface ISelectFieldProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    options: KeyValuePair<string, string> [];
    defaultValue?: KeyValuePair<string, string>;
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

    let defaultOption = DEFAULT_SELECT_OPTION;

    if (defaultValue) {
        defaultOption = defaultValue;
    }

    return (
        <Select
            label={'test'}
            onChange={processValue}
            required={required || false}
            disabled={disabled || false}
            value={selectValue}
            defaultValue={defaultOption.value}
            className={`field-control select-field`}
        >
            <MenuItem value={defaultOption.value}>{defaultOption.key}</MenuItem>
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