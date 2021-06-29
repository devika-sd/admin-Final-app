import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Dashboard'));
const Orders = React.lazy(() => import('./Demo/Orders/Orders'));
const OrdersModel = React.lazy(() => import('./Demo/Orders/OrderModel'));
const UserList = React.lazy(() => import('./Demo/Userlist/UserList'));
const AddUser = React.lazy(() => import('./Demo/Adduser/Adduser'));
const ProfilePage = React.lazy(() => import('./Demo/Profile/ProfilePage'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/orderlist', exact: true, name: 'Basic Badges', component: Orders },
    { path: '/userlist', exact: true, name: 'Basic Tabs & Pills', component: UserList },
    { path: '/adduser', exact: true, name: 'Basic Typography', component: AddUser },
    { path: '/profile/:id', exact: true, name: 'Sample Page', component: ProfilePage },
    { path: '/orderModel', exact: true, name: 'Sample Page', component: OrdersModel }
];

export default routes;