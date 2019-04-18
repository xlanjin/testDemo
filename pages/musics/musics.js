// pages/musics/musics.js
var reMmend=require("../../data/musicRe.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    musicTitle:["推荐音乐","热歌榜","搜索"],
    /* 音乐标题 */
    recommend:{
      more: false,
      title: "推荐歌单"
    },
    newSong:{
      more: false,
      title: "最新音乐"
    },
    /* 推荐歌单--数据 */
    musicDataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /* 点击【音乐-标题】切换相应内容以及样式 */
  getInd(e) {
    var index = e.currentTarget.dataset.current;
    console.log('**************   当前点击的index为：  ******************',index);
    this.setData({
      currentTab: index
    })
  },

  //滑动切换
  swiperTab: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      newsDataList: reMmend.reMmend
    })
    console.log(this.data.newsDataList);
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