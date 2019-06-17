import Vue from 'vue'
import Router from 'vue-router'
import mIndex from '@/page/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: mIndex
    },
  ]
})
