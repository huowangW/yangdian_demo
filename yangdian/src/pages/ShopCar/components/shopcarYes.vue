<template>
	<div class="shopcarYes">
		<ul ref="aaa">
			<li v-for="(item,index) of proList" :key="item.id">
				<div class="title">
					<span class="iconfont">&#xe627;</span>
					<h3>杭州保税区仓</h3>
				</div>
				<v-touch 
					@swipeleft="swipeleftFn(index)" 
					@swiperight="swiperightFn(index)"
					class="vTouch"
				>
					<div class="main" ref="main">
						<div class="info">
							<label class="checkbox">
								<b 
									:class="item.checked === true ? 'active' : null "
									@click="item.checked = !item.checked"
								></b>
								<input 
									type="checkbox" 
									:checked="item.checked"
								>
							</label>
							
							<img :src="item.ImgUrl">
							
							<div class="mes">
								<h3>{{item.ProTitle}}</h3>
								<div>
									<button 
										class="reduice"
										@click="item.ProNums <= 1 ? item.ProNums = 1 : item.ProNums--"
									>-</button>
									<input 
										type="text" 
										class="text" 
										v-model="item.ProNums"
									>
									<button 
										class="add"
										@click="item.ProNums++"
									>+</button>
								</div>
							</div>
							
							<p class="price">{{item.PorPrice}}</p>
						</div>
						
						<div class="remove" @click="remove(index)">删除</div>
					</div>
				</v-touch>
			</li>
		</ul>
		
		
		<div class="computed">
			<div class="btn">
				<label @click="allChecked()">
					<b 
						:class="isChecked ? 'active' : null "
					></b>
					<input 
						type="checkbox" 
						:checked="isChecked"
					>
					<span>全选</span>
				</label>
				
				<label>
					<b></b>
					<input type="checkbox">
					<span>编辑</span>
				</label>
			</div>
			
			<div class="total">
				<p>
					合计:
					<span>{{allTotal}}</span>
				</p>
				<p>(不含运费)</p>
			</div>
			
			<div class="accounts">
				去结算
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"shopcarYes",
		data(){
			return{
				proList:[]
			}
		},
		methods:{
			swipeleftFn(index){
				this.$refs.main[index].className = "left"
			},
			swiperightFn(index){
				this.$refs.main[index].className = 'main'
			},
			allChecked(){
				var that = this
				this.proList.forEach(function(item,i){
					that.proList[i].checked = true
				})
			},
			remove(i){
				this.proList.splice(i,1)
				localStorage.setItem("proItems",JSON.stringify(this.proList))
			}
		},
		mounted(){
			if(localStorage.getItem("proItems")){
				var pro = JSON.parse(localStorage.getItem("proItems"))
				this.proList = pro
			}else{
				this.$emit("proItemsNo")
			}
		},
		computed:{
			allTotal(){
				var total = 0
				var that = this
				this.proList.forEach(function(item,i){
					if(that.proList[i].checked){
						total += that.proList[i].PorPrice * that.proList[i].ProNums
					}
				})
				return total
			},
			isChecked(){
				var bool = true
				this.proList.forEach(function(item){
					if(item.checked === false){
						bool = false
					}
				})
				return bool
			}
		}
	}
</script>
<style scoped>
.shopcarYes{
	padding-bottom: 220px;
}
.shopcarYes ul li{
	height: 328px;
	overflow: hidden;
}
.shopcarYes ul li .title{
	display: flex;
	margin-top: 35px;
}
.shopcarYes ul li .title .iconfont{
	color: #999999;
	font-size: 35px;
	margin-left: 38px;
}
.shopcarYes ul li .title h3{
	font-size: 28px;
	margin-left: 27px;
	color: #999999;
}
.shopcarYes ul li .main{
	width: 850px;
	display: flex;
	transition: all .2s;
}
.shopcarYes ul li .left{
	width: 850px;
	display: flex;
	margin-left: -100px;
	transition: all .2s;
}
.shopcarYes ul li .info{
	height: 258px;
	display: flex;
	align-items: center;
	width: 750px;
}

.shopcarYes ul li .info .checkbox b{
	width: 43px;
	height: 43px;
	display: block;
	background: url(../../../images/shopcar/check_none.png) no-repeat;
	background-size: 43px;
	margin-left: 38px;
}
.shopcarYes ul li .info .checkbox .active{
	background: url(../../../images/shopcar/check.png) no-repeat;
	background-size: 43px;
}
.shopcarYes ul li .info .checkbox input{
	display: none;
}

.shopcarYes ul li .info img{
	width: 157px;
	height: 157px;
	margin-left: 21px;
}
.shopcarYes ul li .info .mes{
	width: 258px;
	height: 157px;
	margin-left: 21px;
}
.shopcarYes ul li .info .mes div{
	width: 229px;
	height: 41px;
	border: 3px solid #cccccc;
	display: flex;
	background: #fafafa;
	margin-top: 40px;
}
.shopcarYes ul li .info .mes div button{
	width: 74px;
	height: 41px;
	background: #fafafa;
}
.shopcarYes ul li .info .mes div .text{
	width: 79px;
	height: 41;
	border-left: 3px solid #cccccc;
	border-right: 3px solid #cccccc;
	background: #fafafa;
	text-align: center;
	border-radius: 6px;
}

.shopcarYes ul li .info .price{
	font-size: 32px;
	margin-left: 44px;
}


.shopcarYes ul li .remove{
	width: 100px;
	height: 211px;
	background: #ff9900;
	color: #fff;
	text-align: center;
	line-height: 211px;
}


.shopcarYes .computed{
	width: 100%;
	height: 112px;
	border-top: 3px solid #eeeeee;
	display: flex;
	position: fixed;
	bottom: 102px;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	z-index: 999;
}
.shopcarYes .computed .btn{
	width: 230px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.shopcarYes .computed .btn label{
	width: 62px;
	height: inherit;
	display: block;
}
.shopcarYes .computed .btn b{
	width: 42px;
	height: 42px;
	display: block;
	background: url(../../../images/shopcar/check_none.png) no-repeat;
	background-size: 42px;
}
.shopcarYes .computed .btn .active{
	background: url(../../../images/shopcar/check.png) no-repeat;
	background-size: 42px;
}
.shopcarYes .computed .btn input{
	display: none;
}

.shopcarYes .computed .total{
	text-align: center;
	font-size: 24px;
}

.shopcarYes .computed .accounts{
	width: 232px;
	height: inherit;
	background: #ff5500;
	color: #fff;
	text-align: center;
	line-height: 112px;
	font-size: 38px;
}
.vTouch{
	touch-action: pan-y!important;
}

</style>
