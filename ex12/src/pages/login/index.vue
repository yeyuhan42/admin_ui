<template>
	<div id="login">
		<div class="login-top">
			<img src="" alt="">
		</div>
		<div class="login-middle">
			<div class="login-box">
				<ul class="login-form">
					<li>
						<input type="text" placeholder="请输入用户名" v-model='account' @keyup.enter="nextInput">
						<img src="../../assets/login/login_user.png" alt="">
					</li>
					<li>
						<input class="next-input" type="password" placeholder="请输入密码" v-model='password' @keyup.enter="toLogin">
						<img src="../../assets/login/login_pass.png" alt="">
					</li>
					<li>
						<el-button type="primary mg-b-20" class="loginBtn" @click='toLogin' :loading="loading">登录</el-button>
					</li>
				</ul>
			</div>
		</div>
		<div class="login-bottom">
			<img src="../../assets/login/bottom-left.png" alt="">
			<span>雀美姿</span>
			<img src="../../assets/login/bottom-right.png" alt="">
		</div>
	</div>
</template>

<script>
	import { getUrl } from '../../utils/common.js'
	export default {
		name: 'Login',
		data() {
			return {
				account: '', //用户账号
				password: '', //用户密码
				vcode: '', //验证码
				err: '',
				userInfo: {}, //用户信息
				code_size: 20,
				code_width: 100,
				code_height: 40,
				imgUrl: '',
				loading: false,
			}
		},
		methods: {
			nextInput: function() {
				$('.next-input').focus()
			},
			//登陆
			toLogin() {
				var _this = this;
				_this.$router.push({
					path: '/home/children/product/product-management'
				});
				return
				//判断是否输入用户名密码为空
				if(this.account == '' || this.password == '' || this.vcode == '') {
					this.err = '您的用户名或密码或验证码输入为空'
					return
					//判断输入是否含有非法字符
				} else if(!this.$tools.IllegalCharacter(this.account) && this.$tools.IllegalCharacter(this.password)) {
					this.err = '您的输入含有非法字符'
					return
				} else {					
					//账号密码登陆
					_this.loading = true;
					_this.$post('/User/Login', {
							account: this.account,
							password: this.password,
							vcode: this.vcode
						})
						.then((res) => {
							console.log(res)
							//登陆结果判断
							if(res.code === 0) {
								setTimeout(function() {
									_this.loading = false;
									_this.err = '登录成功'
									_this.$router.push({
										path: '/home/children/product/product-management'
									});
								}, 1000)
							} else {
								_this.err = res.msg
								_this.loading = false;
							}
						})
				}

			}

		}
	}
</script>

<style scoped>
	#login {
		height: 100%;
		position: relative;
	}
	
	.login-top {
		height: 97px;
		position: relative;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		position: absolute;
		width: 100%;
	}
	
	.login-top img:nth-child(1) {
		height: 53px;
		margin-top: 22px;
		margin-left: 10%;
	}
	
	.login-top img:nth-child(2) {
		height: 50px;
		margin-top: 23.5px;
		margin-right: 5.6%;
		float: right;
	}
	
	.login-middle {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 99px;
		background: url(../../assets/login/bg.png) no-repeat center/cover;
	}
	
	.login-middle .login-box {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		padding-left: 38%;
	}
	
	.login-middle .login-box .login-form {
		background: #fff;
		display: inline-block;
		vertical-align: middle;
		text-align: center;
		padding-left: 38px;
		padding-right: 38px;
		border-radius: 7px;
	}
	
	.login-middle .login-box .login-form li:nth-child(1),
	.login-middle .login-box .login-form li:nth-child(2),
	.login-middle .login-box .login-form li:nth-child(3) {
		position: relative;
	}
	
	.login-middle .login-box .login-form li:nth-child(1) input,
	.login-middle .login-box .login-form li:nth-child(2) input,
	.login-middle .login-box .login-form li:nth-child(3) input {
		width: 332px;
		height: 46px;
		border-radius: 46px;
		border: 1px solid #ebebeb;
		padding-left: 44px;
		padding-right: 15px;
		margin-bottom: 20px;
	}
	
	.login-middle .login-box .login-form li:nth-child(1) input.on,
	.login-middle .login-box .login-form li:nth-child(2) input.on,
	.login-middle .login-box .login-form li:nth-child(3) input.on {
		border-color: #36a5ff;
	}
	
	.login-middle .login-box .login-form li:nth-child(1) img,
	.login-middle .login-box .login-form li:nth-child(2) img {
		height: 24px;
		position: absolute;
		left: 13px;
		top: 11px;
	}
	
	.login-middle .login-box .login-form li:nth-child(3) img {
		height: 24px;
		position: absolute;
		right: 23px;
		top: 11px;
	}
	
	.login-middle .login-box .login-form li:nth-child(2) img {
		left: 15px;
	}
	
	.login-middle .login-box .login-form li:nth-child(1) {
		margin-top: 72px;
	}
	
	.login-middle .login-box .login-form li:nth-child(2) {
		margin-top: 0;
	}
	
	.login-middle .login-box .login-form li:nth-child(3) span {
		display: block;
		text-align: left;
		margin-left: 44px;
		color: #ff0000;
		margin-top: 9px;
		margin-bottom: 23px;
		height: 21px;
	}
	
	.login-middle .login-box .login-form li:nth-child(4) {
		margin-bottom: 72px;
	}
	
	.login-middle .login-box .login-form li:nth-child(4) span {
		width: 332px;
		height: 46px;
		border-radius: 46px;
		display: block;
		line-height: 46px;
		background: #36a5ff;
		color: #fff;
		font-size: 21px;
	}
	
	.login-middle .login-box:after {
		content: "";
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	}
	
	.login-bottom {
		height: 99px;
		text-align: center;
		padding-top: 37.5px;
		position: absolute;
		top: auto;
		bottom: 0;
		width: 100%;
	}
	
	.login-bottom span {
		display: inline-block;
		vertical-align: middle;
		color: #999999;
		font-size: 18px;
		margin-left: 56px;
		margin-right: 54px;
	}
	
	.login-bottom img {
		vertical-align: middle;
	}
	
	@media (max-width: 1300px) {
		.login-middle .login-box {
			padding-left: 64%;
		}
	}
	
	@media (max-width: 1160px) {
		.login-middle .login-box {
			padding-left: 60%;
		}
	}
	.loginBtn {
		width: 250px;
		height: 50px;
		border-radius: 25px;
	}
</style>