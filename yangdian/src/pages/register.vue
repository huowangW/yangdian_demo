<template>
	<div class="register">
		<Header>
			<template slot="left">
				<span class="iconfont">&#xe6b0;</span>
			</template>
			<template slot="center">
				<h1>注册</h1>
			</template>
			<template slot="right">
				<span>登陆</span>
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

				<div class="box">
					<label for="code">验证码:</label>
					<input type="text" id="code" class="code" v-model="code">
					<img ref="codeImage" @click="reflash()" src="http://api.imecho.cn/dodiapi/code.php?n=4&info=30$80$40">
				</div>

				<button class="submit" @click.prevent="handleSubmit()">下一步</button>

				<div class="tips">
					<input type="checkbox">
					<p>我已阅读并同意使用条款和隐私政策</p>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	export default {
		name: "register",
		components: {
			Header
		},
		data() {
			return {
				account: "",
				password: "",
				code: ""
			}
		},
		methods: {
			handleSubmit() {
				var xhr = new XMLHttpRequest()
				xhr.withCredentials = true
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4 && xhr.status == 200) {
						console.log(xhr.responseText)
					}
				}
				xhr.open("POST", "http://api.imecho.cn/dodiapi/reg.php", true)
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
				xhr.send("account=" + this.account + "&password=" + this.password)


				// 				var xhr = new XMLHttpRequest()
				// 				xhr.withCredentials = true
				// 				xhr.onreadystatechange = function() {
				// 					if (xhr.readyState == 4 && xhr.status == 200) {
				// 						console.log(xhr.responseText)
				// 					}
				// 				}
				// 				xhr.open("GET", "http://api.imecho.cn/dodiapi/vcode.php", true)
				// 				xhr.send("code=" + this.code)
			},
			reflash() {
				this.$refs.codeImage.attributes.src.nodeValue = "http://api.imecho.cn/dodiapi/code.php?n=4&info=30$100$50"
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
		justify-content: space-between;
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

	.code {
		text-align: center;
	}
</style>


<!-- ajax     原生ajax
$.ajax() jq封装过的ajax
axios    vue封装过的ajax -->
