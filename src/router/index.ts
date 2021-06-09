import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/login/Login.vue'
import PCLogin from '../views/login/PCLogin.vue'
import Register from '../views/Register/Register.vue'
import PCRegister from '../views/Register/PCRegister.vue'
import PCHome from '../views/home/PCHome.vue'
import FirstPage from '../components/homepages/FirstPage.vue'
import SortPage from '../components/homepages/SortPage.vue'
import SharePage from '../components/homepages/SharePage.vue'
import ShopCart from '../components/homepages/ShopCart.vue'
import MyPage from '../components/homepages/MyPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/PCHome',
    name: 'PCHome',
    component: PCHome
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
      isLogin ? next({ name: 'FirstPage' }) : next()
    }
  }, {
    path: '/PCLogin',
    name: 'PCLogin',
    component: PCLogin,
    beforeEnter (_to, _from, next) {
      const { isLogin } = sessionStorage
      isLogin ? next({ name: 'PCHome' }) : next()
    }
  }, {
    path: '/FirstPage',
    name: 'FirstPage',
    component: FirstPage
  }, {
    path: '/SortPage',
    name: 'SortPage',
    component: SortPage
  }, {
    path: '/SharePage',
    name: 'SharePage',
    component: SharePage
  }, {
    path: '/ShopCart',
    name: 'ShopCart',
    component: ShopCart
  }, {
    path: '/MyPage',
    name: 'MyPage',
    component: MyPage
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
