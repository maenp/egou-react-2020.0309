import {
    Home, Login,Home_1
} from "@pages/test"
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
]