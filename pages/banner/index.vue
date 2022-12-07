<template>
	<view class="Seals">
		

	  <view class="photo-wall">
  
		  <view class="photo-row" @click="makephoto(item.id,item.picimage,item.fontnum,item.name)" v-for="(item,index) in allbanner" :key="index">
				  <u-image
			  ref="uImage"
			  :lazy-load="true"
			  :src="item.picimage"
			  mode="aspectFill"
			  height="210"
			  width="210"
			  shape="square"
			  >
			  <u-loading-icon size="20" slot="loading"></u-loading-icon>
			  </u-image>
			  <text>{{item.name}}</text>
		  </view>
  
	  </view>
  
	  <u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>
  
	</view>
  </template>
  
  
  <script>
   import { IMG_URL } from "../../config/index";
   import {getBanners } from "@/api/design/index"


  export default {
	data() {
	  return {
		loading:false,
		allbanner:[],
	  }
	},
	onPullDownRefresh: function () {
		uni.stopPullDownRefresh()
	},
	computed: {
  
	},
	created() {
		this.getData();
	},
	onShow() {
		this.getData();
	},
	onLoad(){
		this.getData();
	},
	methods: {
		getData(){
			var that=this;
			getBanners().then((res) => {
				if(res.code == 1){
					that.allbanner=res.data;
				}
			})
		},
	  makephoto(id,img,fontnum,name){
		  uni.navigateTo({
			url:"/pages/bannmake/index?id="+id+"&img="+encodeURIComponent(img)+"&fontnum="+fontnum+"&name="+name
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
  