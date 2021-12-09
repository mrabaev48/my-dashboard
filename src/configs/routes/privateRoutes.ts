import {Dashboard} from "../../pages/dashboard/Dashboard";
import {Orders} from "../../pages/orders/Orders";
import {Customers} from "../../pages/customers/Customers";
import {Reports} from "../../pages/reports/Reports";
import {Deposits} from "../../pages/deposits/Deposits";
import {Profile} from "../../pages/profile/Profile";

export const privateRoutes = [
    {
        to: '/',
        defaultLabel: 'Dashboard',
        translationKey: '',
        exact: true,
        component: Dashboard,
    },
    {
        to: '/orders',
        defaultLabel: 'Orders',
        translationKey: '',
        exact: false,
        component: Orders,
    },
    {
        to: '/customers',
        defaultLabel: 'Customers',
        translationKey: '',
        exact: false,
        component: Customers,
    },
    {
        to: '/reports',
        defaultLabel: 'Reports',
        translationKey: '',
        exact: false,
        component: Reports,
    },
    {
        to: '/deposits',
        defaultLabel: 'Deposits',
        translationKey: '',
        exact: false,
        component: Deposits,
    },
    {
        to: '/profile',
        defaultLabel: 'Profile',
        translationKey: '',
        exact: false,
        component: Profile,
    }
]
