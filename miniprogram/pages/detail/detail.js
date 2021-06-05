// pages/detail/detail.js
var that = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
   content:[],
   comment:[],
   times:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
    wx.request({
      url: 'http://m.taoyuewenhua.com/ajax/book?sourceName='+options.sourceName+
      '&sourceId='+options.sourceId,
      method:'GET',
      success(res){
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
        that.setData({
          comment:res.data.data,
        })
        that.setData({
          comment:that.data.comment
        })
        console.log(that.data.comment);
      },
      fail(err){
        console.log(err);
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