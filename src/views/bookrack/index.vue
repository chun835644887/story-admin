<template>
	<div class="h100 w100" id="book-rack">
		<s-header>
			<div slot="left" class="header-left-img"></div>
			<div slot="right" >
				<template v-for="menu in rightMenu">
					<span class="header-icon" :class="getMenuIconClass(menu)"></span>
				</template>
			</div>
		</s-header>
		<layout />
	</div>
</template>

<script>
	import Layout from '@/components/layout';
	import SHeader from '@/components/s-header';
	export default{
		data(){
			return {
				rightMenu: [{
					icon: ['fa', 'fa-paint-brush']
				}, {
					icon: ['fa', 'fa-search']
				}, {
					icon: ['fa', 'fa-sliders']
				}]
			};
		},
		components: {
			Layout,
			SHeader
		},
		methods: {
			getMenuIconClass(menu){
				let obj = {};
				(menu.icon||[]).forEach((icon) => {
					obj[icon] = true;
				});
				return obj;
			}
		}
	}
</script>

<style lang="less" scoped>
	.book-rack{
		width: 100%;
	}
</style>