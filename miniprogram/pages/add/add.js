// pages/add/add.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'',
    msg1:'',
    mag2:'',
     list:[],
     tabs:'',
     imgs:'',
     content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this
     //数据查询
    //   db.collection('books').doc('b00064a760950591157a9e3f321284d7').get({
    //   success: function(res) {
    //     console.log(res)
    //     that.setData({
    //       lists: [res.data]
    //     })
    //   }
    // })
    // db.collection('books').where({
    //   title:'在人间'
    // }).get({
    //   success:function(res){
    //     console.log(res);
    //   },
    //   fail:function(err){
    //     console.log(err);
    //   }
    // })
    // db.collection('books').where({
    //   title:'在人间'
    // }).get().then(res=>{
    //   console.log(res);
    // })
  },
  bindKeyInput(e){
     this.setData({
        msg:e.detail.value
     })
  },
  bindauthorInput(e){
    this.setData({
       msg1:e.detail.value
    })
 },
 bindpriceInput(e){
  this.setData({
     msg2:e.detail.value
  })
},
bindtabInput(e){
  this.setData({
     tabs:e.detail.value
  })
},
bindimgInput(e){
  this.setData({
     imgs:e.detail.value
  })
},
bindconInput(e){
  this.setData({
     content:e.detail.value
  })
},
  add(){
    var that=this
    db.collection('books').add({
      data:{
        title:that.data.msg,
        author:that.data.msg1,
        people:that.data.msg2,
        tab:that.data.tabs,
        imgs:that.data.imgs,
        content:that.data.content
      }
    }).then(res=>{
      console.log('添加成功');
    })
  },
  change(){
    var that=this
    //修改数据
    db.collection('books').where({
      title:'that.data.msg'
    }).update({
      data:{
        price:that.data.msg2
      },
      success:function(res){
        console.log(修改成功);
      },
      fail:function(err){
        console.log(err);
      }
    })
  },
  del(){
    var that=this
      // //删除数据 删除单条
      db.collection('books').where({
        title:'that.data.msg'
      }).remove().then(res=>{
        console.log(删除成功);
      })
         // 清空数据库所有的数据
    // db.collection('books').get().then(res=> {
    //   console.log(res.data.length)
    //   for(var i=0;i<res.data.length;i++) {
    //     db.collection('books').where({
    //       _openid: 'oAkjZ5Mo_aS5-wH9adRKJOs3fHiQ'
    //     }).remove().then(res1=> {
    //       console.log(res1)
    //     }) 
    //   }
    // })
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