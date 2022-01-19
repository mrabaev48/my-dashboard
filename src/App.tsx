import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import {ReactKeycloakProvider} from '@react-keycloak/web'
import {keycloakInstance} from "./configs/auth/keycloak";
import {StylesProvider} from "@material-ui/core";



const App: React.FC = () => {

    return (
        // <ReactKeycloakProvider authClient={keycloakInstance}>
        <StylesProvider injectFirst>
            <MainLayout/>
        </StylesProvider>
        // </ReactKeycloakProvider>
    )
}

export default App
