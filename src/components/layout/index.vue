<template>
	<div class="layout w100 h100">
		<s-content></s-content>
		<s-tabbar></s-tabbar>
	</div>
</template>

<script>
	import SHeader from '@/components/s-header';
	import SContent from '@/components/s-content';
	import STabbar from '@/components/s-tabbar';
	export default{
		data(){
			return {};
		},
		components: {
			SHeader,
			SContent,
			STabbar
		}
	}
</script>

<style scoped>
	
</style>