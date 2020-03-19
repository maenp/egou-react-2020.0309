import {
    Home, Login,Home_1,Ts
} from "@pages/test"
import noPage from '@pages/noPage'
import allActivity from './allActivity'
export const routes = [
    ...allActivity,
    {
        key: "/home",
        path: "/home",
        name: "首页",
        component: Home,
        meta: {},
        children:[
            {
                key: "/home_1",
                path: "/home/one",
                name: "首页",
                component: Home_1,
                meta: {},
            }
        ]
    },
    {
        key: "/login",
        path: "/login",
        name: "登录",
        component: Login,
        meta: {}
    },
    {
        key: "/typescript",
        path: "/typescript",
        name: "TypeScript",
        component: Ts,
        meta: {}
    },
    // {
    //     path: '*',
    //     name: "TypeScript",
    //     component: noPage,
    //     meta: {}
    // }
]