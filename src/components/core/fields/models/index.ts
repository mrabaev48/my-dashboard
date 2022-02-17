export interface WithNumberOnChange {
    onChange(value: number): void;
}

export interface WithStringOnChange {
    onChange(value: string): void;
}

export enum FIELD_TYPE {
    BOOLEAN = 'boolean',
    DATE = 'date',
    DECIMAL = 'decimal',
    INT = 'int',
    SELECT = 'select',
    STRING = 'string'
}