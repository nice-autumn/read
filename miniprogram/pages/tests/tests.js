// pages/tests/tests.js
const plugin = requirePlugin('WechatSI');
const myaudio = wx.createInnerAudioContext({});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // src: 'https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia?filename=1622989729_f4f7f5297029a709dd0cb12487e5df83&filekey=826940778&source=miniapp_plugin',
    currtRate:'00:00',
    currentTime:"00:00",
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    myaudio.src="https://ae.weixin.qq.com/cgi-bin/mmasrai-bin/getmedia?filename=1622989729_f4f7f5297029a709dd0cb12487e5df83&filekey=826940778&source=miniapp_plugin"
    // myaudio.src="/miniprogram/薛之谦 - 一半.mp3"
    },
    //播放
  play: function () {
    myaudio.play();
    console.log(myaudio.duration);
  },
  // 停止
  stop: function () {
    myaudio.pause();
  },
  /**
   * 重播
   */
  review:function(){
   myaudio.stop();
    myaudio.play()
  },
    //获取播放时间
    timeUpdate:function(resp){
      console.log(resp);
      this.setData({
          currtRate:(resp.detail.duration)*1000,//总时长
          currentTime:(resp.detail.currentTime)*1000//当前时长
      })
      console.log(resp);
      // console.log('播放进度变化');
  },
  //文字转语音
   change(e) {
    var that = this;
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      // content: that.data.intro,
      content:'雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶子却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。',
      success: function (res) {
        console.log(res);
        // console.log("succ tts", res.filename);
        that.setData({
          src: res.filename
        })
      console.log(that.data.src);
      },
      fail: function (res) {
        console.log("fail tts", res)
      }
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