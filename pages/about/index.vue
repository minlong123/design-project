<template>

	<view class="about">

      <view class="about-logo">
          <u-image
        ref="uImage"
        :lazy-load="true"
        :src="logo"
        mode="aspectFill"
        height="122"
        width="122"
        shape="square"
        >
        <u-loading-icon size="20" slot="loading"></u-loading-icon>
        </u-image>

        <view class="about-product-name">操作介绍</view>
      </view>


    <view class="setting-row" v-for="(item,index) in allnav" :key="index" @click="visit(item.id,item.name)">
      <view class="setting-row-left">{{item.name}}</view>
      <view class="setting-row-right">
        <u-icon v-if="(item.isarrow == 2)" name="arrow-right" color="#cacaca" size="40"></u-icon>
      </view>
    </view>

	</view>
</template>

<script>

  import { DEV_URL } from "../../config/index";
  import {getdocument } from "@/api/design/index"

	export default {
		data() {
			return {
        type:"",
        logo:DEV_URL+"/logo.png",
        allnav:[]
			}
		},
    onPullDownRefresh: function () {
      this.getData();
      uni.stopPullDownRefresh()
    },
    onLoad(){
      this.getData();
    },
		methods: {
      getData(){
        var that=this;
        getdocument().then((res) => {
          if(res.code == 1){
            that.allnav=res.data;
          }
        })
      },
      visit(id,name){
        uni.navigateTo({
          url:"/pages/agament/index?id="+id+"&name="+name
        })
      }
		}
	}
</script>

<style lang="scss">
  page{
    background:#f6f7f9;
  }
  .about{
    position:relative;
    background:#f6f7f9;
    width:100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin-top:20rpx;

    .about-logo{

      display:inline-block;
      // margin:0 auto;
      text-align:center;
      display:flex;
      margin:120rpx auto;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .about-product-name{

        font-size:30rpx;
        text-align:center;
        margin-top:40rpx;
        color:#b1b2b4;
      }

    }
    .setting-row{
      padding:0 30rpx;
      box-sizing:border-box;
      background:#FFFFFF;
      width:100%;
      height:96rpx;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      font-size:32rpx;
      color:#000000;
      .setting-row-right{
        color:#b9b9bb;
        font-size:30rpx;
      }

    }
    
  }




</style>
