import {FC} from "react";
import {IDataTablesCellPropsBase} from "./models/IDataTablesCellProps";

export const DataTablesActionCell:FC<IDataTablesCellPropsBase> = ({cellValue, className}) => {

    return (
        <div className={`${className} dt-column-body-cell`}>
            {cellValue}
        </div>
    )
}