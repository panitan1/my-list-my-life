
import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register/Register.vue";
import Login from "../components/Login/Login.vue";
import Mylist from "../components/mylist.vue/Mylist.vue";
import Lastday from "../components/mylist.vue/lastday.vue";
const routes = [
    {
        path: '/register',
        name: "Register",
        component: Register
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path:"/mylist",
        name:"mylist",
        component: Mylist
    },
    {
        path:"/lastday",
        name:"lastday",
        component: Lastday
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export  default router;