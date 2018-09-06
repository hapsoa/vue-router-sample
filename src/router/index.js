import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../page/Hello';
import practice1 from '../page/practice1';
import practice2 from '../page/practice2';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue-router-sample',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/practice1',
      name: 'practice1',
      component: practice1
    },
    {
      path: '/practice2',
      name: 'practice2',
      component: practice2
    }
  ]
});
