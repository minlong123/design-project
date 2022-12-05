<template>
	<view class="make">

		<view v-if="!isexport">

			<view class="make-con">

				<view class="make-border"></view>

				<view class="make-area">


					<view v-for="(item, index) in photowall" :key="'b'+String(index)" @touchstart="handleTouchstart($event, index)" @touchmove="handleTouchmove" @touchend="handleTouchend" @click="selectrow(index, item.img)" class="make-cell cell-one" :style="[{ left: item.left + 'rpx', top: item.top + 'rpx', width: item.width + 'rpx', height: item.height + 'rpx','z-index':item.zindex }]">
						<u-icon v-if="!item.img" name="photo" color="#FFFFFF" size="40"></u-icon>
						<img v-if="item.img" :src="item.img" alt=""
							:style="[{ 'transform-origin': item.centerx + 'rpx ' + item.centery + 'rpx 0', 'transform': 'scale(' + item.scale + ') rotate(' + item.rotate + 'deg) translateX(' + item.tranx + 'rpx) translateY(' + item.trany + 'rpx)' }]">
					</view>
		

					<view class="make-text" v-for="(item, index) in alltext"
					:key="'a'+String(index)"
					:style="[{ left: item.left + 'rpx', top: item.top + 'rpx','z-index':item.zindex,'font-size':item.size+'rpx',color:item.color,'font-family':item.family,transform:'rotate('+item.rotate+'deg)'}]"
					:class="{'make-text-action':item.isactive}" @touchstart="textTouchstart($event, index)" @touchmove="textTouchmove" @touchend="textTouchend"
					@click="selecttextcon(index)"
					:id="'aa'+String(index)"
					>
						{{item.text}}
					</view>
					

					<img class="make-source" v-for="(item, index) in allsource"
					:key="'c'+String(index)"
					:style="[{ left: item.left + 'rpx', top: item.top + 'rpx','z-index':item.zindex,'width':item.width+'rpx','height':item.height+'rpx',transform:'rotate('+item.rotate+'deg)'}]"
					:class="{'make-source-action':item.isactive}" @touchstart="imgTouchstart($event, index)" @touchmove="imgTouchmove" @touchend="imgTouchend"
					@click="selectimgcon(index)"
					:id="'cc'+String(index)"
					:src="item.img"
					>

				</view>
			</view>

			<view class="upload-photo">

				<view class="action-left">
					<view @click="uploads()">
						<u-icon name="photo" color="#999999" size="50"></u-icon>
						<text>传图</text>
					</view>

					<view @click="addtext">
						<u-icon name="file-text" color="#999999" size="50"></u-icon>
						<text>文字</text>
					</view>

					<view @click="addsource">
						<u-icon name="calendar" color="#999999" size="50"></u-icon>
						<text>素材</text>
					</view>		
				</view>

				<view class="action-com" @click="exportswall">
					完成设计
				</view>

			</view>

			<canvas canvas-id="myCanvas" id="canvass" width="750" height="974"
				style="width:750rpx;height:974rpx;"></canvas>

		</view>

		<view v-if="isexport" class="startmake">
			<img @click="preview()" class="exportstyle" :src="exportsrc" alt="">
		

			<view class="make-submit">
				
				<view class="contact">

					<u--input
					placeholder="填写手机号开始制作"
					border="surround"
					v-model="phones"></u--input>

				</view>

				<view class="subbbb" @click="sendmake">提交</view>
			</view>

		</view>

		<view class="img-panel" @click="cancelselec" v-if="isaction"
			:style="[{ left: panelleft + 'rpx', top: paneltop + 'rpx', width: panelwidth + 'rpx', height: panelheight + 'rpx',border:panborder }]">

			<view class="img-panel-right" :style="{ top: panelctop + 'rpx'}">
				<text class="img-close" @click.stop="delbox">删除</text>
				<text class="img-scale" @click.stop="bigbox">放大</text>
				<text class="img-scales" @click.stop="clickbox">缩小</text>
				<text class="img-rotatesleft" @click.stop="leftrotate">左旋</text>
				<text class="img-rotates" @click.stop="rightrotate">右旋</text>
				

				<template v-if="isphotowall">
				<text class="img-movetop" @click.stop="topmove">上移</text>
				<text class="img-movebottom" @click.stop="bottommove">下移</text>
				<text class="img-moveleft" @click.stop="leftmove">左移</text>
				<text class="img-moveright" @click.stop="rightmove">右移</text>
				</template>
			</view>

		</view>





		<view class="text-edit" v-if="istext">

			<view class="text-model">
			</view>

			<view class="text-textarea">

				<textarea 
				placeholder="点击输入文字"
				v-model="textcon"
				></textarea>

				<view class="text-area-action">
					<view @click="cancelinput">取消</view>	
					<view class="confirmstyle" @click="confirminput">确定</view>	
				</view>
			</view>
		</view>

		<view class="font-param-set" v-if="isfedit">

			<view class="font-settab">
				<view class="font-setcolor" @click="switchfont(1)" :class="{'font-active':selectset == 1}">
					<text>字体/颜色</text>
				</view>
				<view class="font-setcon" @click="switchfont(2)" :class="{'font-active':selectset == 2}">
					<text>文字编辑</text>
				</view>
				<view class="font-setrotate" @click="switchfont(3)" :class="{'font-active':selectset == 3}">
					<text>大小/旋转</text>
				</view>
			</view>


			<view class="font-color-family" v-if="(selectset == 1)">
				
	
				<scroll-view scroll-x="true" 
				show-scrollbar="true"
				class="pos_signer" 
				>
					<view class="scroll-view-item" v-for="(item,index) in familays" @click="selectfontset(1,item)" :key="index">{{item}}</view>

				</scroll-view>
				
			

				<scroll-view scroll-x="true" 
				show-scrollbar="true"
				class="pos_signers" 
				>
					<view class="scroll-view-items" 
					v-for="(item,index) in colors" 
					@click="selectfontset(2,item)" 
					:style="{'background':item}"
					:key="index"></view>

				</scroll-view>


				
			</view>


			<view class="font-color-family" v-if="(selectset == 3)">

				<scroll-view scroll-x="true" 
				show-scrollbar="true"
				class="pos_signer" 
				>
					
				<view class="scroll-view-item" @click="selectfontset(3)">放大</view>
				<view class="scroll-view-item" @click="selectfontset(4)">缩小</view>
				<view class="scroll-view-item" @click="selectfontset(5)">左旋</view>
				<view class="scroll-view-item" @click="selectfontset(6)">右旋</view>
				<view class="scroll-view-item" @click="selectfontset(7)">左移</view>
				<view class="scroll-view-item" @click="selectfontset(8)">右移</view>
				<view class="scroll-view-item" @click="selectfontset(9)">上移</view>
				<view class="scroll-view-item" @click="selectfontset(10)">下移</view>
				
				</scroll-view>
			</view>


			<view class="setting-close" @click="closefontset">
				<u-icon name="close" color="#85839b" size="40"></u-icon></view>

		</view>

		<u-loading-page loading-text="正在制作中..." :loading="loadings"></u-loading-page>


	</view>
