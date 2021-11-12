import React from "react";

export interface IAppContextProps {
    setActivePage?: () => void;
    activePage?: string
}

export const defaultState: IAppContextProps = {
}

export const AppContext = React.createContext<IAppContextProps>(defaultState);