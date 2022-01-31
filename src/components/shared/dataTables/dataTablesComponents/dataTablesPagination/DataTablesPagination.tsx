import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDataTablesContext} from "../../config/hooks/useDataTablesContext";
import {Pagination} from "@mui/lab";
import {MenuItem, Select, SelectChangeEvent, Typography} from "@mui/material";
import {IPaginationState} from "../../models/IDataTablesState";


/*const defaultStateValues: IPaginationState = {
    selectedItemsPerPage: null,
    pageCount: 0,
    totalItems: 0,
    currentPageIndex: 1,
    paginationMin: 0,
    paginationMax: 0
}*/

export const DataTablesPagination:FC = () => {
    const context = useDataTablesContext();

    /*const [paginationData, setPaginationData] = useState<IPaginationState>(defaultStateValues) ;*/

    const {paginationData} = context.state;
    const {setPaginationData} = context.actions;

    const calculatePagingValues = (newSelectedItemsPerPage?: number): IPaginationState => {

        const filteredRecords = context.state.filteredRecords;
        let itemsPerPage = context.options.itemsPerPageDefault;

        if (paginationData.selectedItemsPerPage !== null) {
            itemsPerPage = paginationData.selectedItemsPerPage;
        }

        if (newSelectedItemsPerPage !== undefined && newSelectedItemsPerPage !== null) {
            itemsPerPage = newSelectedItemsPerPage;
        }

        const calculatedPageCount = Math.ceil(filteredRecords/itemsPerPage!);

        const calculatedPaginationMin = (paginationData.currentPageIndex - 1) * (paginationData.selectedItemsPerPage || 1);
        const calculatedPaginationMax = itemsPerPage;

        return {
            totalItems: filteredRecords,
            selectedItemsPerPage: itemsPerPage as number,
            pageCount: calculatedPageCount,
            paginationMin: calculatedPaginationMin,
            paginationMax: calculatedPaginationMax as number,
            currentPageIndex: paginationData.currentPageIndex,
            filteredRecords: paginationData.filteredRecords,
        };
    }

    useEffect(() => {
        const values = calculatePagingValues();
        setPaginationData({...values});
    }, []);

    useEffect(() => {
        const values = calculatePagingValues();
        setPaginationData(values);
    }, [paginationData.currentPageIndex]);

    const getItemsPerPageControl = (items: number[], itemsPerPageDefault: number) => {
        const selectItems = items.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    value={item}
                >
                    {item}
                </MenuItem>
            );
        });
        return (
            <Select
                value={paginationData.selectedItemsPerPage ? paginationData.selectedItemsPerPage.toString() : itemsPerPageDefault.toString()}
                onChange={handleItemsPerPageChange}
            >
                {selectItems}
            </Select>
        );
    }

    const renderPaginationText = () => {
        let localizationValue = "dataTables.pagination.paginationText";

        /*if (context.state.filtersData.length > 0 || context.state.filteredRecords !== context.state.totalRecords) {
            localizationValue += "Filtered";
        }*/
        return `Displaying records from 
        ${context.state.data.length === 0 ? 0 : paginationData.paginationMin + 1} to 
        ${paginationData.paginationMin + context.state.data.length} of 
        ${paginationData.totalItems}`
    }

    const handleItemsPerPageChange = (event: SelectChangeEvent) => {
        const value = parseInt(event.target.value, 10);
        const calculatedStateValues = calculatePagingValues(value)
        setPaginationData({
            ...calculatedStateValues,
            currentPageIndex: 1,
        });
    }

    const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
        const values = calculatePagingValues();
        setPaginationData({
            ...values,
            currentPageIndex: page,
        })
    }

    if (context.options.usePaging) {
        return (
            <div className="dt-pagination">
                <div className="dt-pagination-buttons">
                    <Pagination
                        count={paginationData.pageCount}
                        page={paginationData.currentPageIndex}
                        shape={'rounded'}
                        color={'primary'}
                        onChange={handlePageChange}
                    />
                </div>
                <div className="dt-pagination-info">
                    <div className={'dt-pagination-items-per-page'}>
                        {getItemsPerPageControl(context.options.itemsPerPage as number[], context.options.itemsPerPageDefault as number)}
                        <Typography variant={"body2"}>
                            { 'items Per Page' }
                        </Typography>
                    </div>
                    <Typography variant={"body2"}>
                        { renderPaginationText() }
                    </Typography>
                </div>
            </div>
        )
    }

    return (
        <></>
    )
}