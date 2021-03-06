
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name:'home',
    children: [
      { path: '', component: () => import('pages/Index.vue'),name: 'home' },
      { path: '/message', component: () => import('pages/Message'),name:'message' },
      { path: '/following', component: () => import('pages/Following'),name:'following' },
      { path: '/follower', component: () => import('pages/Follower'),name:'follower' },
      { path: '/profile', component: () => import('pages/Profile'),name:'profile' },
      { path: '/about', component: () => import('pages/About'),name:'about' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
