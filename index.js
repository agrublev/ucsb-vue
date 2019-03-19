import Vue from "vue";
import App from "./src/App.vue";
import router from "./src/routes.js";
import firebase from "firebase/app";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

fetch("/__/firebase/init.json").then(response => {
    firebase.initializeApp(response.json());
});

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
