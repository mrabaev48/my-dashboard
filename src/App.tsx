import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import {ThemeProvider} from "@mui/material";
import {ThreeStripesDefaultTheme} from "./overrides";


const App: React.FC = () => {

    return (
        <ThemeProvider theme={ThreeStripesDefaultTheme}>
            <MainLayout/>
        </ThemeProvider>
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
