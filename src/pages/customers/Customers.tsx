import * as React from 'react';
import {FC} from "react";
import {DataTables} from "../../components/shared/dataTables/DataTables";
import {
    DataTablesColumnType
} from "../../components/shared/dataTables/models/DataTablesColumnType";
import * as faker from "faker";
import axios from "axios";
import {KeyValuePair, SortDirections} from "../../components/shared/dataTables/utils/DtUtils";

export const Customers: FC = () => {

    /*const dispatch = useAppDispatch();
    const {customers, isLoading, error} = useAppSelector(state => state.customerReducer);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, []);

    return (
        <>
            {isLoading && <h1>Loading data...</h1>}
            {error && <h4>{error}</h4>}
            {customers.map(customer =>
                <div key={customer.id}>
                    {customer.name}
                </div>
            )}
        </>
    )*/

    const getNouns = (): KeyValuePair<string, string>[] => {
        const nouns: any[] = [];

        for (let i = 0; i <= 10; i++) {
            const noun = faker.hacker.noun();
            nouns.push({
                key: noun.toLowerCase(),
                value: noun.toUpperCase()
            })
        }

        return nouns;
    }

    const nouns = getNouns();

    return (
        <DataTables
            options={{
                columns: [
                    {
                        dataSource: 'id',
                        label: 'ID',
                        type: DataTablesColumnType.INT,
                        useFilter: true,
                        useSorting: false
                    },
                    {
                        dataSource: 'email',
                        label: 'Email',
                        type: DataTablesColumnType.STRING,
                        useFilter: true,
                        sortDirection: "asc",
                    },
                    {
                        dataSource: 'isActive',
                        label: 'Is Active',
                        type: DataTablesColumnType.BOOLEAN,
                        useFilter: true
                    },
                    {
                        dataSource: 'salary',
                        label: 'Salary',
                        type: DataTablesColumnType.CURRENCY,
                        useFilter: true,
                    },
                    {
                        dataSource: 'birthday',
                        label: 'Birthday',
                        type: DataTablesColumnType.DATE,
                        useFilter: true,
                        useTime: true,
                        // useTime: false,
                    },
                    {
                        dataSource: 'type',
                        label: 'Type',
                        type: DataTablesColumnType.SELECT,
                        loadSelectDataSource: async () => {
                            return nouns;
                        },
                        useFilter: true
                    }
                ],
                loadData: async () => {
                    let data = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;

                    data = data.map((obj: any, index: number) => {
                        obj['isActive'] = Math.random() < 0.5;
                        obj['salary'] = faker.commerce.price();
                        obj['type'] = nouns[Math.floor(Math.random() * (nouns.length - 1))].key;
                        obj['birthday'] = faker.date.past();
                        return obj;
                    })

                    return data;
                },
                uniqueKey: 'id',
                useFilters: true,
                dateFormat: 'dd.MM.yyyy',
                useSorting: true
            }}
        />
    )
}