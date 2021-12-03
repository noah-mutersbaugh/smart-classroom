import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/inventory',
        name: 'Inventory',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Inventory.vue')
    },
    {
        path: '/tech-specs',
        name: 'TechSpecs',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/TechSpecs.vue')
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/FAQ.vue')
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Feedback.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Map.vue')
    },
    {
        path: '/tech-settings',
        name: 'TechSettings',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/TechSettings.vue')
    },
    {
<<<<<<< HEAD
        path: '/parse-url',
        name: 'parseURL',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/parseURL.vue')
=======
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('../views/Admin.vue')
>>>>>>> 6271ba8459ea6e53ed4e1525d5eb2d33aa7b5ad5
    }

]

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'is-active'
})

export default router