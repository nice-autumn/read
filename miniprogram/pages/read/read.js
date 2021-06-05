// pages/read/read.
const db=wx.cloud.database();
const app = getApp();
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
    currentTimenew:'00:00',
    currtRatenew:'00:00',
    audioContext:'', 
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
      this.setData({
          currtRatenew:(resp.detail.duration)*1000,//总时长
          currentTimenew:(resp.detail.currentTime)*1000
      });
      console.log(resp);
      console.log('播放进度变化');
  },
  //快进
  goFast:function(){
    this.audioContext.seek((this.data.currentTimenew/1000)+15);
  },
  //后退
  goSlow(){
    this.audioContext.seek((this.data.currentTimenew/1000)-15);
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
      console.log(res);
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
  this.audioContext.play();
  plugin.textToSpeech({
    lang: "zh_CN",
    tts: true,
    content: that.data.intro,
    success: function (res) {
      console.log(res);
      console.log("succ tts", res.filename);
      that.setData({
        src: res.filename
      })
      that.yuyinPlay();
      console.log(that.data.intro);
    },
    fail: function (res) {
      console.log("fail tts", res)
    }
  })
},

//播放语音
yuyinPlay: function (e) {
  if (this.data.src == '') {
    console.log(暂无语音);
    return;
  }
  this.innerAudioContext.src = this.data.src //设置音频地址
  this.innerAudioContext.play(); //播放音频
 
},

// 结束语音
end: function (e) {
  this.setData({
    show1:false,
    show2:true
  })
  this.innerAudioContext.pause();//暂停音频
  this.audioContext.pause();
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