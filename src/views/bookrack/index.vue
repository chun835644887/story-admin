<template>
	<div class="" :class="{'content-animate': !$store.getters.getShowSide}" id="book-rack">
		<div class="page-bookrack-content">
			<s-header>
				<div slot="left" @click="toggleSide" class="header-left-img"></div>
				<div slot="right" >
					<template v-for="menu in rightMenu">
						<span class="header-icon" @click="menu.handle" :class="getMenuIconClass(menu)"></span>
					</template>
				</div>
			</s-header>
			<layout>
				<div slot="content">
					<div class="bookrack-header">
						<div v-if="!collection.length" class="no-story">
							<div class="no-story-tip">Hi~终于等到你</div>
							<div class="no-story-btn">去书城看看</div>
						</div>
						<div v-if="collection.length" class="last-read-story clearfix">
							<div class="fl story-img"></div>
							<div class="fl story-info">
								<div class="story-name">
									凡人修仙传
								</div>
								<div class="read-info">
									<span>
										读至{{readPer}}%
									</span>
									<span class="read-continue">继续阅读<span class="fa fa-angle-right"></span></span>
								</div>
							</div>
						</div>
					</div>
					<div style="position: relative;height: 50px;">
						<div class="waveWrapper waveAnimation">
							<div class="waveWrapperInner bgTop">
								<div class="wave waveTop"></div>
							</div>
							<div class="waveWrapperInner bgMiddle">
								<div class="wave waveMiddle"></div>
							</div>
							<div class="waveWrapperInner bgBottom">
								<div class="wave waveBottom"></div>
							</div>
						</div>
					</div>
					<div class="bookrack-content">
						<div v-if="!collection.length" class="clearfix no-collection">
							<div class="no-collection-item">
								<div>
									<span class="fa fa-fire"></span>
								</div>
								<div>
									热书推荐
								</div>
							</div>
							<div class="no-collection-item">
								<div>
									<span class="fa fa-cloud-upload"></span>
								</div>
								<div>
									本地导入
								</div>
							</div>
							<div class="no-collection-item">
								<div>
									<span class="fa fa-wifi"></span>
								</div>
								<div>
									wifi传书
								</div>
							</div>
						</div>
						<div v-if="collection.length" class="collection-container clearfix">
							<div class="collection-story-item fl" v-for="col in collection">
								<div class="collection-story-img"></div>
								<div class="collection-story-name">{{col.name}}</div>
							</div>
						</div>
					</div>
				</div>
			</layout>
		</div>
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
					icon: ['fa', 'fa-paint-brush'],
					handle: this.getUser
				}, {
					icon: ['fa', 'fa-search'],
					handle: this.getUser
				}, {
					icon: ['fa', 'fa-sliders'],
					handle: this.getUser
				}],
				showSide: false,
				collection: [{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				},{
					img: '',
					name: '小说'
				}],
				readPer: 10.0
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
			},
			getUser(){
				this.axios.get('/custom/all', {}).then((res) => {
					console.log(res);
				});
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
		height: 100%;
		overflow: scroll;
		background: #fff;
		transition: transform 350ms cubic-bezier(.165,.84,.44,1);
		.page-bookrack-content{
			overflow-y: scroll;
			background-image: url(~@/./assets/main1.jpg);
			background-repeat: no-repeat;
			background-size: 375px 235px;
			padding-top: 46px;
			.bookrack-header{
				position: relative;
				height: 140px;
				text-align: center;
				.no-story{
					padding-top: 30px;
					color:#fff;
					font-size: 18px;
				}
				.no-story-btn{
					display: inline-block;
					width: 6em;
					padding: .5em 1em;
					margin-top: 20px;
					background-color: rgba(255,255,255,.5);
					border-radius: .7em;
				}
				.last-read-story{
					padding-top: 15px;
					padding-left: 1.5em;
					padding-right: 1.5em;
					color:#fff;
					.story-img{
						width: 90px;
						height: 120px;
						background-image: url(~@/./assets/1.jpg);
						background-size: 100% 100%;
					}
					.story-info{
						padding-left: 1.5em;
						margin-top: 40px;
						text-align: left;
						.story-name{
							font-size: 20px;
							line-height: 40px;
						}
						.read-info{
							color: rgba(255,255,255,.5);
							.read-continue{
								display: inline-block;
								padding: .5em 1em;
								.fa-angle-right{
									display: inline-block;
									text-align: center;
									width: 1em;
									height: 15px;
									margin-left: .2em;
									line-height: 15px;
									background-color: rgba(255,255,255,.5);
									border-radius: 50%;
								}
							}
						}
					}
				}
			}
			.no-collection{
				width: 330px;
				margin: 1em auto;
				display: flex;
				justify-content: space-between;
				.no-collection-item{
					width: 100px;
					height: 150px;
					background-color: rgba(0,0,0,.35);
					text-align: center;
					div:first-child{
						margin-top: 40px;
						font-size: 2em;
					}
					div:last-child{
						margin-top: 6px;
						color: rgba(0,0,0, .5);
						font-size: 12px;
					}
				}
			}
			.collection-container{
				padding-left: 1.5em;
				padding-right: 1.5em;
				.collection-story-item{
					width: 90px;
					height: 160px;
					.collection-story-img{
						background-image: url(~@/./assets/1.jpg);
						background-position: 0 0;
						background-size: 100% 100%;
						background-repeat: no-repeat;
						height: 130px;
						width: 90px;
					}
					.collection-story-name{
						text-align: center;
						 white-space:nowrap;
						 text-overflow:ellipsis;
						 overflow:hidden;
					}
				}
				.collection-story-item:nth-child(3n-1){
					margin-left: 1.5em;
					margin-right: 1.5em;
				}
			}
		}
	}
</style>