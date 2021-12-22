import {IDataTablesActions} from "./IDataTablesActions";
import {IDataTablesOptions} from "./IDataTablesOptions";
import {IDataTablesState} from "./IDataTablesState";

export interface IDataTablesContextModel {
    options: IDataTablesOptions;
    actions: IDataTablesActions;
    state: IDataTablesState;
}