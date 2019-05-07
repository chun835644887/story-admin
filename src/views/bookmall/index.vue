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
												<div class="right-suf" style="padding-right: 1em;">换一换<span style="padding-left: 1em;" class="fa fa-refresh"></span></div>
											</div>
										</div>
										<div class="recommend-content clearfix">
											<template v-for="item in recommendStory">
												<div class="recommend-story-item">
													<div class="recommend-story-img">
														<img src="../../assets/1.jpg" alt="">
													</div>
													<div class="recommend-story-name text-nowrap">{{item.name}}</div>
													<div class="recommend-story-author text-nowrap">{{item.author}}</div>
												</div>
											</template>
										</div>
									</div>
								</template>
								<template v-if="bestStory.length">
									<div class="seperator mt6 mb6"></div>
									<div class="recommend-story-container">
										<div class="recommend-header clearfix">
											<div class="recommend-header-left fl">
												<div class="left-pre">最好看的书</div>
											</div>
											<div class="recommend-header-right fr">
												<div class="right-suf" style="padding-right: 1em;">换一换<span style="padding-left: 1em;" class="fa fa-refresh"></span></div>
											</div>
										</div>
										<div class="recommend-content clearfix">
											<template v-for="item in bestStory">
												<div class="recommend-story-item">
													<div class="recommend-story-img">
														<img src="../../assets/1.jpg" alt="">
													</div>
													<div class="recommend-story-name text-nowrap">{{item.name}}</div>
													<div class="recommend-story-author text-nowrap">{{item.author}}</div>
												</div>
											</template>
										</div>
									</div>
								</template>
								<div class="seperator mt6 mb6"></div>
								<div class="story-block clearfix">
									<div class="story-block-item">
										<div class="block-info">
											<div class="block-name">听书专区</div>
											<div class="block-des">聆听悦读</div>
										</div>
										<div class="block-info-icon" :style="{backgroundImage:`url(${img})`}"></div>
									</div>
									<div class="story-block-item">
										<div class="block-info">
											<div class="block-name">轻小说</div>
											<div class="block-des">突破次元壁</div>
										</div>
										<div class="block-info-icon" :style="{backgroundPosition:'0px -43px',backgroundImage:`url(${img})`}"></div>
									</div>
									<div class="story-block-item">
										<div class="block-info">
											<div class="block-name">男生最爱</div>
											<div class="block-des">热血较亮</div>
										</div>
										<div class="block-info-icon" :style="{backgroundPosition:'0px -86px',backgroundImage:`url(${img})`}"></div>
									</div>
									<div class="story-block-item">
										<div class="block-info">
											<div class="block-name">女生最爱</div>
											<div class="block-des">爱恨纠缠</div>
										</div>
										<div class="block-info-icon" :style="{backgroundPosition:'0px -129px',backgroundImage:`url(${img})`}"></div>
									</div>
								</div>
								<!-- 点击上十万 -->
								<div class="seperator mt6 mb6"></div>
								<div class="story-touch-container">
									<div class="story-touch-header clearfix">
											<div class="story-touch-header-left fl">
												<div class="left-pre">点击上十万的好书</div>
											</div>
											<div class="story-touch-header-right fr">
												<div class="right-suf" style="padding-right: 1em;">换一换<span style="padding-left: 1em;" class="fa fa-refresh"></span></div>
											</div>
										</div>
									<div class="story-touch-content clearfix">
										<template v-for="(item, index) in sortTouchStory">
											<div class="story-touch-top clearfix" v-if="index==0">
												<div class="story-touch-img fl">
													<img src="../../assets/1.jpg" alt="">
												</div>
												<div class="stour-touch-info fr">
													<div class="story-touch-name text-nowrap">{{item.name}}</div>
													<div class="story-touch-des">{{item.des}}</div>
													<div class="story-touch-count">{{item.touchCount}}</div>
												</div>
											</div>
											<div class="story-touch-item clearfix" v-if="index!=0">
												<div class="story-touch-img fl">
													<img src="../../assets/1.jpg" alt="">
												</div>
												<div class="stour-touch-info fr">
													<div class="story-touch-name text-nowrap">{{item.name}}</div>
													<div class="story-touch-count">{{item.touchCount}}</div>
												</div>
											</div>
										</template>
									</div>
								</div>

								<!-- 大家都在搜索 -->
								<template v-if="hotStory.length">
									<div class="seperator mt6 mb6"></div>
									<div class="recommend-story-container">
										<div class="recommend-header clearfix">
											<div class="recommend-header-left fl">
												<div class="left-pre">大家都在搜</div>
											</div>
											<div class="recommend-header-right fr">
												<div class="right-suf" style="padding-right: 1em;">换一换<span style="padding-left: 1em;" class="fa fa-refresh"></span></div>
											</div>
										</div>
										<div class="recommend-content clearfix">
											<template v-for="item in hotStory">
												<div class="recommend-story-item">
													<div class="recommend-story-img">
														<img src="../../assets/1.jpg" alt="">
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
	import imgBase64 from '@/common/img-base64';
	const simpleslider = require('simple-slider');
	export default{
		data(){
			return {
				index: 0,
				tabIndex: 0,
				swiperIndex: 100,
				layoutStyle: {
					minHeight: '100%',
					paddingBottom: '60px'
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
				bestStory: [{
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
				hotStory: [{
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
				touchStory: [{
					name: '犯人修事传',
					img: '',
					author: '消停',
					des: '垃圾小说',
					touchCount: '20000'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停',
					des: '垃圾小说',
					touchCount: '23000'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停',
					des: '垃圾小说',
					touchCount: '69000'
				},{
					name: '犯人修事传',
					img: '',
					des: '垃圾小说',
					author: '消停',
					touchCount: '223000'
				},{
					name: '犯人修事传',
					img: '',
					author: '消停',
					des: '垃圾小士大夫士大夫asfsdf大哥撒旦发射点发射点发射点犯得上犯得上大师傅士大夫大师傅地方说',
					touchCount: '920000'
				}],
				img: imgBase64.typeIcon,
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
			sortTouchStory(){
				return this.touchStory.sort((a, b) => {
					return b.touchCount - a.touchCount;
				});
			}
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
		.story-touch-container{
			.story-touch-header{
				margin-top: .8em;
				.story-touch-header-left{
					position: relative;
					padding-left: 1em;
					font-size: 1em;
				}
				.story-touch-header-left:after{
					content: '';
				    width: .2em;
				    height: .9em;
				    display: inline-block;
				    position: absolute;
				    top: .3em;
				    left: 0;
				}
				.story-touch-header-right{
					font-size: 1em;
					
				}
			}
			.story-touch-content{
				padding-left: 1em;
				padding-right: 1em;
				.story-touch-top{
					.story-touch-img{
						width: 25%;
						img{
							width: 100%;
						}
					}
					.stour-touch-info{
						width: 65%;
						margin-left: 10%;
						.story-touch-des{
							margin-top: .2em;
							height: 2.4em;
							line-height: 1.2em;
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							line-clamp: 2;
							-webkit-box-orient: vertical;
						}
						.story-touch-name{
							margin-top: .2em;
						}
						.story-touch-count{
							margin-top: .2em;
						}
					}
				}
				.story-touch-item{
					float: left;
					width: 50%;
					.story-touch-img{
						width: 25%;
						img{
							width: 100%;
						}
					}
					.stour-touch-info{
						width: 65%;
						margin-left: 10%;
						.story-touch-name{
							margin-top: .2em;
						}
						.story-touch-count{
							margin-top: .2em;
							color: #999;
						}
					}
				}
			}
		}
		.story-block{

			.story-block-item{
				width: 50%;
				float: left;
				display: flex;
				justify-content: center;
				align-items: center;
				.block-info{
					margin-top: 1em;
					margin-bottom: 1em;
					margin-left: 1em;
					margin-right: 1em;
					.block-name{
						font-size: 1.2em;
					}
					.block-des{
						font-size: .8em;
						color: #999;
					}
				}
				.block-info-icon{
					width: 2em;
					height: 2em;
					margin-top: 1em;
					margin-bottom: 1em;
					margin-left: 1em;
					margin-right: 1em;
					background-position: 0 0;
					background-size: 100%;
					background-repeat: no-repeat;
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