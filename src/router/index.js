import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';
import Song from '@/views/Song.vue';
import store from '@/store';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'manage',
    alias: '/manage', // set router phu. thay cho doan cmt phia duoi k can redirect: ,{ name: 'manage'}
    path: '/manage-music',
    meta: {
      requireSAuth: true,
    },
    component: Manage,
    // beforeEnter: (to, from, next) => {
    //   next();
    // },
  },
  {
    name: 'song',
    path: '/song/:id',
    component: Song,
  },
  // {
  //   path: '/manage',
  //   redirect: { name: 'manage'}
  // },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

// middleware router
router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requireSAuth)) {
    next();
    return;
  }

  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});
export default router;
