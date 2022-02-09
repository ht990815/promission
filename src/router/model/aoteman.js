import home from '@/views/layout/home.vue'

module.exports = [
  // {
  //   path: "/aoteman",
  //   redirect: '/aoteman/home'
  // },
  {
    path: '/aoteman/saijia',
    name: 'saijia',
    meta: { like: 'aoteman', title: "赛迦奥特曼" },
    component: home,
    children: [
      {
        component: () => import('@/views/comps/saijia.vue')
      }
    ]
  },
  {
    path: '/aoteman/aotezhiwang',
    name: 'aotezhiwang',
    meta: { like: 'aoteman', title: "奥特之王" },
    component: () => import('@/views/comps/aotezhiwang.vue')
  },
  {
    path: "/aoteman/aotelike",
    meta: { like: 'aoteman', title: "最喜欢的奥特曼" },
    children: [
      {
        path: 'dijia',
        name: 'dijia',
        meta: { like: 'aoteman', title: "迪迦奥特曼" },
        component: () => import('@/views/comps/dijia.vue')
      },
      {
        path: 'aidi',
        name: 'aidi',
        meta: { like: 'aoteman', title: "艾迪奥特曼" },
        component: () => import('@/views/comps/aidi.vue')
      }
    ]
  },
  {
    path: '/aoteman/jieke',
    name: 'jieke',
    meta: { like: 'aoteman', title: "杰克奥特曼" },
    component: () => import('@/views/comps/jieke.vue')
  }
]