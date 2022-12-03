<template>
	<view class="agament">
  
	<skeleton :row="30" :loading="sloading">
	  <view class="agamen-con" v-html="content">
	  </view>
	</skeleton>
	</view>
  </template>
  
  
  <script>
	  
  import { DEV_URL } from "../../config/index";
//   import { getAgaent } from "@/api/person/person"
  import skeleton from "@/components/xinyi-skeleton/skeleton.vue"
  
  export default {
	components: {
		skeleton,
	},
	data() {
	  return {
		sloading: true,
		type:1,
		content:""
	  }
	},
	computed: {
  
	},
	created() {
	},
	onShow() {

	},
	onLoad(options){
	  if(options.id){
		uni.setNavigationBarTitle({
			title:options.name,
		})
		this.id=options.id;
		this.getDatas(options.id);	
	  }
  
	},
	methods: {
		getDatas(id){
			
		  var that=this;
		  getAgaent({id:id}).then((res) => {

			  
			  if(res.code == 1){

				that.content=res.data;
			  }else{
				  wx.showToast({
					icon: 'none',
					title: res.msg
				  })
			  }
			  that.sloading=false;
		  })  
			
		}
		
	  
	},
  }
  </script>
  
  
  <style lang="scss">
  page {
	background-color: #FFFFFF;
  }
  .agament{
	  width:690rpx;
	  margin:0 auto;
	  padding:15rpx 15rpx;

  }
  
  </style>
  