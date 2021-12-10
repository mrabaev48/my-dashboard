import {Dashboard} from "../../pages/dashboard/Dashboard";
import {Orders} from "../../pages/orders/Orders";
import {Customers} from "../../pages/customers/Customers";
import {Reports} from "../../pages/reports/Reports";
import {Deposits} from "../../pages/deposits/Deposits";
import {Profile} from "../../pages/profile/Profile";

export const privateRoutes = [
    {
        path: '/',
        defaultLabel: 'Dashboard',
        translationKey: '',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/orders',
        defaultLabel: 'Orders',
        translationKey: '',
        exact: false,
        component: Orders,
    },
    {
        path: '/customers',
        defaultLabel: 'Customers',
        translationKey: '',
        exact: false,
        component: Customers,
    },
    {
        path: '/reports',
        defaultLabel: 'Reports',
        translationKey: '',
        exact: false,
        component: Reports,
    },
    {
        path: '/deposits',
        defaultLabel: 'Deposits',
        translationKey: '',
        exact: false,
        component: Deposits,
    },
    {
        path: '/profile',
        defaultLabel: 'Profile',
        translationKey: '',
        exact: false,
        component: Profile,
    }
]
