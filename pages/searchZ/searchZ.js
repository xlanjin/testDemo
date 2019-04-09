// pages/searchZ/searchZ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /*  点击【搜索】按钮 */
  searchIcon: function () {
    var searchTxt = this.data.searchTxt;
    // 发起搜索机构请求
    wx.setStorageSync('organisationSearch', searchTxt)
    // this.changeData();
    console.log("发起请求")
  },
  searchTxtValue: function (e) {
    this.setData({
      searchTxt: e.detail.value
    })
    // console.log("搜索的机构名字为：",this.data.searchTxt);
  },

  /* 
  * 新增 清空输入框功能
  * @time 04-12-v1.1.13
  */
  emptyValue: function () {
    this.setData({
      searchTxt: ""
    })
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