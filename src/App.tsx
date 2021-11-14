import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'

import AppMenu from './components/shared/menu/AppMenu';
import { Dashboard } from './pages/dashboard/Dashboard'
import {Orders} from "./pages/orders/Orders";
import {Customers} from "./pages/customers/Customers";
import {Reports} from "./pages/reposrts/Reports";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import {AppMenuItemProps} from "./components/shared/menu/AppMenuItem";
import {AppContextProvider} from "./components/context/appContext/AppContextProvider";
import { v4 } from 'uuid';
import { Header } from './components/shared/header/Header'

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
    const classes = useStyles();

    return (
        <AppContextProvider>
            <BrowserRouter>
                <div className={clsx('App', classes.root)}>
                    <CssBaseline />
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <AppMenu
                            items={appMenuItems}
                        />
                    </Drawer>
                    <main className={classes.content}>
                        <Header/>
                        <Container maxWidth="xl" className={classes.container}>
                            <Switch>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/orders" component={Orders} />
                                <Route path="/customers" component={Customers} />
                                <Route path="/reports" component={Reports} />
                            </Switch>

                        </Container>
                    </main>
                </div>
            </BrowserRouter>
        </AppContextProvider>
    )
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginLeft: 0
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        background: '#3b3d3d',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#eee'
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        margin: 0,
        width: '100%'
    },
}))

export default App
