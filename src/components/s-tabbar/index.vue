<template>
	<div id="s-tabbar" class="s-tabbar">
		<div class="s-tabbar-item" @click="changeTab(menu,index)" :class="{active:index==selected}" v-for="(menu,index) in getTabMenu">
			<span class="s-tabbar-itm-icon" :class="getTabIconClass(menu)"></span>
			<div class="s-tabbar-name">{{menu.label}}</div>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux';
	import { mapGetters } from 'vuex';
	export default{
		data(){
			return {
				selected: 0
			};
		},
		components: {
			Tabbar,
			TabbarItem
		},
		computed: {
			...mapGetters([
				'getTabMenu'
			])
		},
		methods: {
			changeTab(menu,index){
				this.selected = index;
			},
			getTabIconClass(menu){
				let obj = {};
				(menu.icon||[]).forEach((key) => {
					obj[key] = true;
				});
				return obj
			}
		}
	}
</script>

<style lang="less" scoped>
	#s-tabbar{
		position: absolute;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		bottom: 0;
		height: 50px;
		width: 100%;
		padding-top: 4px;
		border-top: 1px solid rgba(33,33,33,.1);
		overflow: hidden;
		.s-tabbar-item{
			flex: 1;
			cursor: pointer;
			height: 49px;
			text-align: center;
			.s-tabbar-name{
				margin-top: 4px;
			}
		}
		.s-tabbar-item.active{
			color: #22B14C;
		}
	}
</style>