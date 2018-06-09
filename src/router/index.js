import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeCanvas from '@/components/ThreeCanvas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/3d',
      name: 'OBJ Canvas',
      component: ThreeCanvas
    }
  ]
})
