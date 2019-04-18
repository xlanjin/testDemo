// pages/news/newsDetail/newsDetail.js
var itemIdList = require("../../../data/newsData.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemIdList:[],
    collected:false,
    currentId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      itemIdList: itemIdList.newsData[options.id],
      currentId: options.id
    })
    //查找相对应的id；
    // console.log(this.data.itemIdList);

    //判断【收藏】的状态；
    var collectList =wx.getStorageSync("collectList");
    if (collectList){
      var collectStatus=collectList[options.id];
      if (collectStatus){
        this.setData({
          collected: collectStatus
        })
      }
    }else{
      //如果没有状态值时，就先保存设置
      var collectList={};
      collectList[options.id]=false;
      wx.setStorageSync("collectList", collectList)
    }
  },
  //当点击【收藏】按钮时进行收藏，否则反之
  collectTap(){
    var collectList = wx.getStorageSync("collectList");
    var collectStatus = collectList[this.data.currentId];
    collectStatus = !collectStatus;
    //重新改变一下本地存储中的状态值
    collectList[this.data.currentId]=collectStatus;
    wx.setStorageSync("collectList", collectList)
    //改变【收藏】时的图表
    this.setData({
      collected: collectStatus
    });
    wx.showToast({
      title: collectStatus ? '收藏成功' : '取消收藏',
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