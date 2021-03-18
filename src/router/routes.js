
const routes = [
  {
    path: '/login',
    component:()=>import('layouts/AuthLayout'),
    name:'login'
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name:'home',
    children: [
      { path: '', component: () => import('pages/Index.vue'),name: 'home' },
      { path: '/following', component: () => import('pages/Following'),name:'following' },
      { path: '/follower', component: () => import('pages/Follower'),name:'follower' },
      { path: '/profile', component: () => import('pages/Profile'),name:'profile' },
      { path: '/about', component: () => import('pages/About'),name:'about' },
      {
        path: '/message',
        component: () => import('pages/Message'),
        name:'message',
        children:[
          { path: '/chat', component: () => import('pages/Chat'),name:'chat' },
        ]
      },
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
