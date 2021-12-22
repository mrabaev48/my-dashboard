import {useContext} from "react";
import {ConfirmContext} from "../config/ConfirmContext";

export const useConfirmDialog = () => {
    return useContext(ConfirmContext);
}