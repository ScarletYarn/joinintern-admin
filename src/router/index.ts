import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/video'
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    meta: { requireLogin: true }
  },
  {
    path: '/video',
    name: 'video',
    component: () =>
      import(/* webpackChunkName: "video" */ '@/views/VideoPage.vue'),
    meta: { requireLogin: true }
  },
  {
    path: '/post',
    name: 'post',
    component: () =>
      import(/* webpackChunkName: "post" */ '@/views/PostPage.vue'),
    meta: { requireLogin: true }
  },
  {
    path: '/post/:postId',
    name: 'post detail',
    component: () =>
      import(/* webpackChunkName: "postDetail"*/ '@/views/PostDetail.vue'),
    meta: { requireLogin: true },
    props: true
  },
  {
    path: '/user/:userId',
    name: 'user detail',
    component: () =>
      import(/* webpackChunkName: "userDetail" */ '@/views/UserDetail.vue'),
    meta: { requireLogin: true },
    props: true
  },
  {
    path: '/video/:videoId',
    name: 'video detail',
    component: () =>
      import(/* webpackChunkName: "videoDetail" */ '@/views/VideoDetail.vue'),
    meta: { requireLogin: true },
    props: true
  },
  {
    path: '*',
    name: 'default',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
