import currentUser from './services/tokendecoder';
export default {
    items: [
        {
            id: 'navigation',
            title: 'Admin Panel',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                },
                {
                    id: 'profile',
                    title: 'Profile',
                    type: 'item',
                    url: '/profile/'+currentUser.currentUser(),
                    classes: 'nav-item',
                    icon: 'feather icon-user'
                },
                {
                    id: 'basic',
                    title: 'Users',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'userlist',
                            title: 'User List',
                            type: 'item',
                            url: '/userlist'
                        },
                        {
                            id: 'adduser',
                            title: 'Add User',
                            type: 'item',
                            url: '/adduser'
                        }
                    ]
                },
                {
                    id: 'orders',
                    title: 'Orders',
                    type: 'item',
                    url: '/orderlist',
                    classes: 'nav-item',
                    icon: 'feather icon-shopping-cart'
                }
            ]
        }
    ]
}