import home from '@/views/layout/home.vue'

const aoteman = [
	{
		path: '/aoteman/jieke',
		meta: { role: 'aoteman' },
		component: home,
		children: [
			{
				path: 'index',
				meta: { title: '杰克', icon: 'el-icon-s-goods' },
				component: () => import('@/views/comps/jieke.vue')
			}
		]
	},
	{
		path: '/aoteman/like',
		meta: { title: '喜欢的aoteman', role: 'aoteman', icon: 'el-icon-star-off' },
		component: home,
		children: [
			{
				path: 'index',
				meta: { title: '赛迦' },
				component: () => import('@/views/comps/saijia.vue')
			},
			{
				path: 'aotezhiwang',
				meta: { title: '奥特之王' },
				component: () => import('@/views/comps/aotezhiwang.vue')
			}
		]
	},
	{
		path: '/aoteman/dijia',
		meta: { role: 'aoteman' },
		component: home,
		children: [
			{
				path: 'index',
				meta: { title: '迪迦', icon: 'el-icon-info' },
				component: () => import('@/views/comps/dijia.vue'),
			}
		]
	},
	{
		path: '/aoteman/aidi',
		meta: { role: 'aoteman' },
		component: home,
		children: [
			{
				path: 'index',
				meta: { title: '艾迪', icon: 'el-icon-s-help' },
				component: () => import('@/views/comps/aidi.vue')
			}
		]
	}
]

export default aoteman;
