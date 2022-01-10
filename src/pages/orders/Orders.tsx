import React from 'react';
import {Datepicker} from "../../components/shared/datepicker/Datepicker";

export const Orders: React.FC = () => {
    const onChange = (event: any) => {
        console.log('event: ', event)
    }
    return (
        <>
            <Datepicker onChange={onChange}/>
        </>
    );
};