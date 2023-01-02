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


	<view class="photo-wall">

		<view class="photo-row" @click="makephoto(item.id,item.name)" v-for="(item,index) in datas" :key="index">
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

	<text class="preloadfont">字</text>
<text class="preloadfonts">字</text>
<text class="preloadfont1">字</text>
<text class="preloadfont5">字</text>
<text class="preloadfont6">字</text>
<text class="preloadfont7">字</text>
<text class="preloadfont8">字</text>
<text class="preloadfont9">字</text>
<text class="preloadfont10">字</text>
<text class="preloadfont11">字</text>
<text class="preloadfont12">字</text>
<text class="preloadfont13">字</text>
<text class="preloadfont14">字</text>
<text class="preloadfont15">字</text>
<text class="preloadfont16">字</text>
<text class="preloadfont17">字</text>
<text class="preloadfont18">字</text>
<text class="preloadfont19">字</text>
<text class="preloadfont20">字</text>
<text class="preloadfont21">字</text>
<text class="preloadfont22">字</text>
<text class="preloadfont23">字</text>
<text class="preloadfont24">字</text>
<text class="preloadfont25">字</text>
<text class="preloadfont26">字</text>


	<u-loading-page loading-text="正在加载中..." :loading="loading"></u-loading-page>

  </view>
</template>


<script>
 import { DEV_URL } from "../../config/index";
 import {getphototem } from "@/api/design/index"



export default {
  data() {
    return {
      loading:false,
	  newimg:DEV_URL+"/assets/design/loves.jpg",
	  datas:[],
    }
  },
  computed: {

  },
  created() {
  },
  onShow() {
	  
  },
  onLoad(){
	this.getData();
  },
  onPullDownRefresh: function () {
	uni.stopPullDownRefresh()
	},
  methods: {
	getData(){
		var that=this;
		getphototem().then((res) => {
			if(res.code == 1){
				that.datas=res.data;
			}
		})
	},
	visits(){
        uni.navigateTo({
          url:"/pages/about/index"
        })
	},
	makephoto(id,name){
		uni.navigateTo({
          url:"/pages/make/index?id="+id+"&name="+name
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
.preloadfont1{
	font-family:'宋体';
	position:absolute;
	top:0;
}
// .preloadfont2{
// 	font-family:'幼圆体';
// 	position:absolute;
// 	top:0;
// }


// .preloadfont3{
// 	font-family:'浮沉繁花';
// 	position:absolute;
// 	top:0;
// }
.preloadfont5{
	font-family:'花落寄相思';
	position:absolute;
	top:0;
}
.preloadfont6{
	font-family:'华康金文体';
	position:absolute;
	top:0;
}
.preloadfont7{
	font-family:'华康勘亭流';
	position:absolute;
	top:0;
}
.preloadfont8{
	font-family:'华康俪金黑体简';
	position:absolute;
	top:0;
}
.preloadfont9{
	font-family:'华康少女文字';
	position:absolute;
	top:0;
}
.preloadfont10{
	font-family:'华康手札体';
	position:absolute;
	top:0;
}
.preloadfont11{
	font-family:'华康宋体简';
	position:absolute;
	top:0;
}
.preloadfont12{
	font-family:'华康娃娃体';
	position:absolute;
	top:0;
}
.preloadfont13{
	font-family:'华康圆体';
	position:absolute;
	top:0;
}
.preloadfont14{
	font-family:'蒙纳电脑体简';
	position:absolute;
	top:0;
}
.preloadfont15{
	font-family:'庞门正道标题体';
	position:absolute;
	top:0;
}
.preloadfont16{
	font-family:'晴圆等宽';
	position:absolute;
	top:0;
}
.preloadfont17{
	font-family:'山涧流水';
	position:absolute;
	top:0;
}
.preloadfont18{
	font-family:'苏新诗卵石体';
	position:absolute;
	top:0;
}
.preloadfont19{
	font-family:'英雄黑体';
	position:absolute;
	top:0;
}
.preloadfont20{
	font-family:'石头体';
	position:absolute;
	top:0;
}
.preloadfont21{
	font-family:'空灵体';
	position:absolute;
	top:0;
}
.preloadfont22{
	font-family:'萌趣露珠体';
	position:absolute;
	top:0;
}
.preloadfont23{
	font-family:'七岁半';
	position:absolute;
	top:0;
}
.preloadfont24{
	font-family:'萌趣芋圆体';
	position:absolute;
	top:0;
}
.preloadfont25{
	font-family:'灵动布丁体';
	position:absolute;
	top:0;
}
.preloadfont26{
	font-family:'纸飞机';
	position:absolute;
	top:0;
}




</style>
