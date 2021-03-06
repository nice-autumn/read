
const db=wx.cloud.database();
const app = getApp();
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books:'',
    contents:[],
    intro:'',
    show1:false,
    show2:true,
    currtRate:'00:00',
    currentTime:'00:00',
    audioContext:'', 
    total:0,
    now:0
  },
  
    //以下是状态监听
    audioError:function(resp){
      console.log(resp);
  },
  audioPlay:function(resp){
      console.log(resp);
      console.log('开始播放');
  },
  playEnd:function(resp){
      console.log(resp);
      console.log('播放结束');
  },
  timeUpdate:function(resp){
    console.log(resp.detail);
      this.setData({
          total:resp.detail.duration,
          currtRate:(resp.detail.duration)*1000,//总时长
          currentTime:(resp.detail.currentTime)*1000 //当前时间
      });
      // console.log(resp);
      // console.log('播放进度变化');
  },
  slider3change(e){
    console.log(e.detail.value);
    this.setData({
      currentTime:(e.detail.value)*1000,
    })
     this.audioContext.seek((this.data.currentTime/1000))
  },
  //快进
  goFast: function () {
    this.audioContext.seek((this.data.currentTime/1000)+15);
    console.log(this.data.currentTime/1000);
    // this.audioContext.seek(14)
  },
  //后退
  goSlow(){
    this.audioContext.seek((this.data.currentTime/1000)-15);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.audioContext=wx.createAudioContext('audio');
    //数据查询
    var that=this
    that.setData({
      books:options.id
    })
    db.collection('books').where({
        title:that.data.books
      }).get({
        success:function(res){
          that.setData({
            contents:res.data,
            intro:res.data[0].content
          })
        },
        fail:function(err){
          console.log(err);
        }
      })
      console.log(that.data.intro);
       //创建内部 audio 上下文 InnerAudioContext 对象。
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError(function (res) {
      wx.showToast({
        title: '语音播放失败',
        icon: 'none',
      })
    }) 
  },
// 文字转语音
wordYun:function (e) {
  var that = this;
  this.setData({
    show1:true,
    show2:false
  })
  plugin.textToSpeech({
    lang: "zh_CN",
    tts: true,
    // content: that.data.intro,
    content:"https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia?filename=1623838141_41f3820dcc9ea0548a1bcdb29d518260&filekey=826940778&source=miniapp_plugin",
    success: function (res) {
      console.log("succ tts", res.filename);
      that.setData({
        src: res.filename
      })
      that.yuyinPlay();
    },
    fail: function (res) {
      console.log("fail tts", res)
    }
  })
},

// //播放语音
yuyinPlay: function (e) {
  if (this.data.src == '') {
    console.log(暂无语音);
    return;
  }
  this.innerAudioContext.src = this.data.src //设置音频地址
  // this.innerAudioContext.play(); //播放音频
  this.audioContext.play()
},

// 结束语音
end: function (e) {
  this.setData({
    show1:false,
    show2:true
  })
  // this.innerAudioContext.pause();//暂停音频
  this.audioContext.pause();
},
play(){
   Dialog.alert({
    message: '请前往app体现完整功能',
    theme: 'round-button',
  }).then(() => {
    // on close
  });
},
back(){
 wx.navigateBack({
   delta: 1,
 })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})