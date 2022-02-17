import {FC, useEffect, useState} from "react";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {KeyValuePair} from "../../shared/dataTables/utils/DtUtils";
import {DEFAULT_SELECT_OPTION} from "../../../utils/DefaultValues";

export interface ISelectFieldProps {
    value?: string;
    onChange: (value: string) => void;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    options: KeyValuePair<string, string> [];
    defaultValue?: KeyValuePair<string, string>;
    fullWidth?: boolean;
    readOnly?: boolean;
}

export const SelectField: FC<ISelectFieldProps> = ({
                                                       defaultValue,
                                                       value,
                                                       disabled,
                                                       options,
                                                       required,
                                                       label,
                                                       onChange,
                                                       fullWidth,
                                                       readOnly
                                                   }) => {

    const [selectValue, setSelectValue] = useState(value);

    const processValue = (event: SelectChangeEvent) => {
        setSelectValue(event.target.value);
    }

    useEffect(() => {
        onChange(selectValue || 'null');
    }, [selectValue]);

    let defaultOption = DEFAULT_SELECT_OPTION;

    if (defaultValue) {
        defaultOption = defaultValue;
    }

    return (
        <Select
            label={label || ''}
            onChange={processValue}
            required={required || false}
            disabled={disabled || false}
            fullWidth={fullWidth || true}
            value={selectValue || defaultOption.value}
            defaultValue={defaultOption.value}
            className={`field-control select-field`}
            readOnly={readOnly}
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