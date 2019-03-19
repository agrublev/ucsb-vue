import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Boot from "./pages/Boot.vue";

Vue.use(VueRouter);

const routes = new VueRouter({
    linkActiveClass: "active",
    routes: [
        {
            path: "*",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/bootstrap",
            name: "Boot",
            component: Boot
        }
    ]
});

export default routes;
