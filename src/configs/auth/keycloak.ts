import Keycloak from "keycloak-js";
const keycloackConfig = {
    "url": "https://keycloak.fizzdev.eu/auth",
    "realm": "backoffice",
    "clientId": "backoffice"
}

// @ts-ignore
export const keycloakInstance = new Keycloak(keycloackConfig);