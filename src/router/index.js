import Vue from 'vue'
import Router from 'vue-router'
import MenuPage from '@/components/MenuPage'
import ThreeCanvas from '@/components/ThreeCanvas'
import ObjView from '@/components/ObjView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuPage',
      component: MenuPage
    },
    {
      path: '/3d',
      name: 'OBJ Canvas',
      component: ThreeCanvas
    },
    {
      path: '/objview',
      name: 'View OBJ file',
      component: ObjView
    }
  ]
})
