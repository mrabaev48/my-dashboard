import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import {AppMenuItemProps} from "./components/shared/menu/AppMenuItem";
import {AppContextProvider} from "./components/context/appContext/AppContextProvider";
import { v4 } from 'uuid';
import {ContentCopy} from "@mui/icons-material";
import {Box, Divider} from '@mui/material'
import {Customers} from "./pages/customers/Customers";
import DrawerExt from "./components/shared/drawer/DrawerExt";
import {PageTitle} from "./components/shared/pageTitle/PageTitle";
import {Dashboard} from "./pages/dashboard/Dashboard";
import {Orders} from "./pages/orders/Orders";
import {Reports} from "./pages/reposrts/Reports";
import {Header} from "./components/shared/header/Header";
import DrawerHeader from "./components/shared/drawerHeader/DrawerHeader";
import {BoxExt} from "./components/shared/box/BoxExt";
import AppMenu from "./components/shared/menu/AppMenu";

import './styles/main-style.scss'

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

const App: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <AppContextProvider>
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
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/orders" component={Orders} />
                            <Route path="/customers" component={Customers} />
                            <Route path="/reports" component={Reports} />
                        </Switch>
                    </BoxExt>
                </Box>
            </BrowserRouter>
        </AppContextProvider>
    )
}

export default App
