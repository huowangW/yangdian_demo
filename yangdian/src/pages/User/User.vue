<template>
	<div class="User">
		<Header>
			<template slot="left">
				<span class="iconfont">&#xe630;</span>
			</template>
			<template slot="center">
				<h1>个人中心</h1>
			</template>
			<template slot="right">
				<span class="iconfont">&#xe66f;</span>
			</template>
		</Header>

		<div class="bg">
			<div class="head_image">
				<div class="head_image_bg">
					<img src="" alt="">
				</div>
				<p>点击登录</p>
			</div>
		</div>

		<div class="collect">
			<span class="iconfont heart">&#xe755;</span>
			<span>我的收藏</span>
			<span>
				(
				<span></span>
				)
			</span>
		</div>

		<div class="order">
			<div class="order-title">
				<span>我的订单</span>
				<span>查看全部订单</span>
			</div>
			<ul class="order-type-list">
				<li>
					<span class="count-box">
						<span class="iconfont">&#xe600;</span>
						<b class="count"></b>
					</span>
					<p>待付款</p>
				</li>
				<li>
					<span class="count-box">
						<span class="iconfont">&#xe605;</span>
						<b class="count">1</b>
					</span>
					<p>待发货</p>
				</li>
				<li>
					<span class="count-box">
						<span class="iconfont">&#xe60c;</span>
						<b class="count">2</b>
					</span>
					<p>待收款</p>
				</li>
				<li>
					<span class="count-box">
						<span class="iconfont">&#xe638;</span>
						<b class="count"></b>
					</span>
					<p>待评价</p>
				</li>
				<li>
					<span class="count-box">
						<span class="iconfont">&#xe75a;</span>
						<b class="count"></b>
					</span>
					<p>退款/售后</p>
				</li>
			</ul>
		</div>

		<div>
			测试:
			<button @click="ADD({value:10})">增加</button>
			<button @click="reduce()">减少</button>
			<p>{{a}}</p>
			<p>{{b}}</p>
		</div>

		<div class="test-box">
			<div class="testa"></div>
			<div class="testb"></div>
		</div>

		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Header from '@/components/Header'
	import {
		mapState
	} from 'vuex'
	import {
		mapMutations
	} from 'vuex'
	export default {
		name: "User",
		components: {
			Header
		},
		computed: {
			...mapState(["a", "b"])
		},
		methods: {
			// 			add(){
			// 				this.$store.commit({
			// 					type:"ADD",
			// 					value:10
			// 				})
			// 			},
			// 			reduce(){
			// 				this.$store.commit('reduce')
			// 			}
			...mapMutations(['ADD', 'reduce'])
		}
	}
</script>
<style scoped lang="less">
	/* .bg{
	width: 100%;
	height: 200px;
	background: #ff9900;
	position: relative;
}
.bg .head_image{
	width: 208px;
	height: 272px;
	position: absolute;
	bottom: -138px;
	left: 0;
	right: 0;
	margin: auto;
}
.bg .head_image .head_image_bg{
	width: 182px;
	height: 182px;
	border-radius: 50%;
	background: #e6dfdf;
	border: 13px solid #fff;
	overflow: hidden;
}
.bg .head_image .head_image_bg img{
	width: 100%;
	height: 100%;
}
.bg .head_image p{
	text-align: center;
	font-size: 32px;
}

.collect{
	margin-top: 132px;
	height: 130px;
	display: flex;
	align-items: center;
}
.collect .heart{
	color: red;
	font-size: 36px;
}

.order .order-title{
	height: 123px;
	font-size: 33px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 0 45px;
	border-bottom: 1px solid #b3b3b3;
	align-items: center;
}
.order-type-list{
	height: 188px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.order-type-list li{
	text-align: center;
}
.order-type-list li .iconfont{
	font-size: 47px;
	color: #aaaaaa;
}
.order-type-list li p{
	color: #aaaaaa;
}
.count-box{
	position: relative;
}
.count-box .count{
	position: absolute;
	width: 38px;
	height: 38px;
	top: -19px;
	right: -19px;
	background: #ff0000;
	color: #fff;
	font-size: 18px;
	text-align: center;
	line-height: 38px;
	border-radius: 50%;
} */

</style>
