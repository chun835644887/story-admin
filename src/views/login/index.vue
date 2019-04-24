<template>
	<div style="height: 100%;padding: 0 2rem;">
		<div id="login-container">
			<div class="input-wrap">
				<div class="header">
					<span class="active">登陆</span>
					<span>注册</span>
				</div>
				<div class="input-item">
					<!-- <input type="text" name="account" placeholder="请输入账号" /> -->
					<x-input type="text" title="账号：" placeholder="请输入账号" v-model="account"></x-input>
				</div>
				<div class="input-item">
					<x-input title="密码：" v-model="pwd"></x-input>
					<!-- <input type="password" name="account" placeholder="请输入账号" /> -->
				</div>
				<div class="input-item clearfix">
					<div class="fl w55">
						<x-input v-model="captchaText"></x-input>
					</div>
					<div class="fr w45">
						<div @click="getCaptcha" v-html="captcha.data"></div>
					</div>
				</div>
				<div class="input-item">
					<x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="submit">登陆</x-button>
				</div>
			</div>
		</div>
		<div class="bg"></div>
		<div class="bg-mask"></div>
	</div>
</template>
<script>
	import {XButton, XInput} from 'vux';
	export default{
		data(){
			return {
				captcha: {},
				gradients: ['#f60', '#294'],
				account: '',
				pwd: '',
				captchaText: ''
			};
		},
		methods: {
			submit(){
				if(this.account.trim() == ''){
					this.$vux.toast.show({
					 	text: '账号不能为空！',
					 	type: 'warn',
					 	position: 'middle'
					});
				}else if(this.pwd.trim() == ''){
					this.$vux.toast.show({
					 	text: '密码为空！',
					 	type: 'warn',
					 	position: 'middle'
					});
				}else if(this.captchaText != this.captcha.text){
					this.$vux.toast.show({
						text: '验证码不正确！',
						type: 'warn',
						position: 'middle'
					});
				}
				this.axios.post('/hair/user/login', {
					account: this.account,
					pwd: this.pwd
				}).then((res) => {
					console.log(res);
				})

			},
			getCaptcha(){
				this.axios.get('/hair/login/captcha', {}).then((res) => {
					this.$set(this,'captcha',res.data);
				});
			}
		},
		components: {
			XButton,
			XInput
		},
		beforeMount(){
			this.getCaptcha();
		}
	}
</script>
<style scoped>
	.bg{
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url(~@/./assets/bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: center center;
		filter: blur(5px);/*模糊效果*/
	}
	.bg-mask{
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.5);
	}
	#login-container{
		height: 100%;
		width: 100%;
		position: relative;
		z-index: 11;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#login-container .input-wrap{
		flex: 1;
	}
	#login-container .header{
		padding: 0rem 0 1rem 0;
		font-size: 1.5rem;
		color: #ffffff;
		text-align: left;
	}
	#login-container .header span{
		display: inline-block;
		padding: 4px;
		font-size: 1rem;
		transform: scale(.8);
		opacity: .7;
	}
	#login-container .header span.active{
		font-size: 1.5rem;
		transform: scale(1);
		opacity: 1;

	}
	.input-item{
		border-bottom: 1px solid rgba(255,255,255,.5);
		margin: 2rem 0 0 0;
	}
	.input-item.clearfix{
		border: none;
	}
	.input-item.clearfix .fl{
		border-bottom: 1px solid rgba(255,255,255,.5);
	}
	.input-item input{
		display: block;
		box-sizing: border-box;
    	width: 100%;
    	padding: 0 1rem 0 2rem;
    	line-height: 2.5rem;
    	background-image: none;
		border-top-width: 0;
	    border-left-width: 0;
	    border-right-width: 0;
	    border-width: 1px;
		border: none;
	    outline: none;
	    border-radius: 2rem;
	    -webkit-border-radius: 2rem;
	    background-color:transparent;
	}
</style>