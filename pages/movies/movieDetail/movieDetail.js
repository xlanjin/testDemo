// pages/movies/movieDetail/movieDetail.js
var app = getApp();
var util = require("../../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 标题内容 */
    synopsis: {
      more: false,
      title: "剧情简介"
    },
    cast: {
      more: false,
      title: "演员阵容"
    },
    /* 数据请求地址 */
    reqUrl:"",
    /* 最后数据的存放 */
    movieAllInfo:{},
    /* 演员阵容--星星的状态(不显示) */

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

    var id = options.id;
    var movieUrl = app.globalData.dbUrl + "/v2/movie/subject/" + id;
    /* 进行数据请求 */
    util.getHttp(movieUrl, this.handlerData);
    /* 保存数据 【将完整的数据地址(movieUrl)赋值给--请求地址(reqUrl)】*/
    this.setData({
      reqUrl: movieUrl
    })
  },
  /* 请求到数据后的数据处理函数 */
  handlerData(data){
    // console.log(data);
    //图片
    var introImg = data.images ? data.images.large : "";
    //标题
    var introTitle = data.title;
    //介绍
    var intro = data.summary;
    //评分
    var average = data.rating.average;
    var scores = data.rating.stars;
    //类型
    var mvType = data.genres.join("、");
    //地区
    var countries = data.countries.join("/");
    /* 电影--导演 */
    var directors = []
    for (var i = 0; i < data.directors.length; i++) {
      directors.push(data.directors[i].name);
    }
    var actors = directors.join("、");
    //主演        
    var casts = ""
    //演员阵容
    var castsInfo = [];
    for (var i in data.casts) {
      casts += data.casts[i].name + "/";
      var castList = {
        images: data.casts[i].avatars ? data.casts[i].avatars : "",
        title: data.casts[i].name,
        showStarts: true
      }
      castsInfo.push(castList);
    }
    casts = casts.substring(0, casts.length - 1);
    /* 定义一个大对象，将数据逐个添加到对象里 */
    var allInfo = {
      introTitle,
      introImg,
      intro,
      average,
      scores,
      mvType,
      countries,
      casts,
      castsInfo,
      actors
    }
    /* 最后赋值给对象存储地 */
    this.setData({
      movieAllInfo: allInfo
    })
    /* 最后在调用星星的组件（在handlerData调用） */
    this.starts.conveyStarts();
  },

  /* 点击【图片】时，查看大图片 */
  // viewBigImg(e) {
  //   var src = e.currentTarget.dataset.imgSrc;
  //   console.log(src)
  //   wx.previewImage({
  //     current: "", // 当前显示图片的http链接
  //     urls: [src] // 需要预览的图片http链接列表
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    /* 调用星星的组件 */
    this.starts = this.selectComponent("#starts");
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