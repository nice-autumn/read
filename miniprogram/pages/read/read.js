
const db=wx.cloud.database();
const app = getApp();
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
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
  },
wordYun(){
   Dialog.alert({
    message: '请前往app体现完整功能',
    theme: 'round-button',
  }).then(() => {
    // on close
  });
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