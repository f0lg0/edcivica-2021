import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/identitadigitale",
        name: "identitadigitale",
        component: () => import("../views/IdentitaDigitale.vue"),
    },
    {
        path: "/privacy",
        name: "privacy",
        component: () => import("../views/Privacy.vue"),
    },
    {
        path: "/datipersonali",
        name: "datipersonali",
        component: () => import("../views/DatiPersonali.vue"),
    },
    {
        path: "*",
        name: "404",
        component: () => import("../views/404.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
