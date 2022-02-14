<template>
	<div v-if="!item.hidden">
		<el-menu-item v-if="singleRoute(item)" :index="resolveRouter(item)">
				<i :class="routeinfo.meta.icon"></i>
				<span slot="title">{{routeinfo.meta.title}}</span>
		</el-menu-item>
		
		<el-submenu v-else>
				<template slot="title">
					<i :class="item.meta.icon"></i>
					<span>{{item.meta.title}}</span>
				</template>
				<SidebarItem
				  v-for="(route,index) in item.children"
				  :index='route.path'
				  :item='route'
				  :basepath='route.path'
				/>
		</el-submenu>
	</div>
</template>

<script>
	export default {
		name: 'SidebarItem',
		props: {
			item: {
				type: Object
			},
			basepath: {
				type: String
			}
		},
		data() {
			return {
				routeinfo: {}
			}
		},
		methods: {
			singleRoute(item) {
				if (!item.children) {
					console.log(item, "无")
					return false;
				} else if (item.children.length == 1) {
					this.routeinfo = item.children[0];
					return true;
				} else {
					console.log(item, "两")
					return true;
				}
			},
			resolveRouter(item, type) {
					return item.path + '/' + item.children[0].path;
			}
		}
	}
</script>

<style>
</style>