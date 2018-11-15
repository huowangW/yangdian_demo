<template>
	<div class="Search">
		<form>
			<input 
				type="text" 
				placeholder="Montagne jeunesse" 
				class="text"
				@click="handleFocus()"
			>
			<span 
				class="iconfont btn"
				@click="handleFocus()"
			>&#xe624;</span>
		</form>
	</div>
</template>
<script>
	export default {
		name:"Search",
		methods:{
			handleFocus(){
				this.$router.push('SearchPage')
			}
		}
	}
</script>
<style scoped>
.Search form{
	width: 516px;
	height: 62px;
	border-radius: 12px;
	overflow: hidden;
	opacity: 0.7;
	display: block;
	margin: 0 auto;
}
.Search form .text{
	width: 434px;
	height: inherit;
	float: left;
	padding-left: 22px;
	font-size: 28px;
}
.Search form .btn{
	width: 60px;
	height: inherit;
	float: left;
	background: #fff;
	text-align: left;
	line-height: 62px;
	font-size: 40px;
}
</style>
