<template>
	<view class="photos-page">

		<view class="selec-label">
		选择照片
		</view>

		<view class="add-photo-box">
			<view class="addphoto" @click="addphones" :class="{'actives':isupload==1}">
				<u-icon name="plus" color="#FFF" size="60"></u-icon>
			</view>
		</view>

		<view class="allphoto" v-if="startupload">

			<scroll-view scroll-x="true" 
			show-scrollbar="true"
			class="pos_signer" 
			>

				<view class="scroll-view-item" v-for="(item,index) in allimg" @click="preview(index)" :key="index">
					
					<u-image
				ref="uImage"
				:lazy-load="true"
				:src="item.img"
				mode="aspectFill"
				height="150"
				width="150"
				shape="square"
				>
				<u-loading-icon size="20" slot="loading"></u-loading-icon>
				</u-image>

				<view class="setting-close" @click.stop="closefontset(index)">
					<u-icon name="close" color="#ff0000" size="40"></u-icon>
				</view>


				</view>



			</scroll-view>


		
	

		</view>


		

		<view class="selec-label">
		选择尺寸
		</view>

		<view class="sizeseting">
			<u-button @click="setsize()">
				<text class="selectcolor">({{photosize}})</text>
				点击我选择其它尺寸……</u-button>
		</view>
  
  
		<u-picker 
	:show="sizeshow" 
	:columns="columnsdata" 
	itemHeight="80"
	@confirm="confirmProcess"
	@close="closeProcess"
	@cancel="cancelProcess"
	keyName="names">
	</u-picker>


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

		<view style="height:200rpx;"></view>
	  <u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>
  
	</view>
  </template>
  
  
  <script>
   import { IMG_URL } from "../../config/index";
   import { bodyScroll } from "@/util/validates.js";
   import { upload } from "@/util/request.js"
   import {savewashphoto } from "@/api/design/index"
   

  export default {
	data() {
	  return {
		loading:false,
		newimg:IMG_URL+"/image/a.jpg",
		allimg:[],
		isupload:1,
		sizeshow:false,
		columnsdata:[['5寸','6寸','7寸','8寸']],
		photosize:"5寸",
		phones:"",
		startupload:false,
	  }
	},
	computed: {
  
	},
	created() {
		uni.getStorage({
			key:'design-contact',
			success(res){
				this.phones=parseInt(res.data);
			}
				
		})
		this.noPullDown();
	},
	onShow() {

		uni.getStorage({
			key:'design-contact',
			success(res){
				this.phones=parseInt(res.data);
			}
				
		})
		this.noPullDown();
	},
	onLoad(){

		uni.getStorage({
			key:'design-contact',
			success(res){
				this.phones=parseInt(res.data);
			}
				
		})
		this.noPullDown();

	},
	methods: {
		
		preview(index){
			
			if(!this.allimg[index]){
				return;
			}
			uni.previewImage
			({

				urls: [this.allimg[index].img], 
				current: '',
				success: function(res) {},

				fail: function(res) {},

				complete: function(res) {},

			})
		},
		noPullDown() {
			//禁止页面拖动
			document.querySelector('body').removeEventListener('touchmove',bodyScroll, { passive: false })
		},
		confirmProcess(e){
			this.photosize=e.value[0]
			this.sizeshow=false;
		},
		closeProcess(){
			this.sizeshow=false;
		},
		cancelProcess(){
			this.sizeshow=false;
		},
		sendmake(){

			if(this.allimg.length ==0 ){
				wx.showToast({
					icon: 'none',
					title: "请上传照片后在提交！",
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

			let alldata=[];
			for(let i=0;i<this.allimg.length;i++){
				alldata.push(this.allimg[i].online);
			}

			let resdata={
				'size':this.photosize,
				'images':alldata.join(","),
				'phones':this.phones,
	
			};
			savewashphoto(resdata).then((res) => {

				if(res.code == 1){


					this.allimg=[];
					uni.reLaunch({
						url:"/pages/nums/index?nums="+res.data+"&type=2"
					})
					// uni.showModal({

					// 	title: "提示",
					// 	content: "提交成功，是否继续洗照片？",
					// 	confirmText: "继续洗照片",//这块是确定按钮的文字
					// 	cancelText:"退出",//这块是取消的文字
					// 	success: function (res) {
					// 		if (res.confirm) {
								
					// 			that.allimg=[];
					// 			uni.switchTab({
					// 				url:"/pages/photo/index"
					// 			})
							
					// 		} else if (res.cancel) {
								
					// 			uni.switchTab({
					// 				url:"/pages/index/index"
					// 			})
					// 		}
					// 	},
					// });


				}else{
					wx.showToast({
						icon: 'none',
						title: "保存异常，请稍后再试！"
					})
				}
			})
		},
		varphone(phone){
			if (!(/^1[34578]\d{9}$/.test(phone))) {
				return false;
			}else{
				return true;
			}
		},
		setsize(){
			this.sizeshow=true;
		},
		closefontset(index){
			this.allimg.splice(index,1);
		},
	  visits(){
		  uni.navigateTo({
			url:"/pages/about/index"
		  })
	  },
	  makephoto(){
		  uni.navigateTo({
			url:"/pages/make/index"
		  })
	  },
	  sizeauto(srouce_width, srouce_height, width, height) {
			let slv = srouce_height / height;
			let www = srouce_width / slv;
			if (www < width) {
				return width / www;
			} else {
				return 1;
			}
		},
	  addphones(){
		// 上传照片
		var that = this;
		this.isaction = false;
		uni.chooseImage({
			count:9, //默认9
			sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
			sourceType: ['album'], //从相册选择
			success: function (res) {
				let uploadimg = res.tempFilePaths;
				that.startupload=true;
				// console.log(uploadimg);
				for (let i = 0; i < uploadimg.length; i++) {
					
					// 获取图片的真实宽高
					let allobj={
						img:uploadimg[i],
						online:"",
						width:150,
						height:150,
						theight:0,
						twidth:0,
						scale:1
					}
					uni.getImageInfo({
						src: uploadimg[i],
						success: function (image) {
							// 计算比例
							allobj.theight=image.width;
							allobj.twidth=image.height;
							let updata=upload("/api/Common/upload",{},uploadimg[i],true);
							updata.then(function(res){

								let result=JSON.parse(res);
								allobj.online=result.data.url;
								that.allimg.unshift(allobj);
								that.isupload=1;
					
							})

						}
					})

				
				}
					

				
		
			}
		});
	  }
	  
	},
  }
  </script>
  
  
  
  <style lang="scss">
  page {
	background-color: #FFFFFF;
  }
  .selectcolor{
	color:red;
	font-weight:bold;
  }


  .sizeseting{
	width:725rpx;
	  margin:0 auto;
	  button{
		text-align:left;
		margin-top:20rpx;
		border:none;
		border-bottom:1px solid #ececec;
		font-size:30rpx;
		justify-content:flex-start;
	  }
  }
  .allphoto{
	  width:725rpx;
	  margin:0 auto;
	  display:flex;
	  flex-direction:row;
	  justify-content:flex-start;
	  align-items:flex-start;
	  flex-wrap:wrap;
	  .img-row{
		position:relative;
		width:150rpx;
		height:150rpx;
		margin-right:30rpx;
		margin-bottom:60rpx;
		img{
			max-width:100%;
		}
	  }

	  .photo-row{
		  margin-bottom:30rpx;
		  display:flex;
		  width:150rpx;
		  height:150rpx;
		  flex-direction:column;
		  justify-content:space-around;
		  align-items:center;

	  }
  }
  .add-photo-box{
	width:100%;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
  }
  .addphoto{
	display:flex;
	width:150rpx;
	height:150rpx;
	
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background:#f7f0f0;
	text-align:center;
	
	}
	.actives{
		margin-right:30rpx;
	}

  .pos_signer{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap:nowrap;
		width:100%;
		height:180rpx;
		white-space: nowrap;
		margin-top:20rpx;
		
		.scroll-view-item{
			position:relative;
			display:inline-block;
			margin-right:40rpx;
			top:40rpx;
			.setting-close{
				position: absolute;
				top: -30rpx;
				right: -30rpx;
				z-index: 1;
				box-shadow: 0 0 5px rgb(140, 140, 140);
				background: #FFF;
				border-radius: 50%;
				width: 50rpx;
				height: 50rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

			}

		}	
	}



  

  .selec-label{
	width:725rpx;
	margin:0 auto;
	font-size:32rpx;
	margin-top:24rpx;
	font-weight:bold;
	height:80rpx;
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items:center;
  }
  .startmake{
	width:80%;
	margin:0 auto;
	margin-top:120rpx;
	text-align:center;

	.make-submit{
		width:100%;
		background:#FFF;
		.contact{
			width:100%;

			margin-top:40rpx;
		}
		.subbbb{
			width:100%;
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
  