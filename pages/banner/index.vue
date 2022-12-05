<template>
	<view class="Seals">
		
		  <u-navbar
			title-color="#333"
			back-icon-color="#333"
			:is-fixed="true"
			:is-back="false"
			title-size="32"
			title="横幅"
			  bgColor="#FFFFFF"
			:placeholder="true"
			leftIconColor="transparent"
		  >
		  </u-navbar>
	
  
	
  
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
			  <text>横幅B</text>
		  </view>

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
			  <text>横幅C</text>
		  </view>

  
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
			  <text>横幅D</text>
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
  
  .preloadfont{
	  font-family:'童话体简';
	  position:absolute;
	  top:0;
  }
  .preloadfonts{
	  font-family:'思源黑体';
	  position:absolute;
	  top:0;
  }
  
  </style>
  