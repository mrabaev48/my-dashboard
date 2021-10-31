import React from 'react'
import clsx from 'clsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import AppMenu from './components/menu/AppMenu';
import { Dashboard } from './pages/Dashboard'
import {Orders} from "./pages/Orders";
import {Customers} from "./pages/Customers";
import {Reports} from "./pages/Reports";

const App: React.FC = () => {
    const classes = useStyles()

    return (
        <BrowserRouter>
            <div className={clsx('App', classes.root)}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <AppMenu />
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>

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
    )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        background: '#535454',
        color: '#fff',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

export default App
