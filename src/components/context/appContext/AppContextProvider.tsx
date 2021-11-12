import React, {FC} from "react";
import {AppContext, defaultState} from "./AppContext";

export const AppContextProvider: FC = ({ children}) => {
    const [activePage, setActivePage] = React.useState<string>();

    return (
        <AppContext.Provider
            value={{
                ...defaultState,
                activePage,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}