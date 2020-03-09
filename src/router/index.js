import {
    Home, Login,Home_1
} from "@pages/test"

export const routes = [
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