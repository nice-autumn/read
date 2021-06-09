// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names:'',
    id:'',
    id1:'',
    id2:'',
    section:[],
    chapter:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.setData({
      names:options.sourceName,
      id:options.sourceId,
      id1:options.chapterId,
    })
   this.getMenu()
  },
  getMenu(){
    var that=this
    wx.request({
      url: 'https://m.taoyuewenhua.com/ajax/chapters?sourceName='+that.data.names+
      '&sourceId='+that.data.id+'&chapterId='+that.data.id1,
      method:'GET',
      success(res){
        that.setData({
         section:res.data.data,
         chapter:res.data.data.chapters
        })
      },
      fail(err){
        console.log(err);
      }
    })
  },
    getChapter: function(e){
      console.log(e.currentTarget.dataset.id);
      var that=this
      let i=e.currentTarget.dataset.id
      that.setData({
        id2:that.data.chapter[i].chapterId
      })
      this.getMenu(that.data.id2)
      wx.navigateTo({
        url: '../novel/novel?sourceName='+that.data.names+
        '&sourceId='+that.data.id+'&chapterId='+that.data.id2,
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