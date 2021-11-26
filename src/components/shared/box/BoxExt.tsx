import React, {FC} from 'react';
import {Box} from "@mui/material";

export const BoxExt:FC = ({children}) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} width={'100%'}>
            {children}
        </Box>
    );
};