</template>

<style>
.uni-textarea-placeholder{
	color:#FFF!important;
}
</style>


<script>

import { DEV_URL } from "../../config/index";
import changedpi from "@/util/changdpi.js"

export default {
	data() {
		return {
			isexport: false,
			exportsrc: "",
			loadings:false,
			dpi:300,
			isaction: false,
			panelleft: 0,
			paneltop: 0,
			panelwidth: 0,
			panelheight: 0,
			panelctop: 0,
			panborder:"2px dashed red",
			paneltype:1,
			centerx: 0,
			centery: 0,
			phones:"",
			selectset:1,
			isfedit:false,
			currfontindex:"",
			familays:['思源黑体','童话体简','童话体简','童话体简','童话体简','童话体简','童话体简'],
			colors:['#7f284b','#4e172c','#fea002','#fd8c02','#fffd06','#d2ff02','#ff5fcb','#fe798e','#000000','#FFFFFF'],
			photowall: [{
				id: 1,
				left: 93,
				top: 286,
				width: 75,
				height: 117,
				// img:"https://mails.ztu123.com/assets/design/loves.jpg",
				// twidth:391,
				// theight:391,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 2,
				left: 108,
				top: 412,
				width: 58,
				height: 62,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 3,
				left: 171,
				top: 227,
				width: 112,
				height: 119,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 4,
				left: 171,
				top: 353,
				width: 131,
				height: 143,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 5,
				left: 197,
				top: 503,
				width: 105,
				height: 62,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 6,
				left: 236,
				top: 570,
				width: 66,
				height: 63,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 7,
				left: 288,
				top: 279,
				width: 71,
				height: 67,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 8,
				left: 307,
				top: 353,
				width: 132,
				height: 143,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 9,
				left: 307,
				top: 503,
				width: 132,
				height: 142,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 10,
				left: 338,
				top: 651,
				width: 70,
				height: 67,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 11,
				left: 464,
				top: 227,
				width: 113,
				height: 119,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 12,
				left: 443,
				top: 352,
				width: 134,
				height: 143,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 13,
				left: 443,
				top: 503,
				width: 104,
				height: 62,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 14,
				left: 444,
				top: 570,
				width: 66,
				height: 63,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 15,
				left: 582,
				top: 286,
				width: 75,
				height: 117,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}, {
				id: 16,
				left: 582,
				top: 412,
				width: 58,
				height: 62,
				img: false,
				twidth: 0,
				theight: 0,
				scale: 1,
				rotate: 0,
				tranx: 0,
				trany: 0,
				centerx: 0,
				centery: 0,
				zindex:1,
			}],
			isupload: true,
			canvas: "",
			canvaswidth: 750,
			canvasheight: 974,
			actionbox: "",
			isphotowall:true,
			// 下面都是照片拖拽的变量
			currdropbox: "",
			soleft:0,
			sotop:0,
			domw:0,
			domh:0,
			startx: 0,
			starty: 0,
			endx:0,
			endy:0,
			isstart: false,
			// 添加文字的变量
			textcon:"",
			istext:false,
			alltext:[],
			tstartx: 0,
			tstarty: 0,
			tendx:0,
			tendy:0,
			tisstart:false,
			tsoleft:0,
			tsotop:0,
			currdroptextbox:"",
			boxinfo:{},
			// 添加素材的变量
			allsource:[],
			currimgindex:"",
			istartx: 0,
			istarty: 0,
			iisstart:false,
			isoleft:0,
			isotop:0,
			itendx:0,
			itendy:0,
			boximginfo:{}
		}
	},
	onLoad() {

	},
	mounted() {

	},
	methods: {
		preview(){

			uni.previewImage
			({

				urls: [this.exportsrc], 
				current: '',
				success: function(res) {},

				fail: function(res) {},

				complete: function(res) {},

			})
		},
		imgTouchstart(event, index) {
			event.stopPropagation()

			// console.log(event);
			// console.log("开始拖拽")
			this.currimgindex = index;
			this.getimgDescBox("cc"+String(this.currimgindex));
			
			const { clientX, clientY } = event.touches[0];
			// console.log(event.touches[0]);
			// 记录一些数据
			this.istartx = clientX
			this.istarty = clientY
			this.iisstart = true;

			this.isoleft = this.allsource[index].left;
			this.isotop = this.allsource[index].top;
			this.allsource[index].zindex =99999;

			event.preventDefault();
		},
		imgTouchmove(event){

			// console.log(event);
			event.stopPropagation()
			// 文字拖拽
			if (this.iisstart) {

				const { clientX, clientY } = event.touches[0];
				this.itendx=clientX;
				this.itendy=clientY;

				let tendleft = this.isoleft + ((clientX - this.istartx)/(uni.upx2px(100)/100))
				let tendtop = this.isotop + ((clientY - this.istarty)/(uni.upx2px(100)/100))

				let twidth=this.boximginfo.width/(uni.upx2px(100)/100)
				let theight=this.boximginfo.height/(uni.upx2px(100)/100)
		
				// 橫向围栏
				// 左边围栏
				if(tendleft <= 61+20){
					tendleft=61+20;
				}
				
				// 右边围栏
				if(twidth+61+20+tendleft > this.canvaswidth){
					tendleft=this.canvaswidth-twidth-61-20;
				}

				// 纵向围栏
				// 上边围栏
				if(tendtop <= 61+20){
					tendtop=61+20;
				}
				// 下边围栏
				if(theight+61+20+tendtop > this.canvasheight){
					tendtop=this.canvasheight-theight-61-20;
				}

				this.allsource[this.currimgindex].left = tendleft
				this.allsource[this.currimgindex].top = tendtop
			
				// this.panelleft = tendleft;
				// this.paneltop = tendtop;
			}
			event.preventDefault();
		},
		paramreset(){
			this.isaction=false;
			this.istext=false;
			for(let i=0;i<this.alltext.length;i++){
				this.alltext[i].isactive=false;
			}
			for(let i=0;i<this.allsource.length;i++){
				this.allsource[i].isactive=false;
			}
			this.currfontindex="";
			this.currimgindex="";

		},
		otherreset(){
			this.isaction=false;
			for(let i=0;i<this.allsource.length;i++){
				this.allsource[i].isactive=false;
			}
			this.currimgindex="";

		},
		imgTouchend(){

			// 如果只是点击了一下，啥都不干
			if(this.istartx == this.itendx && this.istarty == this.itendy){
			
				this.istartx=0;
				this.istarty=0;
				this.iisstart = false;
				this.isoleft = 0;
				this.isotop = 0;
				this.itendx = 0;
				this.currdroptextbox = "";
				this.itendy = 0;
				this.boximginfo={};
				return;
			}

		},
		switchfont(type){
			this.selectset=type;

			if( type== 2){
				this.istext=true;
				this.textcon=this.alltext[this.currfontindex].text

			}else{
				this.istext=false;
				this.textcon=""
	
			}

		},
		closefontset(){
			// 关闭字体设置
			this.isfedit=false;
			this.alltext[this.currfontindex].isactive=false;
			this.currfontindex="";
		},
		selectfontset(type,val=""){
			// 字体设置方法
			if(type == 1){
				// 字体，手机上不支持pc的常用字体
				this.alltext[this.currfontindex].family=val;
				this.$set(this.alltext[this.currfontindex],'family',val);

			}
			if(type == 2){
				// 颜色
				this.alltext[this.currfontindex].color=val;
				this.$set(this.alltext[this.currfontindex],'color',val);
			}
			if(type == 3){
				this.alltext[this.currfontindex].size=this.alltext[this.currfontindex].size+1;
			}
			if(type == 4){
				this.alltext[this.currfontindex].size=this.alltext[this.currfontindex].size-1;
			}
			if(type == 5){
				this.alltext[this.currfontindex].rotate=this.alltext[this.currfontindex].rotate-5;
			}
			if(type == 6){
				this.alltext[this.currfontindex].rotate=this.alltext[this.currfontindex].rotate+5;
			}
			if(type == 7){
				this.alltext[this.currfontindex].left=this.alltext[this.currfontindex].left-5;
			}
			if(type == 8){
				this.alltext[this.currfontindex].left=this.alltext[this.currfontindex].left+5;
			}
			if(type == 9){
				this.alltext[this.currfontindex].top=this.alltext[this.currfontindex].top-5;
			}
			if(type == 10){
				this.alltext[this.currfontindex].top=this.alltext[this.currfontindex].top+5;
			}
			this.$forceUpdate();//强制更新

		},
		getDescBox(id) {
			uni.createSelectorQuery().in(this).select('#'+id).boundingClientRect(result => {
				if (result) {
					this.boxinfo=result;
				}else {
					this.getDescBox();
				}
			}).exec();
		},
		getimgDescBox(id) {
			uni.createSelectorQuery().in(this).select('#'+id).boundingClientRect(result => {
				if (result) {
					this.boximginfo=result;
				}else {
					this.getimgDescBox();
				}
			}).exec();
		},
		textTouchstart(event, index) {
			event.stopPropagation()

			// console.log(event);
			// console.log("开始拖拽")
			this.currdroptextbox = index;
			this.getDescBox("aa"+String(this.currdroptextbox));
			
			const { clientX, clientY } = event.touches[0];
			// console.log(event.touches[0]);
			// 记录一些数据
			this.tstartx = clientX
			this.tstarty = clientY
			this.tisstart = true;

			this.tsoleft = this.alltext[index].left;
			this.tsotop = this.alltext[index].top;
			this.alltext[index].zindex =99999;

			event.preventDefault();
		},
		textTouchmove(event){

			// console.log(event);
			event.stopPropagation()
			// 文字拖拽
			if (this.tisstart) {

				const { clientX, clientY } = event.touches[0];
				this.tendx=clientX;
				this.tendy=clientY;

				let tendleft = this.tsoleft + ((clientX - this.tstartx)/(uni.upx2px(100)/100))
				let tendtop = this.tsotop + ((clientY - this.tstarty)/(uni.upx2px(100)/100))

				let twidth=this.boxinfo.width/(uni.upx2px(100)/100)
				let theight=this.boxinfo.height/(uni.upx2px(100)/100)
		
				// 橫向围栏
				// 左边围栏
				if(tendleft <= 61+20){
					tendleft=61+20;
				}
				
				// 右边围栏
				if(twidth+61+20+tendleft > this.canvaswidth){
					tendleft=this.canvaswidth-twidth-61-20;
				}

				// 纵向围栏
				// 上边围栏
				if(tendtop <= 61+20){
					tendtop=61+20;
				}
				// 下边围栏
				if(theight+61+20+tendtop > this.canvasheight){
					tendtop=this.canvasheight-theight-61-20;
				}

				this.alltext[this.currdroptextbox].left = tendleft
				this.alltext[this.currdroptextbox].top = tendtop
			}
			event.preventDefault();
		},
		textTouchend(){

			// 如果只是点击了一下，啥都不干
			if(this.tstartx == this.tendx && this.tstarty == this.tendy){
			
				this.tstartx=0;
				this.tstarty=0;
				this.tisstart = false;
				this.tsoleft = 0;
				this.tsotop = 0;
				this.tendx = 0;
				this.currdroptextbox = "";
				this.tendy = 0;
				this.boxinfo={};
				return;
			}




		},
		handleTouchstart(event, index) {
			event.stopPropagation()
			// 没有图片的话不触发
			if(!this.photowall[index].img){
				return;
			}
			// console.log(event);
			console.log("开始拖拽")
			this.currdropbox = index;
			const { clientX, clientY } = event.touches[0];
			// console.log(event.touches[0]);
			// 记录一些数据
			this.startx = clientX
			this.starty = clientY
			this.isstart = true;
			this.soleft = this.photowall[index].left;
			this.sotop = this.photowall[index].top;
			this.domw= this.photowall[index].width;
			this.domh= this.photowall[index].height;
			this.photowall[index].zindex =99999;
			event.preventDefault();
		},
		handleTouchmove(event) {
			// console.log(event);
			event.stopPropagation()
			// 图片拖拽
			if (this.isstart) {

				const { clientX, clientY } = event.touches[0];
				this.endx=clientX;
				this.endy=clientY;
				this.photowall[this.currdropbox].left = this.soleft + ((clientX - this.startx)/(uni.upx2px(100)/100))
				this.photowall[this.currdropbox].top = this.sotop + ((clientY - this.starty)/(uni.upx2px(100)/100))

			}

			event.preventDefault();

		},
		isOverManyTarget(targetDom,moveDom){
			// if (targetDom === moveDom) return false;
			let tx1 = parseInt(targetDom.left);
			let ty1 = parseInt(targetDom.top);
			let tx2 = tx1 + parseInt(targetDom.width);
			let ty2 = ty1 + parseInt(targetDom.height);
			let mx1 = parseInt(moveDom.left);
			let my1 = parseInt(moveDom.top);
			let mx2 = mx1 + parseInt(moveDom.width);
			let my2 = my1 + parseInt(moveDom.height);
			let width = Math.min(tx2, mx2) - Math.max(tx1, mx1);
			let height = Math.min(ty2, my2) - Math.max(ty1, my1);
			let stackArea = (width > 0 ? width : 0) * (height > 0 ? height : 0);
			return stackArea;
		},
		handleTouchend(event) {

			// 拖拽的时候页面滚动的话，这里是不会执行的，这是一个bug
			// 图片拖拽
			if (this.isstart) {

				console.log(event);

				// 如果只是点击了一下，啥都不干
				if(this.startx == this.endx && this.starty == this.endy){
				
					this.startx=0;
					this.starty=0;
					this.isstart = false;
					this.soleft = 0;
					this.sotop = 0;
					this.endx = 0;
					this.endy = 0;
					this.currdropbox=""
					return;
				}
				let boxsize=0;
				let maxdom="";
				let tocutag=false;

				for(let i=0;i<this.photowall.length;i++){

					// 不判断当前拖拽结束的这个盒子
					if(i != this.currdropbox && this.photowall[i].img){

						let currsize=this.isOverManyTarget(this.photowall[this.currdropbox],this.photowall[i]);
						if(currsize > boxsize){
							boxsize=currsize;
							maxdom=i;
							tocutag=true;
						}

					}
				}
				// 开始互换
				if(tocutag){

					// 第一个盒子
					this.photowall[this.currdropbox].left=this.photowall[maxdom].left
					this.photowall[this.currdropbox].top=this.photowall[maxdom].top
					this.photowall[this.currdropbox].width=this.photowall[maxdom].width
					this.photowall[this.currdropbox].height=this.photowall[maxdom].height

					// 重新计算缩放比例
					this.photowall[this.currdropbox].scale=this.sizeauto(this.photowall[this.currdropbox].twidth,
					this.photowall[this.currdropbox].theight,
					this.photowall[this.currdropbox].width,
					this.photowall[this.currdropbox].height);
					this.photowall[this.currdropbox].zindex=1;


					// 第二个盒子
					this.photowall[maxdom].left=this.soleft
					this.photowall[maxdom].top=this.sotop
					this.photowall[maxdom].width=this.domw
					this.photowall[maxdom].height=this.domh

					// 重新计算缩放比例
					this.photowall[maxdom].scale=this.sizeauto(this.photowall[maxdom].twidth,
					this.photowall[maxdom].theight,
					this.photowall[maxdom].width,
					this.photowall[maxdom].height);

				}else{

					this.photowall[this.currdropbox].left=this.soleft
					this.photowall[this.currdropbox].top=this.sotop

				}

				// 所有变量初始化
				this.startx=0;
				this.starty=0;
				this.isstart = false;
				this.soleft = 0;
				this.sotop = 0;
				this.currdropbox=""
				this.endx = 0;
				this.endy = 0;
			}



		},
		delbox() {
			this.isaction = false;
			if(this.paneltype == 1){
				// 删除盒子里的图片
				this.photowall[this.actionbox].img = false;
				this.photowall[this.actionbox].twidth = 0;
				this.photowall[this.actionbox].theight = 0;
				this.photowall[this.actionbox].scale = 1;
				this.photowall[this.actionbox].rotate = 0;
				this.photowall[this.actionbox].tranx = 0;
				this.photowall[this.actionbox].trany = 0;
				this.photowall[this.actionbox].centerx = 0;
				this.photowall[this.actionbox].centery = 0;
				this.actionbox = "";
			}
			if(this.paneltype == 2){
				// 删除素材
				this.allsource.splice(this.currimgindex,1)
				this.currimgindex="";
			}

		},
		bigbox() {
			if(this.paneltype == 1){
				// 放大盒子
				this.photowall[this.actionbox].scale = this.photowall[this.actionbox].scale + 0.2;

			}
			if(this.paneltype == 2){
				this.allsource[this.currimgindex].width=this.allsource[this.currimgindex].width+10;
				this.allsource[this.currimgindex].height=this.allsource[this.currimgindex].height+10;
			}
		},
		clickbox() {
			// 缩小盒子
			if(this.paneltype == 1){
				this.photowall[this.actionbox].scale = this.photowall[this.actionbox].scale - 0.2;
			}
			if(this.paneltype == 2){
				this.allsource[this.currimgindex].width=this.allsource[this.currimgindex].width-10;
				this.allsource[this.currimgindex].height=this.allsource[this.currimgindex].height-10;
			}
		},
		rightrotate() {
			// 右旋
			if(this.paneltype == 1){
				this.photowall[this.actionbox].rotate = this.photowall[this.actionbox].rotate + 10;
			}
			
			if(this.paneltype == 2){
				this.allsource[this.currimgindex].rotate=this.allsource[this.currimgindex].rotate+10;
				
			}
		},
		leftrotate() {
			// 右旋
			if(this.paneltype == 1){
				this.photowall[this.actionbox].rotate = this.photowall[this.actionbox].rotate - 10;
			}
			if(this.paneltype == 2){
				this.allsource[this.currimgindex].rotate=this.allsource[this.currimgindex].rotate-10;
				
			}	
		},
		topmove() {
			// 上移动
			this.photowall[this.actionbox].trany = this.photowall[this.actionbox].trany - 5;
			this.photowall[this.actionbox].centerx = this.photowall[this.actionbox].tranx;
			this.photowall[this.actionbox].centery = this.photowall[this.actionbox].trany;

		},
		bottommove() {
			// 下移动
			this.photowall[this.actionbox].trany = this.photowall[this.actionbox].trany + 5;
			this.photowall[this.actionbox].centerx = this.photowall[this.actionbox].tranx;
			this.photowall[this.actionbox].centery = this.photowall[this.actionbox].trany;

		},
		leftmove() {
			// 左移动
			this.photowall[this.actionbox].tranx = this.photowall[this.actionbox].tranx - 5;
			this.photowall[this.actionbox].centerx = this.photowall[this.actionbox].tranx;
			this.photowall[this.actionbox].centery = this.photowall[this.actionbox].trany;
		},
		rightmove() {
			// 右移动
			this.photowall[this.actionbox].tranx = this.photowall[this.actionbox].tranx + 5;
			this.photowall[this.actionbox].centerx = this.photowall[this.actionbox].tranx;
			this.photowall[this.actionbox].centery = this.photowall[this.actionbox].trany;
		},
		cancelinput(){
			this.istext=false;
			this.selectset=1;
			this.textcon="";
		},
		confirminput(){
			
			this.istext=false;
			let textobj={
				text:this.textcon,
				left:61+30,
				top:61+30,
				rotate:0,
				family:"PingFang SC, PingFang SC-Bold",
				color:"#000000",
				size:40,
				zindex:1,
				isactive:false
			}
			if(this.selectset == 2){
				this.alltext[this.currfontindex].text=this.textcon
				this.selectset=1;
			}else{
				this.alltext.push(textobj);
			}
			
			this.textcon="";

		},
		selecttextcon(index){

			// 先将所有设置为默认状态
			for(let i=0;i<this.alltext.length;i++){
				this.alltext[i].isactive=false;
			}

			this.alltext[index].isactive=!this.alltext[index].isactive;
			this.selectset=1;
			if(this.alltext[index].isactive){

				this.otherreset();
				this.isaction=false;
				this.isfedit=true;
				this.currfontindex=index;

			}else{
				this.isfedit=false;
				this.currfontindex="";
			}
			
		},
		selectimgcon(index){

			// 先将所有设置为默认状态
			for(let i=0;i<this.allsource.length;i++){
				this.allsource[i].isactive=false;
			}

			this.allsource[index].isactive=!this.allsource[index].isactive;

			if(this.allsource[index].isactive){

				this.currimgindex=index;
				this.isaction = true;
				this.isphotowall=false;
				this.panelleft = this.allsource[index].left;
				this.paneltop = this.allsource[index].top;
				this.panelwidth = this.allsource[index].width;
				this.panelheight = this.allsource[index].height;
				this.panelctop = -150;
				this.paneltype=2;
				this.panborder="none"
			}else{
	
				this.isaction = false;
				this.currimgindex="";

			}
			
		},
		selectrow(index, img) {

			if (img) {
					for(let i=0;i<this.alltext.length;i++){
						this.alltext[i].isactive=false;
					}
					for(let i=0;i<this.allsource.length;i++){
						this.allsource[i].isactive=false;
					}
					this.isaction = true;
					this.isphotowall=true;
					this.panelleft = this.photowall[index].left;
					this.paneltop = this.photowall[index].top;
					this.panelwidth = this.photowall[index].width;
					this.panelheight = this.photowall[index].height;
					this.panelctop = -343;
					this.paneltype=1;
					this.actionbox = index;//当前选中的活动盒子
					this.panborder="2px dashed red"

			} else {

				this.uploads(index);
				this.actionbox=""

			}
		},
		cancelselec(){
			this.isaction = false;
			// 先将所有设置为默认状态
			for(let i=0;i<this.allsource.length;i++){
				this.allsource[i].isactive=false;
			}

			
		},
		exportImg() {

			var that = this;
			var ctx = uni.createCanvasContext('myCanvas', this);
			// 1.填充背景色，白色
			ctx.setFillStyle('#fFFFff'); // 默认白色
			ctx.fillRect(0, 0, this.canvaswidth, this.canvasheight)
			ctx.save();

			// 绘制每个矩形
			for (let i = 0; i < this.photowall.length; i++) {

				// 绘制图片
				if (this.photowall[i].img) {

					ctx.setFillStyle('#e3e1e5');
					ctx.fillRect(uni.upx2px(this.photowall[i].left), uni.upx2px(this.photowall[i].top), uni.upx2px(this.photowall[i].width), uni.upx2px(this.photowall[i].height))

					ctx.clip();
					let lvs = this.photowall[i].theight / this.photowall[i].height

					// 平移
					let transpeedx = this.photowall[i].tranx;
					let transpeedy = this.photowall[i].trany;

					// 旋转
					ctx.translate(uni.upx2px(this.photowall[i].left) + uni.upx2px(transpeedx), uni.upx2px(this.photowall[i].top) + uni.upx2px(transpeedy));
					ctx.rotate(this.photowall[i].rotate * Math.PI / 180)
					ctx.translate(-(uni.upx2px(this.photowall[i].left) + uni.upx2px(transpeedx)), -(uni.upx2px(this.photowall[i].top) + uni.upx2px(transpeedy)));

					ctx.drawImage(this.photowall[i].img,
						uni.upx2px(this.photowall[i].left + transpeedx),
						uni.upx2px(this.photowall[i].top + transpeedy),
						uni.upx2px(this.photowall[i].twidth / lvs * this.photowall[i].scale),
						uni.upx2px(this.photowall[i].height) * this.photowall[i].scale);

					ctx.restore()
					ctx.save();
					ctx.stroke()

				} else {

					ctx.setFillStyle('#e3e1e5');
					ctx.fillRect(uni.upx2px(this.photowall[i].left), uni.upx2px(this.photowall[i].top), uni.upx2px(this.photowall[i].width), uni.upx2px(this.photowall[i].height))
					ctx.stroke()
				}
			}

			// 绘制每个文字
			for (let a = 0; a < this.alltext.length; a++) {

				ctx.font=uni.upx2px(this.alltext[a].size)+"px "+this.alltext[a].family
				ctx.fillStyle=this.alltext[a].color

				// 原生canvas没有多行文字的支持，这里判断换行符\n来进行换行,后续还需优化行高的设置等等
				let textArr = this.alltext[a].text.split('')
				let text="";
				let row=1;
				let alltexts=[];
				for(let i=0;i<textArr.length;i++){
					text +=textArr[i];
					if(textArr[i] == '\n'){
						row++;
						alltexts.push(text);
						text="";
						continue;
					}
					if(i == textArr.length-1){
						alltexts.push(text);
						text="";
					}
				}
				// let rowheight=result.height/row
				let rowheight = uni.upx2px(this.alltext[a].size)
				// 超过两行的高度，两段文字之间有间隔
				if(row>1){
					rowheight=rowheight+((row-1)*5)
				}
		
				for(let j=0;j<alltexts.length;j++){

					
					ctx.translate(uni.upx2px(this.alltext[a].left),uni.upx2px(this.alltext[a].top));
					ctx.rotate(this.alltext[a].rotate * Math.PI / 180)
					ctx.translate(-uni.upx2px(this.alltext[a].left), -uni.upx2px(this.alltext[a].top));
					
					// ctx.fillText(alltexts[j],uni.upx2px(this.alltext[a].left)+4,uni.upx2px(this.alltext[a].top)-4)
					ctx.fillText(alltexts[j],uni.upx2px(this.alltext[a].left),uni.upx2px(this.alltext[a].top)+(rowheight*(j+1)));
					
					ctx.translate(uni.upx2px(this.alltext[a].left),uni.upx2px(this.alltext[a].top));
					ctx.rotate(-this.alltext[a].rotate * Math.PI / 180)
					ctx.translate(-uni.upx2px(this.alltext[a].left), -uni.upx2px(this.alltext[a].top));

				}
				

			}


			// 绘制素材
			for (let i = 0; i < this.allsource.length; i++) {

				// 旋转
				ctx.translate(uni.upx2px(this.allsource[i].left), uni.upx2px(this.allsource[i].top));
				ctx.rotate(this.allsource[i].rotate * Math.PI / 180)
				ctx.translate(-uni.upx2px(this.allsource[i].left) , -uni.upx2px(this.allsource[i].top));

				ctx.drawImage(this.allsource[i].img,
						uni.upx2px(this.allsource[i].left),
						uni.upx2px(this.allsource[i].top),uni.upx2px(this.allsource[i].width),uni.upx2px(this.allsource[i].height))
				
			}


			ctx.draw()

			setTimeout(function () {

				wx.canvasToTempFilePath({
					canvasId: 'myCanvas',
					success: function (res) {

						that.isexport = true;

						uni.getStorage({
							key:'design-contact',
							success(res){
								that.phones=parseInt(res.data);
							}
								
						})

						that.exportsrc = changedpi.changeDpiDataUrl(res.tempFilePath,that.dpi);
						that.isaction = false;
						that.loadings=false;

					},
					fail: function (res) {
						that.loadings=false;
						console.log(res);
					}
				});
			});
			that.loadings=false;

		},
		drawphoto() {
			// 绘制小尺寸照片墙

		},
		varphone(phone){
			if (!(/^1[34578]\d{9}$/.test(phone))) {
				return false;
			}else{
				return true;
			}
		},
		sendmake(){
			// 将生成的照片墙发送到服务器
			if(this.phones== "" || this.phones == null || this.phones == undefined){
				
				wx.showToast({
					icon: 'none',
					title: "请先填写手机号再发送给我们哦",
				})
				return;
			}

			if(!this.varphone(this.phones)){
								
				wx.showToast({
				  icon: 'none',
				  title: '手机号有误！',
				})
				return;
			}
			uni.setStorage({
				key: 'design-contact',
				data:this.phones,
			})
			uni.showModal({

				title: "提示",
				content: "提交成功，是否继续制作？",
				confirmText: "继续制作",//这块是确定按钮的文字
				cancelText:"取消",//这块是取消的文字
				success: function (res) {
				if (res.confirm) {
				
					uni.redirectTo({
						url:"/pages/make/index"
					})
				
				} else if (res.cancel) {
					
					uni.switchTab({
						url:"/pages/index/index"
					})

				}
				},
			});

		},
		addtext() {

			this.otherreset();
			// 添加文字
			this.istext=true;

		},
		exportswall() {
			this.loadings=true;
			this.exportImg();
		},
		getImgstatu() {
			let statu = true;
			for (let j = 0; j < this.photowall.length; j++) {
				if (!this.photowall[j].img) {
					statu = false;
				}
			}
			if (statu) {
				// 还有格子没有上传图片
				this.isupload = false;
			} else {
				// 继续上传
				this.isupload = true;
			}
		},

		sizeauto(srouce_width, srouce_height, width, height) {
			let slv = srouce_height / height;
			let www = srouce_width / slv;
			if (www < width) {
				return width / www;
			} else {
				return 1;
			}
		},
		addsource() {
			// 素材上传
			var that = this;
			this.isaction = false;
			uni.chooseImage({
				count:1, //默认1
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function (res) {
					let uploadimg = res.tempFilePaths;

					let textobj={
						img:uploadimg[0],
						left:61+30,
						top:61+30,
						rotate:0,
						height:100,
						width:0,
						theight:0,
						twidth:0,
						zindex:1,
						isactive:false
					}
					
					uni.getImageInfo({
						src: uploadimg[0],
						success: function (image) {

							textobj.theight=image.height;
							textobj.twidth=image.width;
							textobj.width=image.width/(image.height/100)
							// 计算比例
							// that.photowall[vaindex].scale = that.sizeauto(image.width, image.height, that.photowall[vaindex].width, that.photowall[vaindex].height);
							that.allsource.push(textobj);
						}
					})

				}
			});

		},
		uploads(vaindex = "") {

			let uplength=0;
			if(vaindex == ""){
				uplength=this.photowall.length
			}else{
				uplength=1;
			}

			// 上传照片
			var that = this;
			this.isaction = false;
			uni.chooseImage({
				count:uplength, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function (res) {
					let uploadimg = res.tempFilePaths;

					// console.log(uploadimg);
					if (vaindex == "") {
						for (let i = 0; i < uploadimg.length; i++) {
							for (let j = 0; j < that.photowall.length; j++) {
								if (!that.photowall[j].img) {
									// 这里还需要获取图片实际的高宽，来计算图片的放大的比率
									that.photowall[j].img = uploadimg[i]
									// 获取图片的真实宽高
									uni.getImageInfo({
										src: uploadimg[i],
										success: function (image) {
											that.photowall[j].twidth = image.width;
											that.photowall[j].theight = image.height;
											// 计算比例
											that.photowall[j].scale = that.sizeauto(image.width, image.height, that.photowall[j].width, that.photowall[j].height);
										}
									})
									break;
								}
							}
						}
						

					} else {
						that.photowall[vaindex].img = uploadimg[0]
						uni.getImageInfo({
							src: uploadimg[0],
							success: function (image) {

								that.photowall[vaindex].twidth = image.width;
								that.photowall[vaindex].theight = image.height;
								// 计算比例
								that.photowall[vaindex].scale = that.sizeauto(image.width, image.height, that.photowall[vaindex].width, that.photowall[vaindex].height);
							}
						})

					}
					that.paramreset();
					that.getImgstatu();
				}
			});


		}
	}
}
</script>

