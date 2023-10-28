<template>
	<view class="content">
		<view class="main">
			<view v-for="e in arr">{{e}}</view>
		</view>
		<view class="foot">
			<input type="text" class="cont" v-model="cont">
			<button @tap="send">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				arr:[]
			}
		},
		onLoad() {
			this.getmsg()
		},
		methods: {
			send:function(){
				if(this.cont.length>0){
					console.log("发送前")
					this.arr.push(this.cont)
					// 发送  
					let aa = this.cont
					console.log("aa = ", aa)
					this.socket.emit('message', aa)
					console.log("发送")
				}
				
			},
			// 接收消息
			getmsg:function(){
				this.socket.on('gbmsg', data=>{
					this.arr.push(data);
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.foot{
		position: fixed;
		width: 100%;
		
		bottom: 0;
		.cont {
			width: 100%;
			height: 50rpx;
			background-color: #eee;
		}
	}
</style>
