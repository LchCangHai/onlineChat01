import Vue from 'vue'
import VueRouter from 'vue-router'
import chatSpace from '../components/chatSpace.vue'
import creatRoom from '../components/creatRoom.vue'
import myInfo from '../components/myInfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/chatSpace' },
  { path: '/chatSpace', component: chatSpace },
  { path: '/creatRoom', component: creatRoom },
  { path: '/myInfo', component: myInfo }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, _from, next) => {
//   if (to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.token
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
