import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import AppMenuItem, {AppMenuItemProps} from './AppMenuItem'

export interface IAppMenuProps {
    items: AppMenuItemProps[];
}

const AppMenu: React.FC<IAppMenuProps> = ({ items }) => {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.appMenu} disablePadding>
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
