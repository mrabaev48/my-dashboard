import React, {FC} from 'react';
import {IField} from "../fieldsContainer/models";
import { FIELD_TYPE } from './models';
import {BooleanField} from "./BooleanField";
import {DateField} from "./DateField";
import {DecimalField} from "./DecimalField";
import {IntField} from "./IntField";
import {SelectField} from "./SelectField";
import {StringField} from "./StringField";

export interface IFieldControlProps {
    field: IField;
    model: any;
    fullWidth?: boolean;
}

export const FieldControl:FC<IFieldControlProps> = ({ field , model}) => {

    let fieldValue = model[field.fieldName];

    if (field.transform) {
        fieldValue = field.transform(fieldValue);
    }

    switch (field.fieldType) {
        case FIELD_TYPE.BOOLEAN:
            return (
                <BooleanField label={field.label || ''} value={fieldValue} onChange={value => value}/>
            )
        case FIELD_TYPE.DATE:
            return (
                <DateField label={field.label || ''} value={fieldValue} onChange={value => value}/>
            )
        case FIELD_TYPE.DECIMAL:
            return (
                <DecimalField label={field.label || ''} value={fieldValue} onChange={value => value}/>
            )
        case FIELD_TYPE.INT:
            return (
                <IntField label={field.label || ''} value={fieldValue} onChange={value => value}/>
            )
        case FIELD_TYPE.SELECT:
            const {options, value: selectedOption} = fieldValue;
            return (
                <SelectField label={field.label || ''} value={selectedOption.value} options={options} onChange={value => value}/>
            )
        case FIELD_TYPE.STRING:
        default:
            return (
                <StringField label={field.label || ''} value={fieldValue} onChange={value => value}/>
            )

    }
};