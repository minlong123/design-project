<template>
	<view class="Seals">
  
	    <u-navbar
	      title-color="#333"
	      back-icon-color="#333"
	      :is-fixed="true"
	      :is-back="false"
	      title-size="32"
	      title="横幅制作"
		    bgColor="#FFFFFF"
	      :placeholder="true"
	      leftIconColor="transparent"
	    >
	    </u-navbar>
	


	  <u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>
  
	</view>
  </template>
  
  
  <script>
	  


  
  export default {
	data() {
	  return {
		loading:false,

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
		
	  
	},
  }
  </script>
  
  
  
  <style lang="scss">

  page {
	background-color: #FFFFFF;
  }
  .catelist{
	  width:700rpx;
	  margin:0 auto;
	  display:flex;
	  flex-direction:column;
	  align-items:flex-start;
	  padding-top:20rpx;
	  
  }
  .cate-sear{
	  width:700rpx;
	  margin:0 auto;
	  display:flex;
	  flex-direction:column;
	  
  }

  
  
  </style>
  