import {ICustomer} from "../../../models/ICustomer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCustomers} from "./ActionCreators";

interface CustomerState {
    customers: ICustomer[];
    isLoading: boolean;
    error: string;
}

const initialState: CustomerState = {
    customers: [],
    isLoading: false,
    error: '',
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchCustomers.fulfilled.type]: (state: CustomerState, action: PayloadAction<ICustomer[]>) => {
            state.isLoading = false;
            state.error = '';
            state.customers = action.payload;
        },
        [fetchCustomers.pending.type]: (state: CustomerState) => {
            state.isLoading = true;
        },
        [fetchCustomers.rejected.type]: (state: CustomerState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default customerSlice.reducer;