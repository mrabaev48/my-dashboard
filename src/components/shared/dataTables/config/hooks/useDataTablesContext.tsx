import {useContext} from "react";
import {DataTablesContext} from "../DataTablesContext";
import {IDataTablesContextModel} from "../../models/IDataTablesContextModel";

export const useDataTablesContext = () => useContext<IDataTablesContextModel>(DataTablesContext);