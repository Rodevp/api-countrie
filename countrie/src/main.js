import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

//components
import Home from '@/pages/Home';
import Countrie from '@/pages/Countrie';
import Error from '@/pages/Error';

Vue.use(VueRouter);
Vue.config.productionTip = false

const configRoute = {
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/countrie/:id',
      name: 'countrie',
      component: Countrie
    },
    {
      path: '*',
      name: 'error',
      component: Error
    },
  ]
}
const router =  new VueRouter(configRoute);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
