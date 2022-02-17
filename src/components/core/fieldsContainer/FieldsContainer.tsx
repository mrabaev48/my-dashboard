import React, {FC} from 'react';
import {Grid, Paper} from "@mui/material";
import {IField} from "./models";
import {FieldControl} from "../fields/FieldControl";
import {FIELD_TYPE} from "../fields/models";
import {KeyValuePair} from "../../shared/dataTables/utils/DtUtils";
import {Permission} from "../models/Permission";

export interface IFieldsContainerProps {
    model: any;
    fields: IField [];
    requiredPermissions: Permission[];
    userPermissions: Permission[];
}

export const FieldsContainer: FC<IFieldsContainerProps> = ({
                                                               model,
                                                               fields,
                                                               requiredPermissions,
                                                               userPermissions
                                                           }) => {

    return (
        <Grid container spacing={3}>
            {
                fields.map((field, index) => {
                    return (
                        <Grid item xs={2}>
                            <FieldControl field={field} key={index} model={model}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    );
};