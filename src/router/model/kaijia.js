import home from '@/views/layout/home.vue'

const kaijia = [
	{
		path: '/kaijia/yanlong',
		meta: { role: 'kaijia' },
		component: home,
		children: [
			{ 
				path: 'index',
				meta: { title: '炎龙', icon: 'el-icon-help' },
				component: () => import('@/views/comps/yanlong.vue')
			}
		]
	},
	{
		path: '/kaijia/heixi',
		meta: { role: 'kaijia' },
		component: home,
		children: [
			{ 
				path: 'index',
				meta: { title: '黑犀', icon: 'el-icon-circle-plus' },
				component: () => import('@/views/comps/heixi')
			}
		]
	}
];

export default kaijia;