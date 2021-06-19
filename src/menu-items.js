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
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'profile',
                    title: 'Profile',
                    type: 'item',
                    url: '/sample-page',
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
                            url: '/basic/tabs-pills'
                        },
                        {
                            id: 'adduser',
                            title: 'Add User',
                            type: 'item',
                            url: '/basic/typography'
                        }
                    ]
                },
                {
                    id: 'orders',
                    title: 'Orders',
                    type: 'item',
                    url: '/sample-page',
                    classes: 'nav-item',
                    icon: 'feather icon-shopping-cart'
                },
                {
                    id: 'disabled-menu',
                    title: 'Close Menu',
                    type: 'item',
                    url: '#',
                    classes: 'nav-item disabled',
                    icon: 'feather icon-power'
                }
            ]
        }
    ]
}