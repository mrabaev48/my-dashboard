import React from 'react';
function checkSecurity(): boolean {
    return false;
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