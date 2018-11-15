<template>
	<div class="SearchPage">
		<button @click="handleReturn()">返回</button>
		<Search></Search>
		我是搜索页
	</div>
</template>
<script>
	import Search from '.././components/Search.vue'
	export default {
		name:"SearchPage",
		components:{
			Search
		},
		methods:{
			handleReturn(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped></style>
