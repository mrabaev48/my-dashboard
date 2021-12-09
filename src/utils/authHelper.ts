import {useKeycloak} from "@react-keycloak/web";
import {IAuthorizedElementProps} from "../components/utils/AutorizedElement";

export const hasAccess = (roles: any[]) => {
    const {keycloak, initialized} = useKeycloak();

    if (keycloak && roles) {
        return roles.some(r => {
            const realm =  keycloak.hasRealmRole(r);
            const resource = keycloak.hasResourceRole(r);
            return realm || resource;
        });
    }

    return false;
}