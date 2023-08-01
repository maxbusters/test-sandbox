// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/plugins/auth.js';

const auth = useAuth();

const routes = [
  { path: '/', name: "Home", component: () => import('@/views/Home.vue') },
  { path: '/login', name: "Login", component: () => import('@/views/Login.vue') },
  { path: '/accept', name: "Accept", component: () => import('@/views/Accept.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, from) => {
  console.log(to.path);
  if (

    // make sure the user is authenticated
    !auth.user &&
    // ❗️ Avoid an infinite redirect
    to.path !== '/login'
  ) {
    return '/login'
  }
  if(to.path === '/accept' && !auth.user){
    return '/'
  }
})

export default router
