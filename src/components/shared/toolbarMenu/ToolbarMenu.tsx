import React, {FC} from 'react';
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from '@mui/material/Menu';

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
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
                <MenuItem onClick={handleProfileMenuOpen}>
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
            </Menu>
        )
    }