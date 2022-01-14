import {FC} from "react";
import {DataTablesColumnType} from "../models/DataTablesColumnType";
import {TextField} from "@mui/material";
import {IntField} from "../../fields/IntField";
import {DataTablesColumn, IDataTablesDateColumn} from "../models/IDataTablesColumn";
import {DecimalField} from "../../fields/DecimalField";
import {useDataTablesContext} from "../config/hooks/useDataTablesContext";
import {DateField} from "../../fields/DateField";
import {DtUtils} from "../utils/DtUtils";
import {BooleanField} from "../../fields/BooleanField";
import {SelectField} from "../../fields/SelectField";

export interface IDataTablesFormControlProps {
    column: DataTablesColumn;
    value: any;
    onChange: (value: any, column: DataTablesColumn) => void;

}

export const DataTablesFormControl: FC<IDataTablesFormControlProps> = ({column, value, onChange}) => {
    let control = null;

    const context = useDataTablesContext();

    const defaultProps = {
        disabled: column.editable === false,
        placeholder: column.label,
        label: column.label,
        value,
        onChange
    }

    switch (column.type) {
        case DataTablesColumnType.STRING:
            control =
                <TextField
                    {...defaultProps}
                    onChange={e => onChange(e.target.value, column)}
                />

            break;
        case DataTablesColumnType.INT:
            control =
                <IntField
                    {...defaultProps}
                    onChange={(e) => onChange(e as number, column)}
                />
            break;
        case DataTablesColumnType.CURRENCY:
        case DataTablesColumnType.DECIMAL:
            control = <DecimalField {...defaultProps} onChange={e => onChange(e as number, column)}/>
            break;
        case DataTablesColumnType.DATE:

            control =
                <DateField
                    label={column.label}
                    disabled={column.editable === false}
                    value={value}
                    onChange={e => onChange(e, column)}
                    dateFormat={DtUtils.getDateFormat(column as IDataTablesDateColumn, context)}
                />
            break;
        case DataTablesColumnType.BOOLEAN:
            control =
                <BooleanField
                    {...defaultProps}
                    onChange={e => onChange(e, column)}
                />
            break;
        case DataTablesColumnType.SELECT:
            control =
                <SelectField
                    {...defaultProps}
                    onChange={e => onChange(e, column)}
                    defaultValue={'null'}
                    options={context.actions.getSelectColumnData(column.dataSource)}
                />
            break;
        default:
            console.log('Unknown control type: ', column.type);
            break;
    }

    return (
        <div className={'dt-edit-form-control'}>
            {control}
        </div>
    )
}