<style lang="scss">
page {
	background: #f3f4f6;
}

.make-con {
	width:750rpx;
	position: relative;

	.make-border {
		position: absolute;
		left: 0;
		top: 0;
		width:750rpx;
		height: 974rpx;
		border: 61rpx solid #f7c694;
		box-sizing: border-box;
	}

	.make-area {
		width:750rpx;
		height: 974rpx;
		position: absolute;
		left: 0;
		top: 0;

		.make-cell {
			position: absolute;
			background: #e3e1e5;
			overflow: hidden;
			transition: all ease 0.2s;
			img {
				height: 100%;
				position: relative;
				z-index: 99;
				transition: all ease 0.2s;
				transform-origin: 0 0 0;
			}
			.u-icon--right {
				flex-direction: row;
				align-items: center;
				justify-content: center;
				height: 100%;
			}
		}
		.make-text{
			position: absolute;
			overflow: hidden;
			transition: all ease 0.02s;
			border: 2px dashed #e3e1e5;
			white-space: pre;
    		transform-origin: 0 0 0;
		}
		.make-text-action{
			border: 2px dashed red;
		}
		.make-source{
			position: absolute;
			overflow: hidden;
			transition: all ease 0.02s;
			border: 2px dashed #e3e1e5;
    		transform-origin: 0 0 0;
			box-sizing:border-box;
		}
		.make-source-action{
			border: 2px dashed red;
		}

	}

}

