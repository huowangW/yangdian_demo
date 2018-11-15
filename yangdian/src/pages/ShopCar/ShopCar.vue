<template>
	<div class="ShopCar">
		<div class="header">
			<span class="return iconfont">&#xe6b0;</span>
			<h1>购物车</h1>
			<span></span>
		</div>
		
		<div class="main">
			<shopcarYes v-if="bool" :proItemsNo="proItemsNo"></shopcarYes>
			<shopcarNo v-else></shopcarNo>
		</div>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import shopcarYes from './components/shopcarYes.vue'
	import shopcarNo from './components/shopcarNo.vue'
	export default {
		name:"ShopCar",
		components:{
			shopcarYes,
			shopcarNo
		},
		data(){
			return{
				bool:false
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				this.bool = true
			}else{
				this.bool = false
			}
		},
		methods:{
			proItemsNo(){
				this.bool = false
			}
		}
	}
</script>
<style scoped>
.header{
	height: 95px;
	background: #ff9900;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;
	box-sizing: border-box;
}
.header h1{
	font-size: 42px;
	color: #fff;
}
.header .return{
	font-size: 38px;
	color: #fff;
}
</style>
