<template>
	<div class="layout " :style="layoutStyle">
		<slot name="content"></slot>
		<s-tabbar></s-tabbar>
	</div>
</template>

<script>
	import STabbar from '@/components/s-tabbar';
	export default{
		props: {
			bottom:{
				type: Number,
				default(){
					return 55;
				}
			},
			top: {
				type: Number,
				default(){
					return 46;
				}
			},
			layoutStyle: {
				type: Object,
				default: {}
			}
		},
		data(){
			return {};
		},
		components: {
			STabbar
		}
	}
</script>

<style scoped>
	.layout{
		padding-bottom: 55px;
	}
	.page-content{
		position: relative;
	}
</style>