import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue";
import Dashboard from "../views/Dashboard.vue";
import ProductList from "../views/ProductList.vue";
import UserList from "../views/UserList.vue";
import HomePage from "../views/HomePage.vue"
import BannedUser from "../views/BannedUser.vue"
import NewAdmin from "../views/NewAdmin.vue"
import ProductDetail from "../views/DetailProduct.vue"
import CategoryList from "../views/CategoryList.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      children: [
        {
          path: '',
          component: Dashboard
        },
        {
          path: '/products',
          name: 'productList',
          component: ProductList
        },
        {
          path: '/products/details/:id',
          name: 'productDetails',
          component: ProductDetail
        },
        {
          path: '/users',
          name: 'userList',
          component: UserList
        },
        {
          path: '/bannedUsers',
          name: 'bannedUser',
          component: BannedUser
        },
        {
          path: '/newAdmin',
          name: 'newAdmin',
          component: NewAdmin
        },
        {
          path: '/categories',
          name: 'categories',
          component: CategoryList
        },
      ]
    },

  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.getItem('access_token')
  
  if (!isLogin && (to.path !== '/login')) {
    next('/login')
  } else if(isLogin && to.path === '/login') {
    next('/')
  } else {
    next()
  }
})
export default router

