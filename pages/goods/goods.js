// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList:[{
      assignableAmount:213,
      desc: "云南白药牙膏",
      remainingAmount:292,
      uid: "b1d3200712f34da183738d0cb110e9cf",
      coverImg: '/image/musicImg/music2.jpg',
      effective:"2019-04-06",
      expiry:"2019-04-08",
      gtin:"123",
      price:100,
      // status:"EXPIRED"
    },{
        assignableAmount: 213,
        desc: "测试苹果",
        remainingAmount: 292,
        uid: "9ce546810ea24483bf2cbb595b581c67",
        coverImg: '/image/musicImg/music3.jpg',
        effective: "2019-04-06",
        expiry: "2019-04-08",
        gtin: "123",
        price: 100,
        // status: "COMING_SOON"
    },{
        assignableAmount: 199,
        desc: "牙膏",
        remainingAmount: 199,
        uid: "3d117035f74b49358e33e6081543fca3",
        coverImg: '/image/musicImg/music4.jpg',
        effective: "2019-04-06",
        expiry: "2019-04-08",
        gtin: "123",
        price: 100,
        // status: "EFFECTIVE"
    },{
        assignableAmount: 93,
        desc: "康夫KF-3110吹风",
        remainingAmount: 93,
        uid: "e595eefe97974f8684c479a89667d7da",
        coverImg:'/image/musicImg/music5.jpg',
        effective: "2019-04-06",
        expiry: "2019-04-08",
        gtin: "123",
        price: 100,
        // status: "EFFECTIVE"
    }],

    isAdmin:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /*  【礼品目录】的跳转  */
  // onDetail:function(e){
  //   var uid = e.currentTarget.dataset.uid;
  //   console.log(uid)
  //   console.log("跳转到【礼品目录】详情页");
  //   /*  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面   */
  //   wx.switchTab({
  //     url: '/pages/news/news',
  //   })
  //   console.log("跳转页面")
  // },

  onDetail: function (e) {

    console.log("跳转到【礼品管理界面--礼品详情】详情页");
    var uid = e.currentTarget.dataset.uid;
    var status = e.currentTarget.dataset.status;
    var remainingAmount = e.currentTarget.dataset.amount;
    //第二种传值方式:
    wx.setStorageSync('uid', uid)
    wx.setStorageSync('status', status)
    wx.setStorageSync('remainingAmount', remainingAmount)
    wx.setStorageSync('ownerUid', null)
    /*  保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面  */
    wx.navigateTo({
      url: '/pages/noTabBar/noTabBar',
    })
    console.log("跳转页面")
  },
  /*  【礼品管理】界面的跳转  */

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