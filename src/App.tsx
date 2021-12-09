import React from 'react'
import './styles/main-style.scss'
import {MainLayout} from "./layouts/MainLayout";
import {ReactKeycloakProvider} from '@react-keycloak/web'
import {keycloakInstance} from "./configs/auth/keycloak";



const App: React.FC = () => {

    return (
        <ReactKeycloakProvider authClient={keycloakInstance}>
            <MainLayout/>
        </ReactKeycloakProvider>
    )
}

export default App
