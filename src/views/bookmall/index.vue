<template>
	<div id="bookmall" class="bookmall bgW mh100">
		<div class="bookmall-container">
			<s-header :enabledBorder="false">
				<div slot="left" style="width: 2em;"></div>
				<tab custom-bar-width="20px" v-model="tabIndex" slot="center">
					<tab-item @on-item-click="changeTab" :selected="tabIndex==i" v-for="(type, i) in types">
						{{type.name}}
					</tab-item>
				</tab>
				<div slot="right" class="book-mall-search">
					<span class="fa fa-search book-mall-search"></span>
				</div>
			</s-header>
			<layout :layoutStyle="layoutStyle">
				<div slot="content">
					<transition name="side">
						<div class="high-quality" v-show="tabIndex===0">
		        			<div style="height: 120px;overflow: hidden;" :id="siderId">
		        				<template v-for="item in list">
		        					<img width="100%" :src="item.img" />
		        				</template>
		        			</div>
								<div class="type-list-container">
									<div class="type-list-item">
										<div class="type-icon"></div>
										<div class="type-name">分类</div>
									</div>
									<div class="type-list-item">
										<div class="type-icon"></div>
										<div class="type-name">榜单</div>
									</div>
									<div class="type-list-item">
										<div class="type-icon"></div>
										<div class="type-name">会员</div>
									</div>
									<div class="type-list-item">
										<div class="type-icon"></div>
										<div class="type-name">完结</div>
									</div>
									<div class="type-list-item">
										<div class="type-icon"></div>
										<div class="type-name">出版</div>
									</div>
								</div>
								<div class="seperator mt6 mb6"></div>
								<template v-if="recommendStory.length">
									<div class="recommend-story-container">
										<div class="recommend-header clearfix">
											<div class="recommend-header-left fl">
												<div class="left-pre">精品汇聚</div>
											</div>
											<div class="recommend-header-right fr">
												<div class="right-suf">换一换<span style="padding-left: 1em;" class="fa fa-refresh"></span></div>
											</div>
										</div>
										<div class="recommend-content">
											<template v-for="item in recommendStory">
												<div class="recommend-story-item">
													<div class="recommend-story-img">
														<img src="../../assets/story_default.jpg" alt="">
													</div>
													<div class="recommend-story-name text-nowrap">{{item.name}}</div>
													<div class="recommend-story-author text-nowrap">{{item.author}}</div>
												</div>
											</template>
										</div>
									</div>
								</template>
							</div>
					</transition>

					<transition name="side">
						<div v-show="tabIndex===1" class="high-quality" >
							aa
							</div>
					</transition>

					<transition name="side">
						<div v-show="tabIndex===2" class="high-quality" >
								ss
							</div>
					</transition>

					<transition name="side">
						<div v-show="tabIndex===3" class="high-quality" >
								dd
							</div>
					</transition>
				</div>
			</layout>
		</div>
	</div>
</template>

