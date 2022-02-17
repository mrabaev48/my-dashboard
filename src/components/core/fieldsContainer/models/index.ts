import {FIELD_TYPE} from "../../fields/models";

export interface IField {
    fieldName: string;
    fieldType: FIELD_TYPE;
    label?: string;
    transform?: (it: any) => any;
}