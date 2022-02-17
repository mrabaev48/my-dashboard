import React from 'react';
import {FieldsContainer} from "../../components/core/fieldsContainer/FieldsContainer";
import {FIELD_TYPE} from "../../components/core/fields/models";
import {KeyValuePair} from "../../components/shared/dataTables/utils/DtUtils";
import {IField} from "../../components/core/fieldsContainer/models";
import {Permission} from "../../components/core/models/Permission";

export const Orders: React.FC = () => {

    const propses = {
        model: {
            name: 'Oliver',
            surname: 'Sykes',
            age: 30,
            songs: [
                'Written in blood',
                'Pray for plagues',
                'Slow dance',
                'Black & blue'
            ]
        },
        fields: [
            {
                fieldName: 'name',
                fieldType: 'string',
                label: 'Name'
            },
            {
                fieldName: 'surname',
                fieldType: 'string',
                label: 'Surname'
            },
            {
                fieldName: 'age',
                fieldType: 'int',
                label: 'Age'
            },
            {
                fieldName: 'songs',
                fieldType: FIELD_TYPE.SELECT,
                label: 'Songs',
                transform: (options: any[]) => {
                    const mappedOptions = options.map(x =>  {
                        return {
                            key: x,
                            value: x.toLowerCase().trim().replace(/\s+/g, '')
                        } as KeyValuePair<string, string>;
                    });
                    return {
                        options: mappedOptions,
                        value: mappedOptions[0]
                    }
                }
            }
        ] as IField[],
        requiredPermissions: [Permission.Read, Permission.Write],
        userPermissions: [Permission.Read, Permission.Write]
    }

    return (
        <FieldsContainer
            {...propses}
        />
    );
};