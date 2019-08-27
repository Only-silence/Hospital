import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import center from '@/components/center'
import overview from '@/components/overview'
import guide from '@/components/guide'
import department from '@/components/department'
import honor from '@/components/honor'
import recruitment from '@/components/recruitment'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/center',
          name: 'center',
          component: center
        },
        {
          path: 'overview',
          name: 'overview',
          component: overview
        },
        {
          path: 'guide',
          name: 'guide',
          component: guide
        },
        {
          path: 'department',
          name: 'department',
          component: department
        },
        {
          path: 'honor',
          name: 'honor',
          component: honor
        },
        {
          path: 'recruitment',
          name: 'recruitment',
          component: recruitment
        },
        {
          path: 'contact',
          name: 'contact',
          component: contact
        }
      ]
    }
  ]
})
