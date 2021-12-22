import {createContext} from "react";
import {IDataTablesContextModel} from "../models/IDataTablesContextModel";
import {DataTablesContextDefaultModel} from "../models/DataTablesContextDefaultModel";

export const DataTablesContext = createContext<IDataTablesContextModel>(DataTablesContextDefaultModel);