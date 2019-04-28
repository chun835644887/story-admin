<template>
	<div class="h100 w100" :class="{'content-animate': $store.getters.getShowSide}" id="book-rack">
		<s-header>
			<div slot="left" @click="toggleSide" class="header-left-img"></div>
			<div slot="right" >
				<template v-for="menu in rightMenu">
					<span class="header-icon" :class="getMenuIconClass(menu)"></span>
				</template>
			</div>
		</s-header>
		<layout></layout>
	</div>
</template>

<script>
	import Layout from '@/components/layout';
	import SHeader from '@/components/s-header';
	import { mapGetters } from 'vuex';
	import types from '@/store/types';
	export default{
		data(){
			return {
				rightMenu: [{
					icon: ['fa', 'fa-paint-brush']
				}, {
					icon: ['fa', 'fa-search']
				}, {
					icon: ['fa', 'fa-sliders']
				}],
				showSide: false
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
			},
			toggleSide(){
				this.$store.commit(types.SET_SIDE_BAR_FLAG, !this.$store.getters.getShowSide);
			}
		},
		computed: {
			...mapGetters([
				'getShowSide'
			])
		}
	}
</script>

<style lang="less" scoped>
	#book-rack{
		position: relative;
		width: 100%;
		height: 100%;
		background: #f69;
		transition: transform 350ms cubic-bezier(.165,.84,.44,1);
	}
</style>