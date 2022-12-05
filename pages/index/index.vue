<template>
  <view class="Seals">
	  
	    <u-navbar
	      title-color="#333"
	      back-icon-color="#333"
	      :is-fixed="true"
	      :is-back="false"
	      title-size="32"
	      title="照片墙"
		    bgColor="#FFFFFF"
	      :placeholder="true"
	      leftIconColor="transparent"
	    >
	    </u-navbar>
	
		<view class="banners">
			照片墙
		</view>

	<view>
	<u-button @click="visits()">如何操作？</u-button>
	</view>

	<text class="preloadfont">字体文字测试</text>
	<text class="preloadfonts">字体文字测试</text>
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
			<text>心形照片墙</text>
		</view>
<!-- 
		<view class="photo-row">
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
			<text>心形照片墙</text>
		</view>

		<view class="photo-row">
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
			<text>心形照片墙</text>
		</view>

		<view class="photo-row">
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
			<text>心形照片墙</text>
		</view> -->

	</view>

	<u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>

  </view>
</template>


<script>
 import { DEV_URL } from "../../config/index";

export default {
  data() {
    return {
      loading:false,
	  newimg:DEV_URL+"/assets/design/loves.jpg",
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
	visits(){
        uni.navigateTo({
          url:"/pages/about/index"
        })
	},
	makephoto(){
		uni.navigateTo({
          url:"/pages/make/index"
        })
	}
  
    
  },
}
</script>



<style lang="scss">
page {
  background-color: #FFFFFF;
}
.banners{
	position: relative;
	padding: 50px;
	font-size:80rpx;
	color: #fff;
	text-shadow: 0 1px 3px rgba(0,0,0,.4), 0 0 30px rgba(0,0,0,.075);
	background: #020031;
	background: -moz-linear-gradient(45deg, #020031 0%, #6d3353 100%);
	background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #020031), color-stop(100%, #6d3353));
	background: -webkit-linear-gradient(45deg, #020031 0%, #6d3353 100%);
	background: -o-linear-gradient(45deg, #020031 0%, #6d3353 100%);
	background: -ms-linear-gradient(45deg, #020031 0%, #6d3353 100%);
	background: linear-gradient(45deg, #020031 0%, #6d3353 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#020031', endColorstr='#6d3353', GradientType=1 );
	-webkit-box-shadow: inset 0 3px 7px rgba(0,0,0,.2), inset 0 -3px 7px rgba(0,0,0,.2);
	-moz-box-shadow: inset 0 3px 7px rgba(0,0,0,.2), inset 0 -3px 7px rgba(0,0,0,.2);
	box-shadow: inset 0 3px 7px rgba(0,0,0,.2), inset 0 -3px 7px rgba(0,0,0,.2);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
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
