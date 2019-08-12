import Vue from 'vue'
import Router from 'vue-router'
import Logo from './views/Logo.vue'
import Entities from './views/Entities.vue';
import Loops from './views/Loops.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Moustache.vue')
    },
    {
      path: '/entities',
      name: 'Entities',
      component: Entities
    },
    {
      path: '/loops',
      name: 'Loops',
      component: Loops
    }
  ]
})
