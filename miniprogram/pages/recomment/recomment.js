// pages/recomment/recomment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists1:[],
    lists2:[],
    lists3:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData(){
    var that=this
  wx.request({
    url:'https://m.taoyuewenhua.com/ajax/book_mall?ctype=2&seed=7808',
    data:{
     
    },
    methods:'GET',
    success(res){
      let list=res.data.data.channelList
      for(var i=0;i<list.length;i++){
        if(list[i].mcid==6){
          that.setData({
        lists1:list[i].bookList,
         })
         }else if(list[i].mcid==7){
          that.setData({
            lists2:list[i].bookList,
             })
        }else if(list[i].mcid==8){
          that.setData({
            lists3:list[i].bookList,
             })
            }
      }
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