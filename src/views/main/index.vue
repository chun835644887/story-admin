<template>
	<div class="main">
		<s-side-bar></s-side-bar>
		<router-view></router-view>
	</div>
</template>

<script>
	import layout from '@/components/layout';
	import SSideBar from '@/components/s-side-bar';
	export default{
		data(){
			return {};
		},
		components: {
			layout,
			SSideBar
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
		height: 100%;
	}
</style>