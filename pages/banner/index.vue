<template>
	<view class="Seals">
		

	  <view class="photo-wall">
  
		  <view class="photo-row" @click="makephoto">
				  <u-image
			  ref="uImage"
			  :lazy-load="true"
			  :src="newimg"
			  mode="aspectFill"
			  height="210"
			  width="210"
			  shape="square"
			  >
			  <u-loading-icon size="20" slot="loading"></u-loading-icon>
			  </u-image>
			  <text>横幅A</text>
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
	  }
	},
	onPullDownRefresh: function () {
		uni.stopPullDownRefresh()
	},
	computed: {
  
	},
	created() {
	},
	onShow() {
		
	},
	onLoad(){
	},
	methods: {
	  makephoto(){
		  uni.navigateTo({
			url:"/pages/bannmake/index"
		  })
	  }
	
	  
	},
  }
  </script>
  
  
  
  <style lang="scss">
  page {
	background-color: #FFFFFF;
  }

  .photo-wall{
	  width:725rpx;
	  margin:0 auto;
	  margin-top:40rpx;
	  display:flex;
	  flex-direction:row;
	  justify-content:flex-start;
	  align-items:center;
	  flex-wrap:wrap;
	  .photo-row{
		  margin-bottom:30rpx;
		  display:flex;
		  width:33%;
		  flex-direction:column;
		  justify-content:space-around;
		  align-items:center;
		  text{
			  font-size:30rpx;
			  color:#636363;
			  margin-top:20rpx;
		  }
	  }
  }
  
  
  </style>
  