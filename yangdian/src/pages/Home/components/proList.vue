<template>
	<div class="proList">
		<h2>
			<span class="iconfont" v-html="info.titleIcon"></span>
			<span class="title">{{info.title}}</span>
		</h2>

		<swiper :options="swiperOption" tag="ul" class="proList-ul">
			<!-- slides -->
			<swiper-slide 
				tag="li" 
				v-for="(items,index) of info.proList" 
				class="proList-li" 
				:key="index"
			>
				<ul class="proList-items">
					<li 
						v-for="item of items.listArray" 
						:key="item.id" 
						class="proList-item"
					>
						<router-link to="/ProDetails">

							<div class="image">
								<!-- <img :src='item.imgUrl'> -->
								<img :src="require(`@/images/home/${item.imgUrl}.jpg`)">
							</div>

							<div class="price">
								<span class="new_price">{{item.new_price | floatNums | rmb}}</span>
								<span class="old_price">{{item.old_price | floatNums | rmb}}</span>
							</div>

							<p>
								{{item.proInfo | ellipsis}}
							</p>

						</router-link>
					</li>
				</ul>
			</swiper-slide>

		</swiper>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper'
	export default {
		name: "proList",
		props:["info"],
		data() {
			return {
				swiperOption: {}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		filters:{
			floatNums(val){
				return val.toFixed(2)
			},
			rmb(val){
				return "￥"+val
			},
			ellipsis(val){
				const nums = 20
				if(val.length > nums){
					return val.substring(0,nums)+"..."
				}
			}
		}
	}
</script>
<style scoped>
	.proList h2 {
		height: 96px;
		line-height: 96px;
	}

	.proList .proList-items {
		display: flex;
		justify-content: space-around;
	}

	.proList .proList-item {
		width: 324px !important;
		height: 464px;
		border: 2px solid #eeeeee;
	}

	.proList .proList-item .image {
		width: 324px;
		position: relative;
		padding-bottom: 100%;
	}

	.proList .proList-item .image img {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
	}

	.proList .proList-item .price {
		height: 57px;
		display: flex;
		justify-content: space-around;
	}

	.proList .proList-item p {
		padding: 0 30px;
	}
	.new_price{
		color: red;
	}
	.old_price{
		text-decoration: line-through;
	}
</style>
