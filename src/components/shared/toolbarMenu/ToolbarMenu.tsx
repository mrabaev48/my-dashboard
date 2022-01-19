import React, {FC, forwardRef} from 'react';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from '@mui/material/Menu';
import {useKeycloak} from "@react-keycloak/web";
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, NavLinkProps } from 'react-router-dom'


export interface IToolbarMenuProps {
    anchorEl: HTMLElement | null;
    menuId: string;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const DesktopToolbarMenu:FC<IToolbarMenuProps> =
    ({
         anchorEl,
         menuId,
         isMenuOpen,
         handleMenuClose
     }) => {

    // const {keycloak, initialized} = useKeycloak();

    const doLogout = () => {
        // keycloak.logout();
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
                onClick={handleMenuClose}
                to={'/profile'}
            >
                Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={doLogout}>Logout</MenuItem>
        </Menu>
    )
}

export const MobileToolbarMenu: FC<IToolbarMenuProps> =
    ({
         anchorEl,
         menuId,
         isMenuOpen,
         handleProfileMenuOpen,
         handleMenuClose
     }) => {

        // const {keycloak, initialized} = useKeycloak();

        const doLogout = () => {
            // keycloak.logout();
        }

        return (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem
                    onClick={handleMenuClose}
                    component={forwardRef((props: NavLinkProps, ref: any) => <NavLink exact {...props} innerRef={ref} />)}
                    to={'/profile'}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
                <MenuItem onClick={doLogout}>
                    <IconButton
                        size="large"
                        aria-label="logout"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <LogoutIcon/>
                    </IconButton>
                    <p>Logout</p>
                </MenuItem>
            </Menu>
        )
    }