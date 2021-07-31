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
import Settlement from '../components/MobShopCart/Settlement.vue'

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
      isLogin ? window.location.href = 'https://www.jd.com/?cu=true&utm_source=haosou-search&utm_medium=cpc&utm_campaign=t_262767352_haosousearch&utm_term=10606713393_0_96107c3f6fa54df59edd3487da601133' : next()
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
  }, {
    path: '/ShopCart/Settlement',
    name: 'Settlement',
    component: Settlement
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
