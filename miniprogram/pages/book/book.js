// pages/listen/listen.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newbook:[],
    life:[],
    culture:[],
    popular:[],
    goodbook:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGood()
    this.getNew()
    this.getBook()
  },
  getGood(){
    var that=this
 db.collection('morebooks').where({
       tab:"文学"
      }).get({
        success:function(res){
          that.setData({
            goodbook:res.data
          })
        },
        fail:function(err){
          console.log(err);
        }
      })
  },
  getNew(){
    var that=this
 db.collection('books').where({
        _openid:"oAkjZ5Mo_aS5-wH9adRKJOs3fHiQ"
      }).get({
        success:function(res){
          that.setData({
            newbook:res.data
          })
        },
        fail:function(err){
          console.log(err);
        }
      })
  },
  getBook(){
       var that=this
  //文学
  db.collection('morebooks').where({
    tab:'文学'
  }).limit(3).get({
    success:function(res){
      that.setData({
        life:res.data
      })
    },
    fail:function(err){
      console.log(err);
    }
  })
   //历史
   db.collection('morebooks').where({
    tab:'历史'
  }).get({
    success:function(res){
      that.setData({
        culture:res.data
      })
    },
    fail:function(err){
      console.log(err);
    }
  })
   //流行
   db.collection('morebooks').where({
    tab:'流行'
  }).get({
    success:function(res){
      that.setData({
        popular:res.data
      })
    },
    fail:function(err){
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