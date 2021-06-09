// pages/novel/novel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  novel:[],
  id:'',
  names:'',
  chapter:'',
  sort:'',
  section:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
     id:options.sourceId,
     names:options.sourceName
    })
    this.getData(options.chapterId)
  },
  getData(id = ''){
    var that=this
    wx.request({
      url: 'https://m.taoyuewenhua.com/ajax/chapter_content?sourceName='+that.data.names+
      '&sourceId='+that.data.id+'&chapterId='+id,
      method:'GET',
      success(res){
        that.setData({
          novel:res.data.data,
          chapter:res.data.data.chapterId,
          sort:res.data.data.chapterSort
        })
      },
      fail(err){
        console.log(err);
      }
    })
  },
prev(){
  var that=this
 if(that.data.sort!=0){
  that.setData({
    chapter:that.data.novel.prevChapterId
  })
  this.getData(that.data.chapter)
  }else{ 
    wx.showToast({
      title: '当前已经是第一章',
      icon:'none'
    })
 }
},
next(){
  var that=this
  that.setData({
    chapter:that.data.novel.nextChapterId
  })
  this.getData(that.data.chapter)
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