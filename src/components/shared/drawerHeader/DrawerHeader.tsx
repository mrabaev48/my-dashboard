import React, {FC} from 'react';
import {styled, useTheme} from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";

const DrawerHeaderStyled = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export interface IDrawerHeaderProps {
    handleDrawerClose?: () => void;
}

export const DrawerHeader:FC<IDrawerHeaderProps> = ({handleDrawerClose}) => {
    const theme = useTheme();

    return (
        <DrawerHeaderStyled>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
            </IconButton>
        </DrawerHeaderStyled>
    );
};

export default DrawerHeader;