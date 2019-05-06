<template>
	<div id="s-side-bar" class="s-side-bar" :class="{'active': !$store.getters.getShowSide}">
		<div class="user-header">
			<div class="user-info">
				<div class="user-img"></div>
				<div class="user-info-left">
					<div class="user-phone">
						{{user.phone||''}}
					</div>
					<div class="user-wealth">
						<div class="user-wealth-item">
							<div>书豆</div>
							<div>0</div>
						</div>
						<div class="user-wealth-item">
							<div>豆券</div>
							<div>0</div>
						</div>
						<div class="user-wealth-item">
							<div>月票</div>
							<div>0</div>
						</div>
					</div>
				</div>
			</div>
			<div class="user-message">
				我的消息
			</div>
		</div>
		<div class="user-content">
			<div class="user-menu-item">
				<div class="user-menu-name">我的钱包</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">我的会员</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">阅读之约</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">公益行动</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">个性换肤</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">绑兑换码</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">邀请有礼</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">我的收藏</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">我的书评</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name">意见反馈</div>
			</div>
			<div class="user-menu-item">
				<div class="user-menu-name"></div>
			</div>
		</div>
		<div class="user-footer clearfix">
			<span class="fa fa-moon-o side-night"></span>
			<span class="fa fa-cog side-setting fr"></span>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default{
		data(){
			return {

			};
		},
		computed: {
			...mapGetters([
				'user'
			])
		},
	}
</script>

<style lang="less" scoped>
	.s-side-bar{
		position: absolute;
		top: 0;
		left: 0;
		width: 80%;
		padding-left: 1em;
		padding-top: 32px;
		bottom: 0;
		background: rgba(255,255,255,0);
		color: #fff;
		visibility: visible;
		transform-origin: -100% center;
		transform: translate3d(0px, 0px, 0px) scale(0.8);
		transition: transform 350ms cubic-bezier(.165,.84,.44,1);
		.user-header{
			
			.user-info{
				display: flex;
				width: 100%;
				justify-content: space-between;
				flex-wrap: nowrap;
				align-items: center;
				.user-img{
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-image: url(~@/assets/default-user.jpg);
					background-position: center;
					background-size: 100% 100%;
				}
				.user-info-left{
					flex: 1;
					padding-left: 1.5em;
					padding-right: 1.5em;
				}
				.user-wealth{
					display: flex;
					margin-top: 1em;
					.user-wealth-item{
						flex: 1;
					}
				}
			}
			.user-message{
				height: 32px;
				line-height: 32px;
				color: #9CB0C8;
				text-align: center;
				font-size: 1em;
				border: 1px solid #283F5E;
				border-radius: 16px;
			}
		}
		.user-content{
			position: absolute;
			top: 145px;
			left: 1em;
			right: 0;
			bottom: 50px;
			overflow-y: scroll;
			padding-top: 1em;
			background: linear-gradient(rgba(255,255,255,.0) 80%, rgba(253,234,0, 0.2) 100%);
			.user-menu-item{
				height: 50px;
				font-size: 18px;
				line-height: 50px;
				.menu-item-name{

				}
			}

		}
		.user-footer{
			position: absolute;
			bottom: 0;
			height: 50px;
			left: 1em;
			right: 0;
			.side-night{
				display: inline-block;
				padding: 0 2em;
				font-size: 16px;
				line-height: 50px;
			}
			.side-setting{
				display: inline-block;
				padding: 0 1em;
				font-size: 16px;
				line-height: 50px;
			}
		}
	}
	.active{
		transform: translate3d(0px, 0px, 0px) scale(1);
	}
</style>