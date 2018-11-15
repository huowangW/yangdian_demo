<template>
	<div class="Header">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>
<script>
	export default {
		name:"login"
	}
</script>
<style scoped>
.Header{
	height: 94px;
	background: #ff9900;
	display: flex;
	justify-content: space-between;
	padding: 0 35px;
	width: 100%;
	box-sizing: border-box;
	align-items: center;
	font-size: 38px;
	letter-spacing: 2px;
}
.Header span,h1{
	color: #fff;
}
.Header .iconfont{
	font-size: 42px;
}
</style>
