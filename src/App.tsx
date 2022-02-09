import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import {StylesProvider} from '@material-ui/core';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import {keycloakInstance} from "./configs/auth/keycloak";


const App: React.FC = () => {

    return (
        /*<ReactKeycloakProvider authClient={keycloakInstance}>*/
            <StylesProvider injectFirst>
                <MainLayout/>
            </StylesProvider>
        /*</ReactKeycloakProvider>*/
    )
}

export default App


/*
const App: React.FC = () => {

    return (
        <ReactKeycloakProvider authClient={keycloakInstance}>
            <ThemeProvider theme={ThreeStripesDefaultTheme}>
                <StylesProvider injectFirst>
                    <MainLayout/>
                </StylesProvider>
        </ReactKeycloakProvider>
        </ThemeProvider>
   )
}*/
