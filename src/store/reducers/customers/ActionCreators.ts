import axios from "axios";
import {ICustomer} from "../../../models/ICustomer";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk(
    'customer/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICustomer[]>('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)