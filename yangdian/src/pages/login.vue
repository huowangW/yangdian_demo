<template>
	<div class="login">
		<Header>
			<template slot="left">
				<span class="iconfont">&#xe6b0;</span>
			</template>
			<template slot="center">
				<h1>登陆</h1>
			</template>
			<template slot="right">
				<span>注册</span>
			</template>
		</Header>

		<div class="main">
			<form>
				<div class="box">
					<label for="tel">手机号:</label>
					<input type="tel" id="tel" v-model="account">
				</div>

				<div class="box">
					<label for="psw">密码:</label>
					<input type="password" id="psw" v-model="password">
				</div>

				<span class="forget">忘记密码</span>

				<button class="submit" @click.prevent="handleSubmit()">登陆</button>
			</form>
		</div>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	export default {
		name: "login",
		components: {
			Header
		},
		data(){
			return{
				"account":"",
				"password":""
			}
		},
		methods:{
			handleSubmit(){
				var that = this
				var xhrLogin = new XMLHttpRequest()
				xhrLogin.withCredentials = true
				xhrLogin.onreadystatechange = function() {
					if (xhrLogin.readyState == 4 && xhrLogin.status == 200) {
						var value = JSON.parse(xhrLogin.responseText).code
						if(value === "100"){
							that.$router.push('/User')
						}
					}
				}
				xhrLogin.open("POST", "http://api.imecho.cn/dodiapi/login.php", true)
				xhrLogin.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				xhrLogin.send("account=" + this.account + "&password=" + this.password)
			}
		}
	}
</script>
<style scoped>
	.main form {
		width: 600px;
		margin: 0 auto;
		margin-top: 130px;
	}

	.main form .box {
		height: 122px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #8f8f8f;
	}

	.main form .box label {
		font-size: 32px;
		width: 110px;
		text-align: justify;
		height: 32px;
	}

	.main form .box label::after {
		content: "";
		display: inline-block;
		width: 100%;
	}

	.main form .box .get {
		font-size: 28px;
		background: none;
		color: #fe0041;
	}

	.main form .box input {
		flex: 1;
		height: 100px;
		padding-left: 10px;
	}

	.main form .submit {
		height: 100px;
		background: #ff9900;
		width: 100%;
		font-size: 32px;
		border-radius: 10px;
		color: #fff;
		margin: 50px 0;
	}

	.main form .tips {
		display: flex;
	}

	.main form .tips input {
		margin-right: 20px;
	}

	.main form .tips p {
		font-size: 28px;
		color: #666666;
	}
	.forget{
		display: block;
		text-align: right;
		margin-top: 30px;
		font-size: 28px;
	}
</style>
