import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'
import PCLogin from '../views/login/PCLogin.vue'
import Register from '../views/Register/Register.vue'
import PCRegister from '../views/Register/PCRegister.vue'
import PCHome from '../views/home/PCHome.vue'
import MobHome from '../views/home/MobHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Home',
    name: 'PCHome',
    component: PCHome
  },
  // 手机端的路由
  {
    path: '/home',
    name: 'MobHome',
    component: MobHome
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/PCLogin/PCRegister',
    name: 'PCRegister',
    component: PCRegister
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (_to, _from, next) {
      const { isLogin } = sessionStorage
      isLogin ? next({ name: 'MobHome' }) : next()
    }
  }, {
    path: '/PCLogin',
    name: 'PCLogin',
    component: PCLogin,
    beforeEnter (_to, _from, next) {
      const { isLogin } = sessionStorage
      isLogin ? next({ name: 'MobHome' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const { isLogin } = sessionStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : (isLoginOrRegister ? next({ name: 'Login' }) : next())
})

export default router
