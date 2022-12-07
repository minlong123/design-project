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

        <view class="about-product-name">店铺名称：美记店铺</view>
      </view>

      <view class="nums-action">
        <view class="nums-style">

          <u-tooltip class="num-style-nums" :size=40 color="#FFF" :text="nums"></u-tooltip>

          <view class="num-continue" @click="visit">继续制作</view>
        </view>
        <view class="nums-desc">长按复制编码，发给商家确认哦！</view>
      </view>


  </view>
</template>
<style>
>>> .u-tooltip__wrapper{
  width:100%;
  height:100%;
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}
>>> .u-tooltip__wrapper__text{
  display:inline-block;
  width:100%;
  height:100%;
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
<script>

  import { DEV_URL } from "../../config/index";


	export default {
		data() {
			return {
        type:"",
        logo:DEV_URL+"/logo.png",
        nums:"000000",
        type:0
			}
		},
    onLoad(options){
      if(options){
        this.nums=options.nums;
        this.type=options.type;
      }
    },
    onShow(){

    },
		methods: {
      visit(){

        // 横幅制作
        if(this.type== 1){
            uni.switchTab({
              url:"/pages/banner/index"
            })
        }

        // 洗照片
        if(this.type== 2){
            uni.switchTab({
              url:"/pages/photo/index"
            })
        }

        // 制作照片墙
        if(this.type== 3){
            uni.switchTab({
              url:"/pages/index/index"
            })
        }

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
      margin:200rpx auto;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .about-product-name{

        font-size:30rpx;
        text-align:center;
        margin-top:20rpx;
        color:#b1b2b4;
      }

    }

    
  }
.nums-action{
  width:700rpx;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  view{
    display:inline-block;
  }
  .nums-style{
    width:88%;
    display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
    .num-style-nums{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:280rpx;
      height:80rpx;
      border-radius:20rpx;
      text-align:center;
      font-size:36rpx;
      background:#c40001;
      color:#FFF;
      .u-tooltip__wrapper{
        width:100%;
        height:100%;
        span{
          display:inline-block;
          width:100%;
          height:100%;
          color:#FFF;
        }

      }

    }
    .num-continue{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:280rpx;
      height:80rpx;
      border-radius:20rpx;
      text-align:center;
   
      font-size:36rpx;
      background:#a7a7a7;
      color:#FFF;
    }

  }
  .nums-desc{
    font-size:30rpx;
    margin-top:40rpx;
    color:#666;
  }
}



</style>
