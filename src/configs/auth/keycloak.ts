import Keycloak from "keycloak-js";
const keycloackConfig = {
    "url": "keycloackInstanceUrl",
    "realm": "backoffice",
    "clientId": "backoffice"
}

// @ts-ignore
export const keycloakInstance = new Keycloak(keycloackConfig);
