// pages/movies/moviesMore/moviesMore.js
var app=getApp();
var util=require("../../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 从上个页面获取到对应的---【标题】 */
      navTitle:"",
      /* 请求数据的地址 */
      reqUrl:"",
      /* 获取从上个页面点击时对应的数据---【电影列表】 */
      allClsMovies:[],
      /* 到底部时，每次请求数据的个数 */
      totalCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 页面加载动画 */
    // wx.showLoading({
    //   title: '奋力加载中',
    // });
    //跳转页面之后，将头部标题修改成对应的【名称】
    wx.setNavigationBarTitle({
      title: this.data.navTitle,
    });
    var title = options.title;
    /* 根据从上个页面获取的【标题】，判断获取的数据地址Url */
    var movieUrl="";
    switch (title) {
      case "正在上映": movieUrl = app.globalData.dbUrl + "/v2/movie/in_theaters";
        break;
      case "即将上映": movieUrl = app.globalData.dbUrl + "/v2/movie/coming_soon";
        break;
      case "top250": movieUrl = app.globalData.dbUrl + "/v2/movie/top250";
        break;
    }
    /* 然后进行数据请求 */
    util.getHttp(movieUrl,this.handlerData);
    /* 保存数据 【将完整的数据地址(movieUrl)赋值给--请求地址(reqUrl)】*/
    this.setData({
      //获取到参数【title】的值
      navTitle:title,
      //数据请求的完整地址
      reqUrl:movieUrl
    })
  },
  /* 请求到数据后的数据处理函数 */
  handlerData(data){
    // console.log(data);
    /* 数据每次到底部请求时，  */
    var movieSubject = data.subjects;
    console.log(movieSubject);
    for (var i in movieSubject) {
      movieSubject[i].rating.average = {
        average: movieSubject[i].rating.average,
        starArr: util.conveyStarts(movieSubject[i].rating.average)
      }
    }
    this.setData({
      allClsMovies: this.data.allClsMovies.concat(movieSubject),
      totalCount: this.data.totalCount+=20
    })
    // console.log(this.data.allClsMovies);
  },
  /* 当点击【电影】时跳转到【电影详情】--页面 */
  tapInfo(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/movies/movieDetail/movieDetail?id=" + id
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
    var loadingMoreUrl = `${this.data.reqUrl}?start=${this.data.totalCount}&count=20`;
    util.getHttp(loadingMoreUrl, this.handlerData);
    wx.showNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})