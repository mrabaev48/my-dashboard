import * as React from 'react';
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCustomers} from "../../store/reducers/customers/ActionCreators";

export const Customers:FC = () => {

    const dispatch = useAppDispatch();
    const {customers, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [])

    return (
        <>
            {isLoading && <h1>Loading data...</h1>}
            {error && <h4>{error}</h4>}
            {customers.map(user =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </>
    )
}