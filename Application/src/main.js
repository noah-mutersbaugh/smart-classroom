import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueGoogleApi from 'vue-google-api'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

import config from "./secrets/config.js"
console.log(config)
Vue.use(VueGoogleApi, config);

Vue.use(Vuex);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        loggedIn: undefined,
        user: undefined
    },
    mutations: {
        logOut(state) {
            state.loggedIn = false;
        },
        logIn(state) {
            state.loggedIn = true;
        },
        changeUser(state, user) {
            state.user = user;
        }
    }
});

new Vue({
    router,
    render: h => h(App),
    store: store,
}).$mount('#app')