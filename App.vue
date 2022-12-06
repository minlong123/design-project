<script>
export default {

  onLaunch: function () {
  },
  onShow: function () {
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
	
	
/*每个页面公共css */
@import "uview-ui/index.scss";
@import url("./static/fonts/iconfont.css");

// 定义所有字体
@font-face {font-family:'童话体简';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/TengXiangTongHuaTiJian-2.ttf') format('truetype');
}

@font-face {font-family:'思源黑体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/HuaGuangGangTieZhiHei-KeBianTi-2.ttf') format('truetype');
}

@font-face {font-family:'宋体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/SIMYOU.TTF') format('truetype');
}

@font-face {font-family:'幼圆体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/simsun.ttc') format('truetype');
}

@font-face {font-family:'浮沉繁花';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E6%B5%AE%E6%B2%89%E7%B9%81%E8%8A%B1.ttf') format('truetype');
}
@font-face {font-family:'花落寄相思';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E8%8A%B1%E8%90%BD%E5%AF%84%E7%9B%B8%E6%80%9D.ttf') format('truetype');
}
@font-face {font-family:'华康金文体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E9%87%91%E6%96%87%E4%BD%93W3-GB.ttc') format('truetype');
}
@font-face {font-family:'华康勘亭流';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E5%8B%98%E4%BA%AD%E6%B5%81W9.TTF') format('truetype');
}
@font-face {font-family:'华康俪金黑体简';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E4%BF%AA%E9%87%91%E9%BB%91%E4%BD%93%E7%AE%80W81.ttc') format('truetype');
}
@font-face {font-family:'华康少女文字';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E5%B0%91%E5%A5%B3%E6%96%87%E5%AD%97W5.TTF') format('truetype');
}
@font-face {font-family:'华康手札体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E6%89%8B%E6%9C%AD%E4%BD%93W7.ttf') format('truetype');
}
@font-face {font-family:'华康宋体简';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E5%AE%8B%E4%BD%93%E7%AE%80W12.TTF') format('truetype');
}
@font-face {font-family:'华康娃娃体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E5%A8%83%E5%A8%83%E4%BD%93W5%28P%29.TTF') format('truetype');
}
@font-face {font-family:'华康圆体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%8D%8E%E5%BA%B7%E5%9C%86%E4%BD%93W7%28P%29.TTF') format('truetype');
}
@font-face {font-family:'蒙纳电脑体简';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E8%92%99%E7%BA%B3%E7%94%B5%E8%84%91%E4%BD%93%E7%AE%80.ttf') format('truetype');
}
@font-face {font-family:'庞门正道标题体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%BA%9E%E9%97%A8%E6%AD%A3%E9%81%93%E6%A0%87%E9%A2%98%E4%BD%93.TTF') format('truetype');
}
@font-face {font-family:'晴圆等宽';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E6%99%B4%E5%9C%86%E7%AD%89%E5%AE%BD.ttc') format('truetype');
}
@font-face {font-family:'山涧流水';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%B1%B1%E6%B6%A7%E6%B5%81%E6%B0%B4.ttf') format('truetype');
}
@font-face {font-family:'苏新诗卵石体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E8%8B%8F%E6%96%B0%E8%AF%97%E5%8D%B5%E7%9F%B3%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'英雄黑体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%823%E5%8F%B7-%E8%8B%B1%E9%9B%84%E9%BB%91%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'石头体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%8220%E5%8F%B7-%E7%9F%B3%E5%A4%B4%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'空灵体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%8278%E5%8F%B7-%E7%A9%BA%E7%81%B5%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'萌趣露珠体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%82106%E5%8F%B7-%E8%90%8C%E8%B6%A3%E9%9C%B2%E7%8F%A0%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'七岁半';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%82122%E5%8F%B7-%E4%B8%83%E5%B2%81%E5%8D%8A.ttf') format('truetype');
}
@font-face {font-family:'萌趣芋圆体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%82139%E5%8F%B7-%E8%90%8C%E8%B6%A3%E8%8A%8B%E5%9C%86%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'灵动布丁体';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%82234%E5%8F%B7-%E7%81%B5%E5%8A%A8%E5%B8%83%E4%B8%81%E4%BD%93.ttf') format('truetype');
}
@font-face {font-family:'纸飞机';
    src:url('https://zaiercommon.oss-cn-beijing.aliyuncs.com/%E5%AD%97%E9%AD%82261%E5%8F%B7-%E7%BA%B8%E9%A3%9E%E6%9C%BA.ttf') format('truetype');
}


body {
  font-family: PingFang SC, PingFang SC-Bold;
}

.lineTitle {
  background: #f5f5f9;
  padding: 10rpx 20rpx;
  font-size: 26rpx;
  color: #999;
}

::v-deep .u-form-item__body {
  padding: 0 10px;
}
::v-deep .u-form-item--left {
  color: #666;
}
::v-deep .u-form-item__message {
  padding-left: 20rpx !important;
}
::v-deep .u-navbar-content-title {
  .u-title {
    font-weight: 500 !important;
  }
}
.indent {
  text-indent: -16rpx;
  margin-left: 20rpx;
}


/* 授权获取个人信息，引导登录样式弹窗 */
.sign-modes{
  position:fixed;
  z-index:0;
  top:0;
  height:100%;
  width:100%;
  background:rgba(0,0,0,0.5);
  z-index:99999999999;
}
.activess{
  display:none;
}
.sechicun{
  position:relative;
  z-index:999999999999999999;
  width: 100%;
	height:100%;
  position:fixed;bottom:65rpx;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.conss{
  width: 600rpx;
	height: 570rpx;
	background-color: #ffffff;
  border-radius:22rpx;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  position: relative;
}
.conss>.perticn{
	font-size: 32rpx;
  padding-top:52rpx;
  color: #444444;
  font-weight:bold;
}
.conss .perticn1{
  margin-top:45rpx;
}
.conss .perticn1 image{
  width: 113rpx;
	height: 113rpx;
}
.conss .perticn2{
  width:500rpx;
  margin:0 auto;
	font-size: 26rpx;
	letter-spacing: 2px;
  color: #333333;
  margin-top:44rpx;

}
.conss .perticn3{
  width:500rpx;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;

}
.conss .perticn3 .circ{
  width: 7px;
  height: 7px;
  border-radius:50%;
  background-color:#999999;
  margin-top:20rpx;
}
.perticn4{
  margin-left:21rpx;
	font-size: 26rpx;
letter-spacing: 1px;
  color: #999999;
  margin-top:20rpx;
}
.btnss{
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border-top:2rpx solid #ededed;
  position: absolute;
  bottom:0;
  height:100rpx;
}
.btnss>button{
  flex:1;
  background:#FFFFFF;
  width:45%!important;
	font-size: 28rpx;
	letter-spacing: 2px;
  color: #666666;
  font-weight:500;
}
.btnss>button:after{
	position:relative;
	display: none;
}
.btnss>button:first-child{
  border-right:1px solid #ededed;
}
.btnss>button:first-child+button{
  color: #0097d9;
}






</style>
