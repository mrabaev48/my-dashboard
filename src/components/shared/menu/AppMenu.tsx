import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import AppMenuItem, {AppMenuItemProps} from './AppMenuItem'
import {ListItemIcon} from "@mui/material";
import {IconExt, IconSize} from "../icon/IconExt";

export interface IAppMenuProps {
    items: AppMenuItemProps[];
}

const AppMenu: React.FC<IAppMenuProps> = ({ items }) => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            <ListItemIcon
                style={{
                    justifyContent: "center",
                    width: "100%"
                }}
                onClick={(e) => {console.log('clicked')}}
            >
                <IconExt
                    iconName={'keyboard_double_arrow_left'}
                    iconColor={'white'}
                    iconSize={IconSize.large}
                />
            </ListItemIcon>
            {items.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
    }),
)

export default AppMenu