<script>
	import SHeader from '@/components/s-header';
	import Layout from '@/components/layout';
	import { Tab, TabItem, Swiper, SwiperItem } from 'vux';
	const simpleslider = require('simple-slider');
	export default{
		data(){
			return {
				index: 0,
				tabIndex: 0,
				swiperIndex: 100,
				layoutStyle: {
					minHeight: '100%'
				},
				types: [{
					name: '精选',
					code: 'quality',
					path: '',
				},{
					name: '女生',
					code: 'girl'
				},{
					name: '男生',
					code: 'boy'
				},{
					name: '漫画',
					code: 'cartoon'
				}],
				selected: 'quality',
				list: [{
				  url: 'javascript:',
				  img: 'https://tse4-mm.cn.bing.net/th?id=OIP.2pu9ddmBWHn4GFtLOPdKRAHaEo&w=300&h=187&c=7&o=5&dpr=2&pid=1.7',
				  title: '送你一朵fua'
				}, {
				  url: 'javascript:',
				  img: 'https://tse4-mm.cn.bing.net/th?id=OIP.uVuu9qA_5PdBpRIMnL6R2QHaEX&w=300&h=177&c=7&o=5&dpr=2&pid=1.7',
				  title: '送你一次旅行',
				  fallbackImg: 'https://static.vux.li/demo/3.jpg'
				},{
				  url: 'javascript:',
				  img: 'https://tse1-mm.cn.bing.net/th?id=OIP.8wXMDgYR0Piu9A-46ZwdewHaEX&w=183&h=168&c=7&o=5&dpr=2&pid=1.7',
				  title: '送你一朵fua'
				}, {
				  url: 'javascript:',
				  img: 'https://tse1-mm.cn.bing.net/th?id=OIP.0FvTHVsrxCGFmRksLVKb6gHaEX&w=236&h=160&c=7&o=5&dpr=2&pid=1.7',
				  title: '送你一次旅行',
				  fallbackImg: 'https://static.vux.li/demo/3.jpg'
				}],
				recommendStory: [{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停'
				}],
				slmpleSlider: null,
				siderId: Date.now()
			};
		},
		components: {
			SHeader,
			Layout,
			Tab,
			TabItem,
			Swiper,
			SwiperItem
		},
		computed: {
			
		},
		methods: {
			changeSwiper(index){
				if(index > 99){
					this.tabIndex = index  - 100;
				}else{
					this.tabIndex = index;
				}

			},
			changeTab(index){
				this.swiperIndex = index + 100;
				if(this.swiperIndex == 100){

				}
			}
		},
		mounted(){
			simpleslider.getSlider({
			    container: document.getElementById(this.siderId),
			    children: document.getElementById(this.siderId).children,
			 });
		}
	}
</script>

<style lang="less" scoped>
	#bookmall{
		position: relative;
		height: 100%;
		overflow: scroll;
		.bookmall-container{
			padding-top: 46px;
			min-height: 100%;
		}
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
		.vux-swiper{
			height: auto !important;
		}
		.vux-slider{
			height: auto !important;
		}
		.recommend-story-container{
			.recommend-header{
				margin-top: .8em;
				.recommend-header-left{
					position: relative;
					padding-left: 1em;
					font-size: 1em;
				}
				.recommend-header-left:after{
					content: '';
				    width: .2em;
				    height: .9em;
				    display: inline-block;
				    position: absolute;
				    top: .3em;
				    left: 0;
				}
				.recommend-header-right{
					font-size: 1em;
					
				}
			}
			.recommend-content{
				.recommend-story-item{
					float: left;
					width: 22%;
					padding-right: 3%;
					margin-top: 1em;
					.recommend-story-img{
						img{
							width: 100%;
						}
					}
					.recommend-story-name{
						font-size: .8em;
					}
					.recommend-story-author{
						font-size: .7em;
						color: #999;
					}
				}

			}
		}
		.high-quality{

			.type-list-container{
				display: flex;
				justify-content: space-between;
				margin-top: 1em;
				.type-list-item{
					width: 20%;
					height: 6em;
					text-align: center;
					color:#999;
					.type-icon{
						width: 44px;
						height: 44px;
						background-position: 0 0;
    					background-size: 44px;
						font-size: 2em;
						margin: .5em auto 0 auto;
					}
					.type-name{
						font-size: .8em;
						margin-top: .5em;
					}
				}
				.type-list-item:nth-child(1){
					.type-icon{
						background-position: 0 0;
						background-image: url(~@/./assets/story-type.png);
					}
				}
				.type-list-item:nth-child(2){
					.type-icon{
						background-position: 0 44px;
						background-image: url(~@/./assets/story-type.png);
					}
				}
				.type-list-item:nth-child(3){
					.type-icon{
						background-position: 88px;
						background-image: url(~@/./assets/story-type.png);
					}
				}
				.type-list-item:nth-child(4){
					.type-icon{
						background-position: 0 132px;
						background-image: url(~@/./assets/story-type.png);
					}
				}
				.type-list-item:nth-child(5){
					.type-icon{
						background-position: 0 176px;
						background-image: url(~@/./assets/story-type.png);
					}
				}
			}
			.recommend-story-container{
				padding-left: 1em;
				.recommend-header{
					.recommend-header-left:after{
						background: #00c98d;
					}
					.recommend-header-right{
						.fa{
							color: #999;
						}
					}
				}
			}
		}
	}
</style>