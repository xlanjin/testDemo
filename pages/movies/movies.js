var newsData = require("../../data/newsData.js");
var utils=require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图的组件
    swiperCom: "",
    newsDataList: [],

    moviesInfo:"",
    // 列表标题
    nowPlayTitle: {
      more: true,
      title: "正在上映"
    },
    commingTitle: {
      more: true,
      title: "即将上映"
    },
    topTitle: {
      more: true,
      title: "top250"
    },
    /* 正在、即将、top250时的电影列表 以及搜索*/
    nowPlayingList:{},
    commingSoonList: {},
    top250List: {},

  /* 页面显示的状态 */
  searchDetail:false,
  movieDetail:true,

  text:"",
  searchList:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '奋力加载中',
    })
    
    /*  正在上映 */
    var nowPlayingUrl = app.globalData.dbUrl +"/v2/movie/in_theaters?start=0&count=6";
    /*  即将上映 */
    var commingSoonUrl = app.globalData.dbUrl + "/v2/movie/coming_soon?start=0&count=6";
    /*  Top250 */
    var top250Url = app.globalData.dbUrl + "/v2/movie/top250?start=0&count=6";

    utils.getHttp(nowPlayingUrl, this.handlerData,"nowPlayingList");
    utils.getHttp(commingSoonUrl, this.handlerData,"commingSoonList");
    utils.getHttp(top250Url, this.handlerData,"top250List");

  },

  handlerData(data,reStr) {
    var reStoreData={};
    reStoreData[reStr] = {
      moviesCls: data.subjects,
       //请求数据--完成swiper轮播图效果
      swiperCls: data.subjects.slice(0, 3)
    };
  
    this.setData(reStoreData);
    wx.hideLoading();
  },

  /*  当点击【更多】时调换到【更多电影--页面】 */
  tapMore(event) {
    var title = event.currentTarget.dataset.title;
    console.log(title);
    wx.navigateTo({
      url: 'moviesMore/moviesMore?title=' + title,
    })
  },

  /* 当点击【电影】时跳转到【电影详情】--页面 */
  tapInfo(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "movieDetail/movieDetail?id=" + id
    })
  },


/* 当键盘输入时，触发input事件 （输入字时，对应的页面出现，否则反之）*/
  searchBindInput(e){
    var txt = e.detail.value;
    if (txt == "") {
      this.setData({
        searchList: {},
        movieShow: true,
        searchShow: false
      })
    }
  },

/* 当输入框聚焦时触发事件 */
  searchBindFocus(){
    this.setData({
      searchDetail: true,
      movieDetail: false
    })
  },

/* 当点击【搜索】按钮时触发 */
  searchBindFirm(e){
    wx.showLoading({
      title: '奋力加载中',
    })
    var txt = e.detail.value;
    var searchUrl = app.globalData.dbUrl + "/v2/movie/search?q=" + txt;
    util.getHttp(searchUrl, this.handlerData, "searchList");
  },
/* 定义一个函数，来接受swiper组件里的参数 */
  toParMovie(e) {
    console.log(e);
    //swiper.js中通过triggerEvent携带的数据通过e.detail接收
    var nid = e.detail.nid;
    // var ave = e.detail.ave;
    console.log(nid);
    wx.navigateTo({
      url: '/pages/movies/movieDetail/movieDetail?id=' + nid 
      // url: '/pages/movies/movieDetail/movieDetail?id=' + nid + "&ave=" + ave
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
    this.setData({
      searchDetail: false,
      movieDetail: true
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      searchDetail: false,
      movieDetail: true
    })
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