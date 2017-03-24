import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Bonjour from '../components/Bonjour.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/Bonjour',
      name: 'Bonjour',
      component: Bonjour
    }
  ]
});
