import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueGoogleApi from 'vue-google-api'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

const config = {
    apiKey: 'AIzaSyDzXEQHb8Cb0prmQGCsOtsR6bNn8x8Zl5I',
    clientId: '136856074772-vqegrfk0t4gup6r8qgq7rg00reob65sk.apps.googleusercontent.com',
    scope: 'profile email'
}
Vue.use(VueGoogleApi, config);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')