// pages/novel/novel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  novel:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this
    wx.request({
      url: 'http://m.taoyuewenhua.com/ajax/chapter_content?sourceName='+options.sourceName+
      '&sourceId='+options.sourceId,
      method:'GET',
      success(res){
        console.log(res.data.data);
        that.setData({
          novel:res.data.data
        })
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