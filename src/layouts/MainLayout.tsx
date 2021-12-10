import React, {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Box, Button, Divider, Typography} from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "../components/shared/header/Header";
import DrawerExt from "../components/shared/drawer/DrawerExt";
import DrawerHeader from "../components/shared/drawerHeader/DrawerHeader";
import {AppMenu} from "../components/shared/menu/AppMenu";
import {BoxExt} from "../components/shared/box/BoxExt";
import {PageTitle} from "../components/shared/pageTitle/PageTitle";
import {Dashboard} from "../pages/dashboard/Dashboard";
import {Orders} from "../pages/orders/Orders";
import {Customers} from "../pages/customers/Customers";
import {Reports} from "../pages/reports/Reports";
import {AppMenuItemProps} from "../components/shared/menu/AppMenuItem";
import IconDashboard from "@material-ui/icons/Dashboard";
import {v4} from "uuid";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import {ContentCopy} from "@mui/icons-material";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import {useKeycloak} from "@react-keycloak/web";
import {Deposits} from "../pages/deposits/Deposits";
import {Profile} from "../pages/profile/Profile";
import {routes} from "../configs/routes";

const appMenuItems: AppMenuItemProps[] = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashboard,
        pageIdentifier: v4(),
    },
    {
        name: 'Orders',
        link: '/orders',
        Icon: IconShoppingCart,
        pageIdentifier: v4(),
    },
    {
        name: 'Customers',
        link: '/customers',
        Icon: IconPeople,
        pageIdentifier: v4(),
    },
    {
        name: 'Reports',
        link: '/reports',
        Icon: IconBarChart,
        pageIdentifier: v4(),
    },
    {
        name: 'Deposits',
        link: '/deposits',
        Icon: ContentCopy,
        pageIdentifier: v4()
    },
    {
        name: 'Nested Pages',
        Icon: IconLibraryBooks,
        items: [
            {
                name: 'Level 2',
                pageIdentifier: v4(),
            },
            {
                name: 'Level 2',
                items: [
                    {
                        name: 'Level 3',
                        pageIdentifier: v4(),
                    },
                    {
                        name: 'Level 3',
                        pageIdentifier: v4(),
                    },
                ],
                pageIdentifier: v4(),
            },
        ],
        pageIdentifier: v4(),
    },
]

export const MainLayout:FC = (props) => {
    const [open, setOpen] = React.useState(false);

    const {keycloak, initialized} = useKeycloak();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (!initialized) {
        return (
            <Typography variant={"body1"}>
                Initializing...
            </Typography>
        )
    }

    if (keycloak && !keycloak.authenticated) {
        keycloak.login();
    }

    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex', width: '100%', marginLeft: 0}}>
                <CssBaseline />
                <Header open={open} handleDrawerOpen={handleDrawerOpen}/>
                <DrawerExt open={open}>
                    <DrawerHeader handleDrawerClose={handleDrawerClose}/>
                    <Divider />
                    <AppMenu items={appMenuItems}/>
                </DrawerExt>
                <BoxExt>
                    <DrawerHeader />
                    <PageTitle/>
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                <Route {...route} key={index}/>
                            )
                        })}
                    </Switch>
                </BoxExt>
            </Box>
        </BrowserRouter>
    )
}