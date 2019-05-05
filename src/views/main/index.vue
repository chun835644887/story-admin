<template>
	<div class="main">
		<div class="side-bg"></div>
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
	.side-bg{
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(~@/./assets/main1.jpg);
		background-size: 100% 100%;
		background-position: 0 0;
	}
</style>