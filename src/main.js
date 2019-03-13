import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
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
        }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
