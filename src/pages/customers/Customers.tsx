import * as React from 'react';
import {FC, useEffect, useState} from "react";
import {DataTables} from "../../components/shared/dataTables/DataTables";
import {
    DataTablesColumnType
} from "../../components/shared/dataTables/models/DataTablesColumnType";
import * as faker from "faker";
import {KeyValuePair} from "../../components/shared/dataTables/utils/DtUtils";
import AddCardIcon from '@mui/icons-material/AddCard';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import {TextField} from "@mui/material";
import axios from "axios";

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
                <dev key={customer.id}>
                    {customer.name}
                </dev>
            )}
        </>
    )*/

    const getNouns = (): KeyValuePair<string, string>[] => {
        const nouns: any[] = [];

        for (let i = 0; i <= 10; i++) {
            const noun = faker.hacker.noun();
            nouns.push({
                key: noun,
                value: noun
            })
        }

        return nouns;
    }

    const nouns = getNouns();

    const fetchData = async () => {
        let data = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;


        data = data.map((obj: any, index: number) => {
            obj['isActive'] = Math.random() < 0.5;
            obj['salary'] = faker.commerce.price();
            obj['type'] = nouns[Math.floor(Math.random() * (nouns.length - 1))].key;
            obj['birthday'] = faker.date.past();
            return obj;
        })

        return data;
    }

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const tmp = await fetchData();
            setTableData(tmp)
        }
        fetching();
    }, [])

    const onFilterChange = async (event: any) => {
        const fetched = await fetchData();
        setTableData(fetched);
    }

    const fil = (
        <TextField placeholder={'search'} onChange={onFilterChange} fullWidth/>
    )

    const fil2 = (
        <TextField placeholder={'search'} fullWidth/>
    )

    const fil3 = (
        <TextField placeholder={'search'} fullWidth/>
    )

    const fil4 = (
        <TextField placeholder={'search'} fullWidth/>
    )


    return (
        <div>
                <DataTables
                    options={{
                        columns: [
                            {
                                dataSource: 'id',
                                label: 'ID',
                                type: DataTablesColumnType.INT,
                                useFilter: true,
                                useSorting: false,
                                filter: fil,
                                colspan: 3
                            },
                            {
                                dataSource: 'email',
                                label: 'Email',
                                type: DataTablesColumnType.STRING,
                                useFilter: true,
                                sortDirection: "asc",
                                required: true,
                                transform: (it) => {
                                    return 'Text : ' + it;
                                },
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
                            /*{
                                dataSource: 'salary',
                                label: 'Salary',
                                type: DataTablesColumnType.DECIMAL,
                                useFilter: true,
                            },*/
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
                                useFilter: true,
                                transform: (it: any) => 'Value: ' + it
                            }
                        ],
                        filters: [
                            {
                                key: 'first_filter',
                                filter: fil,
                                colspan: 3
                            },
                            {
                                key: 'second_filter',
                                filter: fil2,
                                colspan: 2
                            },
                            {
                                key: 'another_filter',
                                filter: fil3,
                            },
                        ],
                        tableData,
                        uniqueKey: 'id',
                        useFilters: true,
                        dateFormat: 'dd.MM.yyyy',
                        useSorting: true,
                        useSelection: true,
                        useExpand: true,
                        useEdit: true,
                        renderExpandedDataControl: (row: any) => {
                            return (
                                <h2>{JSON.stringify(row)}</h2>
                            );
                        },
                        deleteRecord: (row: any) => {
                            console.log(`row with id = ${row.id} was deleted`);
                        },
                        updateRecord: (row: any) => {
                            console.log(`record: ${row} was updated`);
                        },
                        renderCustomActionsControls: (row: any) => {
                            const actions: JSX.Element[] = [];

                            const addIconOnClick = () => {
                                alert('clicked');
                            }

                            const addIcon = <AddCardIcon className={'cursor'} color={"primary"} onClick={addIconOnClick}/>;
                            const accessIcon = <AccessibilityIcon className={'cursor'} color={"primary"} onClick={addIconOnClick}/>;
                            const attachIcon = <AttachEmailIcon className={'cursor'} color={"primary"} onClick={addIconOnClick}/>;

                            return [addIcon, accessIcon, attachIcon];
                        }
                    }}
                />
        </div>
    )
}