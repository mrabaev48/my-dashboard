import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import { StylesProvider } from '@material-ui/core';


const App: React.FC = () => {

    return (
        <StylesProvider injectFirst>
            <MainLayout/>
        </StylesProvider>
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
