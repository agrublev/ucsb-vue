import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from './Home.vue';
import LoginSignup from './LoginSignup.vue';
Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
    routes: [
        {
            path: "*",
            redirect: "/login"
        },
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "Login",
            component: LoginSignup
        },
        {
            path: "/home",
            name: "Home",
            component: Home,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

let app;

// The usual app stuff goes here.
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
      /* eslint-disable no-new */
      app = new Vue({
        //
        router,
        render: h => h(App)
    }).$mount("#app");
  }
});