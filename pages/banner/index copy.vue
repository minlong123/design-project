<template>
	<!-- 该文件用来做canvas绘制单行文字/多行文字的测试 -->
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
	
		<view class="main" @click="init">
        	<text id="spans">这个字体是沙发\n萨芬怎样的？</text>
    	</view>

    	<!-- <canvas canvas-id="myCanvass" style="width:200px;height:200px;" id="canvas"></canvas> -->

		<canvas  canvas-id="myCanvassss" style="width:400rpx;height:400rpx;" id="canvasa"></canvas>
	 
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
	
		this.showthree();
	},
	onShow() {
	},
	onLoad(){

	},
	methods: {
		init(){

			this.showthree();
		},
		showthree(){
			// 多行文字
			let ctx = uni.createCanvasContext("myCanvassss", this)
			let font_h=0;
			let tops=uni.upx2px(100);
			let left=uni.upx2px(100);
			console.log(tops);
			let textarr=['这个字体是沙发','萨芬怎样的？']
			let rotate= 30
			let row=2;
			let sizes=uni.upx2px(50)
			let size=uni.upx2px(50)+10;
			ctx.font=sizes+"px 微软雅黑"
			ctx.fillStyle="#000000"
	
			for(let j=0;j<5;j++){

				for(let i=0;i<textarr.length;i++){
					
					ctx.translate(left,tops);
					ctx.rotate(rotate * Math.PI / 180)
					ctx.translate(-left,-tops);
					
					ctx.fillText(textarr[i]+j,left+(j*8),tops+size*(i+1)+(j*10));
					
					ctx.translate(left,tops);
					ctx.rotate(-rotate * Math.PI / 180)
					ctx.translate(-left,-tops);
				}

			}


			ctx.draw()

		},
		showtwo(){
			// 单行文字
			let ctx = uni.createCanvasContext("myCanvassss", this)
			let font_h=0;
			let tops=uni.upx2px(100);
			let left=uni.upx2px(100);
			console.log(tops);
			let text='这个字体是沙发萨芬怎样的？'
			let rotate= 30
			let size=uni.upx2px(50);
			ctx.font=size+"px 微软雅黑"
			ctx.fillStyle="#000000"

			// uni.createSelectorQuery().in(this).select('#spans').boundingClientRect(result => {
				// console.log(result);
				// font_h=uni.upx2px(result.height);

				ctx.translate(left,tops);
				ctx.rotate(rotate * Math.PI / 180)
				ctx.translate(-left,-tops);

				ctx.fillText(text,left,tops+size);
				ctx.draw()

			// }).exec();


		},
		shows(){
			
			let ctx = uni.createCanvasContext("myCanvass", this)
			// 1.填充背景色
			ctx.setFontSize(16) // 字号
			ctx.setFillStyle('#000000') // 字体颜色
			ctx.fillText("sfsfasfdsafasdf", 12,24); // （文字，x，y）
			// 3.绘制
			ctx.draw()

		}
	  
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

  .main{
        /* font-family:'童话体简'; */
        width:400rpx;
        height:400rpx;
        border:1px solid red;
        position:relative;
        overflow:hidden;
    }
    #spans{
        display:inline-block;
        transform-origin: 0 0 0;
        transform:rotate(30deg);
        position:absolute;
        left:100rpx;
        top:100rpx;
        font-size:50rpx;
        white-space: pre;
    }

    canvas{
        border:1px solid red;
    }


  
  
  </style>
  