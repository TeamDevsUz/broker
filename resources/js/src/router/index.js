import {createRouter, createWebHistory} from 'vue-router'

import IndexPage from '../../src/views/HomeIndex.vue'
import AboutPage from '../../src/views/About.vue'
import AddListPage from '../../src/views/form-step/AddList.vue'
import PersonalDemo from '../../src/views/form-step/PersonalDemo.vue'
import SeatDemo from '../../src/views/form-step/SeatDemo.vue'
import MyAccount from '../../src/views/account/MyAccount.vue'
import AddList from '../views/account/AddsList.vue'
import HorizontalMenu from '../../components/HorizontalMenu.vue'
import Admin from '../layouts/Admin.vue'
import Main from '../layouts/Main.vue'

// Users
import AdminMessages from '../../src/views/admin/Messages.vue'
import AdminWallet from '../../src/views/admin/Wallet.vue'
import AdminTarif from '../../src/views/admin/Tarif.vue'
import AdminSaved from '../../src/views/admin/Saved.vue'
import AdminComments from '../../src/views/admin/Comments.vue'

// Users Edit
import UserEdit from '../../src/views/account/edit/UserEdit.vue'
const routes = [
    {
        path: '/',
        name: 'siteIndex',
        component: Main,
        redirect: '/index',
        children: [
            {
                path: '/index',
                components: {
                    main: IndexPage,
                },
            }
        ]
    },
    {
        path: '/about',
        name: 'siteabout',
        component: AboutPage,
    },
    {
        path: '/add',
        name: 'siteabout',
        component: AddListPage,
    },
    {
        path: '/new/object/personal',
        name: 'personal',
        component: PersonalDemo,
    },
    {
        path: '/new/object/seats',
        name: 'seats',
        component: SeatDemo,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
            {
                path: '/addlist',
                components: {
                    helper: AddList,
                },
            },
            {
                path: '/myaccount',
                components: {
                    helper: MyAccount,
                },
            },
            {
                path: '/myaccount/user/edit',
                name: "user-edit",
                components: {
                    helper: UserEdit,
                },
            },
            {
                path: '/messages',
                components: {
                    helper: AdminMessages,
                },
            },
            {
                path: '/wallet',
                components: {
                    helper: AdminWallet,
                },
            },
            {
                path: '/tarif',
                components: {
                    helper: AdminTarif,
                },
            },
            {
                path: '/saved',
                components: {
                    helper: AdminSaved,
                },
            },
            {
                path: '/comments',
                components: {
                    helper: AdminComments,
                },
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes,
})

export default router