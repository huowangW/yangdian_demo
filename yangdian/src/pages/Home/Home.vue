<template>
	<div class="Home">
		<div class="header">
			<Search class="search"></Search>
			<banner class="banner" :datas="bannerList"></banner>
		</div>
		<proList :info="hot"></proList>
		<proList :info="baby"></proList>
		<proList :info="beauty"></proList>
		<proList :info="life"></proList>
		<proList :info="food"></proList>
		<proList :info="globals"></proList>

		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Search from '@/components/Search.vue'
	import banner from './components/banner.vue'
	import proList from './components/proList.vue'
	export default {
		name: "Home",
		components: {
			Search,
			banner,
			proList
		},
		data() {
			return {
				hot:"",
				baby:"",
				beauty:"",
				life:"",
				food:"",
				globals:"",
				bannerList:""
			}
		},
		created(){
			var that = this
			this.$http.get('/api/homeJson')
			.then(function(res){
				that.hot = res.data.data.hot
				that.baby = res.data.data.baby
				that.beauty = res.data.data.beauty
				that.life = res.data.data.life
				that.food = res.data.data.food
				that.globals = res.data.data.global
				that.bannerList = res.data.data.banner
				console.log(that.bannerList)
			})
		}
	}
</script>
<style scoped>
	.Home {
		padding-bottom: 104px;
	}

	.Home .header {
		position: relative;
		width: 100%;
		height: 474px;
	}

	.Home .search {
		position: absolute;
		z-index: 2;
		left: 0;
		right: 0;
		margin: 0 auto;
		margin-top: 14px;
	}

	.Home .banner {
		position: absolute;
		z-index: 1;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
</style>
