import {FC} from "react";
import {hasAccess} from "../../utils/authHelper";

export interface IAuthorizedElementProps {
    userRoles: any[];
}

export const AuthorizedElement:FC<IAuthorizedElementProps> = ({userRoles, children}) => {
    if (hasAccess(userRoles)) {
        return <>{children}</>
    }
    return <></>
}