.upload-photo {
	position: fixed;
	width:100%;
	padding:0 20rpx;
	height: 120rpx;
	margin:0 auto;
	background: #FFFFFF;
	bottom: 0;
	left: 0;
	color: #FFFF;
	font-size: 36rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	box-sizing:border-box;
	.action-left{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content:space-around;
		color:#999999;
		width: 60%;
		view{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size:30rpx;
		}
	}
	.action-com{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content:center;
		color:#FFF;
		// background:#ff5001;
		width:200rpx;
		height:90rpx;
		font-size:30rpx;
		border-radius:10rpx;
		background: linear-gradient(45deg, #fd7402 0%, #ff5001 100%);
	
	}
}



#canvass {
	opacity: 0;
	z-index: -1;
	position: absolute;
	left: 0;
	top: 0;
}

.exportstyle {
	width: 100%;
}

.img-panel {
	font-size: 35px;
	position: absolute;
	height: 100px;
	width: 100px;
	left: 0;
	top: 0;
	font-size: 30rpx;
	z-index: 9999999999;
	box-sizing: border-box;
	color: red;
	transition: all ease 0.2s;

	.img-panel-right {
		position: absolute;
		top: -300rpx;
		right: -80rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: rgba(0, 0, 0, 0.2);
		padding: 5px;
		color: #FFF;
		font-weight: bold;
		text {
			padding: 16rpx 0;
		}
	}
}
.startmake{
	margin-top:30rpx;
	text-align:center;
	img{
		width:80%;
	}
	.make-submit{
		position:fixed;
		bottom:0;
		width:100%;
		background:#FFF;
		box-shadow: 1px 5px 11px #000;
		.contact{
			width:80%;;
			margin:0 auto;
			margin-top:40rpx;
		}
		.subbbb{
			width:100%;
			height:100rpx;
			display: flex;
			flex-direction: center;
			justify-content: center;
			align-items: center;
			font-size:36rpx;
			border-top-left-radius:10rpx;
			border-top-right-radius:10rpx;
			background: linear-gradient(45deg, #fd7402 0%, #ff5001 100%);
			color:#FFF;
			margin-top:50rpx;
		}
	}
}
.text-edit{
	.text-model{
		position:absolute;
		top:0;
		left:0;
		z-index:99999999;
		width:100%;
		height:100%;
		background:rgba(0, 0, 0, 0.7)
	}
	.text-textarea{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position:absolute;
		top:100rpx;
		left:0;
		width:100%;
		z-index:99999999999;
		text-align:left;
		color:#FFF;
		textarea{
			width:500rpx;
			height:240rpx;
			border:2px dashed #fff;
			margin:0 auto;
			color:#FFF;
			padding:20rpx;
			font-size:40rpx;

		}
		.text-area-action{
			width:544rpx;
			margin:0 auto;
			display: flex;
			flex-direction: row;
			justify-content:space-between;
			align-items: center;
			color:#FFF;
			margin-top:20rpx;
			.confirmstyle{
				width:120rpx;
				height:70rpx;
				border-radius:50rpx;
				display: flex;
				flex-direction: row;
				justify-content:center;
				align-items: center;
				background: linear-gradient(45deg, #fd7402 0%, #ff5001 100%);
			}
		}
	}
}


.font-param-set{
	position:fixed;
	bottom:0;
	width: 100%;
	// height:500rpx;
	background:#FFF;
	z-index:99999999;
	display: flex;
	flex-direction: column;
	justify-content:space-around;
	align-items: flex-start;
	padding:50rpx 0;
	.font-settab{
		width:100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		view{
			width:200rpx;
			height:100rpx;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-size:34rpx;
			color:#ababab;
		}
		.font-active{
			color:#000;
			font-weight:bold;
		}
	}
	.font-color-family{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width:100%;


		.pos_signer{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap:nowrap;
			width:100%;
			height:100rpx;
			white-space: nowrap;
			.scroll-view-item{
				display:inline-block;
				padding:40rpx;
			}	
		}

		.pos_signers{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap:nowrap;
			width:100%;
			height:90rpx;
			padding-left:50rpx;
			white-space: nowrap;
			.scroll-view-items{
				width:60rpx;
				height:60rpx;
				border-radius:50%;
				display:inline-block;
				margin-right:60rpx;
				margin-top:30rpx;
			}	
		}
	}
	.setting-close{
		position: absolute;
		top: -12px;
		right: 60rpx;
		z-index: 99999999999;
		box-shadow: 0 0 5px rgb(140, 140, 140);
		background: #FFF;
		border-radius: 50%;
		width: 50rpx;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}
}


</style>
