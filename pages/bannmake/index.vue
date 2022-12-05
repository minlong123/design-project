<template>
	<view class="Seals">
		
	  <view class="photo-wall">

			<img @click="preview()" :src="newimg" class="make-source" :style="[{ 'width':swidth+'rpx','height':sheight+'rpx'}]">

			<view class="guidance">注：该横幅限制字数为{{maxsize}}个字</view>

			<textarea 
			class="make-textarea"
			placeholder="点击输入制作横幅的字"
			v-model="textcon"
			:maxlength="maxsize"
			@input="changes"
			></textarea>
	

	  </view>
  

	  <view class="startmake">
			<view class="make-submit">
				
				<view class="contact">

					<u--input
					placeholder="填写手机号开始制作"
					border="surround"
					v-model="phones"></u--input>

				</view>

				<view class="subbbb" @click="sendmake">提交</view>
			</view>

		</view>



	  <u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>
  
	</view>
  </template>
  
  
  <script>
   import { IMG_URL } from "../../config/index";
  
  export default {
	data() {
	  return {
		loading:false,
		newimg:IMG_URL+"/image/a.jpg",
		swidth:725,
		sheight:0,
		twidth:0,
		theight:0,
		textcon:"",
		phones:"",
		maxsize:25
	  }
	},
	computed: {
  
	},
	created() {
	},
	onShow() {
		
	},
	onLoad(){
		this.init();
	},
	methods: {
		preview(){

			uni.previewImage
			({

				urls: [this.newimg], 
				current: '',
				success: function(res) {},

				fail: function(res) {},

				complete: function(res) {},

			})
		},
		changes(){
			if(this.textcon.length > this.maxsize ){
				wx.showToast({
					icon: 'none',
					title:'字数最多'+this.maxsize+"个字"
				})
			}
		},
		sendmake(){

			if(this.textcon.length != this.maxsize ){
				wx.showToast({
					icon: 'none',
					title: "用于制作横幅的字数不够哟，请修改一下再提交哦",
				})
				return;
			}

			// 将生成的照片墙发送到服务器
			if(this.phones== "" || this.phones == null || this.phones == undefined){
				
				wx.showToast({
					icon: 'none',
					title: "请先填写手机号再发送给我们哦",
				})
				return;
			}

			if(!this.varphone(this.phones)){
								
				wx.showToast({
				  icon: 'none',
				  title: '手机号有误！',
				})
				return;
			}
			uni.setStorage({
				key: 'design-contact',
				data:this.phones,
			})
			uni.showModal({

				title: "提示",
				content: "提交成功，是否继续制作？",
				confirmText: "继续制作横幅",//这块是确定按钮的文字
				cancelText:"取消",//这块是取消的文字
				success: function (res) {
				if (res.confirm) {
				
					uni.redirectTo({
						url:"/pages/bannmake/index"
					})
				
				} else if (res.cancel) {
					
					uni.switchTab({
						url:"/pages/banner/index"
					})

				}
				},
			});

		},
		varphone(phone){
			if (!(/^1[34578]\d{9}$/.test(phone))) {
				return false;
			}else{
				return true;
			}
		},
		init(){

			uni.getStorage({
				key:'design-contact',
				success(res){
					this.phones=parseInt(res.data);
				}
					
			})


			var that=this;
			uni.getImageInfo({
				src:this.newimg,
				success: function (image) {
					that.twidth = image.width;
					that.theight = image.height;
					// 计算比例
					let lv=image.width/725;
					if(lv>=1){
						that.sheight=image.height/lv;
					}else{
						that.sheight=image.height*lv;
					}
					
				}
			})

		},

	
	  
	},
  }
  </script>
  
  
  
  <style lang="scss">
  page {
	background-color: #FFFFFF;
  }
  .Seals{
	position:relative;
	height:100%;
	width:100%;
  }

  .photo-wall{
	  width:725rpx;
	  margin:0 auto;
	.guidance{
		color:#999;
		font-size:30rpx;
		margin-top:20rpx;
	}
	.make-textarea{
		border:1px solid #eeeeee;
		margin-top:30rpx;
		padding:30rpx;
		width:100%;
		font-size:40rpx;
		max-width:100%;
		box-sizing:border-box;
		
	}
  }
  .startmake{
	margin-top:30rpx;
	text-align:center;
	z-index:1;
	height:200rpx;
	img{
		width:80%;
	}
	.make-submit{
		width:100%;
		margin-top:200rpx;
		background:#FFF;
		// box-shadow: 1px 5px 11px #000;
		.contact{
			width:80%;;
			margin:0 auto;
			margin-top:40rpx;
		}
		.subbbb{
			width:80%;
			margin:0 auto;
			height:100rpx;
			display: flex;
			flex-direction: center;
			justify-content: center;
			align-items: center;
			font-size:36rpx;
			border-radius:10rpx;
			background: linear-gradient(45deg, #fd7402 0%, #ff5001 100%);
			color:#FFF;
			margin-top:50rpx;
		}
	}
}
  
  </style>
  