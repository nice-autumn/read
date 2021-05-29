// pages/detail/detail.js
var time = require('../../utils/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
   content:[],
   comment:[],
   time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://m.taoyuewenhua.com/ajax/book?sourceName='+options.sourceName+
      '&sourceId='+options.sourceId,
      method:'GET',
      success(res){
        console.log(res);
        that.setData({
          content:res.data.data
        })
      },
      fail(err){
        console.log(err);
      }
    }),
    wx.request({
      url: 'http://m.taoyuewenhua.com/ajax/top_comments?sourceName='+options.sourceName+
      '&sourceId='+options.sourceId,
      method:'GET',
      success(res){
        console.log(res);
        that.setData({
          comment:res.data.data,
        })
        console.log(time);
      },
      fail(err){
        console.log(err);
      }
    })
    var sjc = 1488481383;
    console.log(time.formatTime(sjc,'Y/M/D h:m:s'));
    console.log(time.formatTime(sjc, 'h:m'));
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