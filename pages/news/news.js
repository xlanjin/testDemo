// pages/news/news.j
var newsData=require("../../data/newsData.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options:'',
    newsTitle:{
      more:false,
      title:"全部新闻"
    },
    hotTitle:{
      more:false,
      title:"热门新闻"
    },
    recomTitle:{
      more:false,
      title:"推荐新闻"
    },
    // 轮播图的数据
    newsDataList:[],
    
    newsList :[],
    hotList:[],
    recomList:[],
    //轮播图的组件
    swiperCom:""

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      newsList:newsData.newsData
    })

    //将【热门、推荐】筛选到页面的方法二：
    // this.setData({
    //   //【热门新闻】
      // hotList:this.data.newsList.filter(item=>{
      //     if(item.hot){
      //       return item;
      //     }
      // }),
    //   //【推荐新闻】
    //   recomList:this.data.newsList.filter(item=>{
    //       if(item.recom){
    //         return item;
    //       }
    //   })
    // })
  },

  //点击【新闻】信息就跳转到【信息详情】页面
  toNewsContent(e) {
    var id = e.currentTarget.dataset.id;
    //点击【新闻】时获取nid然后跳转到【信息详情】页面(【信息详情】是【新闻】页面的子页面---navigateTo只能打开非tabBar页面)；
    wx.navigateTo({
      url:"newsDetail/newsDetail?id="+id
    })
  },
  /* 定义一个函数，来接受swiper组件里的参数 */
  toParMovie(e) {
    console.log(e);
    //swiper.js中通过triggerEvent携带的数据通过e.detail接收
    var nid = e.detail.nid;
    // var ave = e.detail.ave;
    console.log(nid);
    wx.navigateTo({
      url: '/pages/movies/newsDetail/newsDetail?id=' + nid
      // url: '/pages/movies/movieDetail/movieDetail?id=' + nid + "&ave=" + ave
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      // //调用【组件】里面的方法
      // this.swiperCom=this.selectComponent("#swiperCom");
      // this.swiperCom.fun1();

    this.setData({
      newsDataList: this.data.newsList.slice(0, 3)
    })

    //将【热门】、【推荐】显示在页面
    var listData = this.data.newsList;
    var hotList = [];
    var recomList = [];
    for (var i = 0; i < listData.length; i++) {
      if (listData[i].hot) {
        hotList.push(listData[i]);
        this.setData({
          hotList: hotList
        });
      } else if (listData[i].recom) {
        recomList.push(listData[i]);
        this.setData({
          recomList: recomList
        })
      }
    }
  },
  // 将页面的方法给【组件】使用
  bbb(){
      console.log("我是页面里面的方法");
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