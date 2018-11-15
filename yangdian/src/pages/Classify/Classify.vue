<template>
	<div class="Classify">
		
		<div class="header">
			<Search class="search"></Search>
		</div>
		
		<div class="main">
			
			<div class="slideBar" ref="slideBar">
				<ul>
					<li  
						v-for="(item,index) of slideBarList"
						:key="index"
						:class="{on:index === active}"
						@click="handleClick(index,$event)"
					>{{item}}</li>
				</ul>
			</div>
			
			<div class="wrapper" ref="wrapper">
				<ul class="wrapper-ul">
					<li class="wrapper-li" 
						v-for="(items,index) of proList"
						:key="index"
						ref="wrapperList"
						
					>
						<ul class="pro-items">
							<li 
								class="pro-item" 
								v-for="item of items"
								:key="item.id"
							>
								
									<router-link to="/ProDetails">
										<div class="image">
											<img src="@/images/classify/pro01.jpg">
										</div>
										
										<p>{{item.text}}</p>
									</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			
		</div>
		
		<MenuBar></MenuBar>
	</div>
</template>
<script>
	import Search from '@/components/Search.vue'
	import BetterScroll from 'better-scroll'
	export default {
		name:"Classify",
		components:{
			Search
		},
		data(){
			return{
				scrollY:0,
				clickEvent:false,
				slideBarList:["母婴专区","美妆护肤","家具生活","食品营养","全球直邮"],
				listHeight:[],
				proList:[]
			}
		},
		methods:{
			handleClick(i){
				this.clickEvent = true
				if(!event._constructed){
					return
				}else{
					var right =  this.$refs.wrapperList
					var el = right[i]
					this.rights.scrollToElement(el,300)
				}
			},
			initScroll(){
				var that = this
				this.lefts = new BetterScroll(this.$refs.slideBar,{
					click:true
				})
				this.rights = new BetterScroll(this.$refs.wrapper,{
					probeType:3,
					click: true
				})
				
				this.rights.on("scroll",function(props){
					that.scrollY = Math.abs(Math.round(props.y))
				})
				
			},
			getHeight(){
				var itemHeight = this.$refs.wrapperList
				var height = 0 
				this.listHeight.push(height)
				var that = this
				// console.log(itemHeight)
				for(var i=0;i<=itemHeight.length-1;i++){
					height += itemHeight[i].clientHeight
					that.listHeight.push(height)
				}
				// console.log(this.listHeight)
			}
		},
		created(){
			var that = this
			this.$http.get('/api/classifyJson')
			.then(function(res){
				that.proList = res.data.data
				that.$nextTick(function(){
					that.initScroll()
					that.getHeight()
				})
			})
		},
		computed:{
			active(){
				for(var i = 0; i<this.listHeight.length-1; i++){
					var h1 = this.listHeight[i]
					var h2 = this.listHeight[i+1]
					
					if(this.scrollY >= h1 && this.scrollY < h2){
						return i
					}
					if(this.scrollY >= this.listHeight[this.listHeight.length-1]){
						return 0
					}
				}
			}
		}
	}
</script>
<style scoped>
.Classify{
	padding-bottom: 104px;
}
.header{
	height: 108px;
	width: 100%;
	background: #ff9900;
	overflow: hidden;
	position: fixed;
	top: 0;
	z-index: 998;
}
.header .search{
	margin-top: 25px;
}
.main{
	width: 100%;
	display: flex;
	height: 1617px;
	overflow: hidden;
	margin-top: 108px;
}
.slideBar{
	width: 234px;
	background: #fafafa;
}
.slideBar ul li{
	height: 94px;
	line-height: 94px;
	text-align: center;
}
.slideBar ul .on{
	color: #ff9900;
	background: url(../../images/classify/menu-bg.jpg) no-repeat;
}
.wrapper{
	width: 516px;
}
.wrapper .pro-items{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.wrapper .pro-item{
	width: 224px;
	height: 233px;
	border: 3px solid #1d84a7;
	border-radius: 8px;
	margin: 17px 0;
}
.wrapper .pro-item .image{
	width: 224px;
	height: 186px;
	position: relative;
}
.wrapper .pro-item .image img{
	position: absolute;
	width: 163px;
	height: 170px;
	bottom: 1px;
	left: 0;
	right: 0;
	margin: auto;
}
.wrapper .pro-item p{
	height: 47px;
	width: 100%;
	background: #1d84a7;
	text-align: center;
	line-height: 47px;
	color: #fff;
}
.wrapper >>> .wrapper-ul{
	padding-bottom: 500px;
}
</style>
