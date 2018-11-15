<template>
	<div class="publicPraise">
		<div class="praise-title">
			<ul>
				<li 
					:class="active === index ? 'on' : null "
					v-for="(item,index) of title"
					:key="item.id"
					@click="handleClick(index)"
				>
					<router-link :to="item.url">{{item.text}}</router-link>
				</li>
			</ul>
		</div>
		<div class="praise-con">
			<ul>
				<li>
					<div class="title">
						<h3>月色花香所有评价</h3>
						<span>2015-10-03 21:47:13</span>
					</div>
					<div class="image">
						<img src="@/images/details/head_img.jpg">
					</div>
					<p class="buy">
						已经开始喝第二阶段的奶粉了，会继续支持德贝
					</p>
					<p class="seller">
						管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:"publicPraise",
		data(){
			return{
				title:[{
					id:1,
					text:"全部评价",
					url:"/ProDetails/publicPraise/all"
				},{
					id:2,
					text:"好评",
					url:"/ProDetails/publicPraise/good"
				},{
					id:3,
					text:"差评",
					url:"/ProDetails/publicPraise/bad"
				},{
					id:4,
					text:"晒单",
					url:"/ProDetails/publicPraise/show"
				}],
				active:0
			}
		},
		methods:{
			handleClick(i){
				this.active = i
				// console.log(this.active)
			}
		},
		mounted(){
			
		}
	}
</script>
<style scoped>
.praise-title{
	width: 100%;
	padding: 0 31px;
	box-sizing: border-box;
	border-bottom: 1px solid #dddddd;
}
.praise-title ul{
	display: flex;
	justify-content: space-between;
	height: 70px;
	align-items: center;
}
.praise-title li{
	padding: 0 45px;
	background: #999999;
	display: inline-block;
	height: 50px;
	line-height: 50px;
	border-radius: 25px;
	color: #fff;
}
.praise-title li a{
	color: #fff;
}
.praise-title .on{
	background: #ff9900;
}


.praise-con ul li:first-child{
	border-top: none;
}
.praise-con ul li{
	width: 100%;
	height: 346px;
	padding: 0 31px;
	box-sizing: border-box;
	border-top: 1px solid #dddddd;
}
.praise-con ul li .title{
	height: 62px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.praise-con ul li .title h3{
	color: #ff9900;
	font-size: 24px;
}
.praise-con ul li .title span{
	color: #999999;
}
.praise-con ul li .image{
	width: 150px;
	height: 150px;
	overflow: hidden;
}
.praise-con ul li .image img{
	width: 100%;
}
.praise-con ul li .buy{
	font-size: 20px;
	color: #999999;
	line-height: 38px;
}
.praise-con ul li .seller{
	line-height: 25px;
	padding: 14px 10px;
	background: #dddddd;
	border-radius: 10px;
}
</style>
