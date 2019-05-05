<template>
	<div id="bookmall" class="bookmall bgW mh100">
		<s-header :enabledBorder="false">
			<div slot="left" style="width: 2em;"></div>
			<tab custom-bar-width="20px" slot="center">
				<tab-item v-for="type in types">
					{{type.name}}
				</tab-item>
			</tab>
			<div slot="right" class="book-mall-search">
				<span class="fa fa-search book-mall-search"></span>
			</div>
		</s-header>
		<layout>
			<div>dd</div>
		</layout>
	</div>
</template>

<script>
	import SHeader from '@/components/s-header';
	import Layout from '@/components/layout';
	import { Tab, TabItem } from 'vux';
	export default{
		data(){
			return {
				types: [{
					name: '精选',
					code: '',
					path: '',
				},{
					name: '女生'
				},{
					name: '男生'
				},{
					name: '漫画'
				}],
				selected: '精选' 
			};
		},
		components: {
			SHeader,
			Layout,
			Tab,
			TabItem
		}
	}
</script>

<style lang="less" scoped>
	#bookmall{
		position: relative;
		.book-mall-type{
			text-align: center;
			.type-item{
				width: 25%;
				height: 46px;
				line-height: 46px;
			}
		}
		.book-mall-search{
			text-align: right;
			line-height: 44px;
			width: 2em;
			font-size: 1em;
		}
	}
</style>