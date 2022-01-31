import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import {ReactKeycloakProvider} from '@react-keycloak/web'
import {keycloakInstance} from "./configs/auth/keycloak";
import {ThreeStripesDefaultTheme} from "./overrides";
import {ThemeProvider} from "@mui/material";
import { StylesProvider } from '@material-ui/core/styles';


const App: React.FC = () => {

    return (
        // <ReactKeycloakProvider authClient={keycloakInstance}>
        // <ThemeProvider theme={ThreeStripesDefaultTheme}>
            <StylesProvider injectFirst>
            <MainLayout/>
            </StylesProvider>
            // </ReactKeycloakProvider>
        // </ThemeProvider>
    )
}

export default App
