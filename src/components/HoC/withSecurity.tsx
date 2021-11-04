import React from 'react';

function checkSecurity(): boolean {
    return true;
}

export const withSecurity = <T extends object>(PassedComponent: React.ComponentType<T>) => {
    return (props: T) => {
        if (!checkSecurity()) {
            return (
                <>
                </>
            )
        }

        return (
            <PassedComponent
                {...props}
            />
        )
    }
}