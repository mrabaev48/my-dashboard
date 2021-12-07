import React, {FC} from 'react';
import AppBarExt from "../appBar/AppBarExt";
import {DesktopToolbarMenu, MobileToolbarMenu} from "../toolbarMenu/ToolbarMenu";
import {ToolbarExt} from "../toolbar/ToolbarExt";


export interface IHeaderProps {
    open: boolean;
    handleDrawerOpen: () => void;
}

export const Header:FC<IHeaderProps> = ({handleDrawerOpen, open}) => {

    const [desktopAnchorEl, setDesktopAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const desktopMenuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isDesktopMenuOpen = Boolean(desktopAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setDesktopAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDesktopMenuClose = () => {
        setDesktopAnchorEl(null);
        handleMobileMenuClose();
    };

    return (
        <>
            <AppBarExt handleDrawerOpen={handleDrawerOpen} open={open}>
                <ToolbarExt
                    handleDrawerOpen={handleDrawerOpen}
                    open={open}
                    desktopMenuId={desktopMenuId}
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    handleProfileMenuOpen={handleProfileMenuOpen}
                    mobileMenuId={mobileMenuId}
                />
            </AppBarExt>
            <MobileToolbarMenu
                anchorEl={mobileMoreAnchorEl}
                menuId={mobileMenuId}
                isMenuOpen={isMobileMenuOpen}
                handleMenuClose={handleMobileMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <DesktopToolbarMenu
                anchorEl={desktopAnchorEl}
                menuId={desktopMenuId}
                isMenuOpen={isDesktopMenuOpen}
                handleMenuClose={handleDesktopMenuClose}
                handleProfileMenuOpen={handleProfileMenuOpen}
            />
        </>
    );
};
