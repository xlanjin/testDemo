//首先引入wxcharts.js插件
var wxCharts = require("../../wxcharts/wxcharts.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW = 0;

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

    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    console.log(windowW);

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    // pieCanvas
    new wxCharts({
      animation: true, //是否有动画
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 15,
        color: '#EA3F25',
        stroke: false
      }, {
        name: '成交量2',
        data: 35,
          color: '#42A0F7',
          stroke: false
      }, {
        name: '成交量3',
        data: 78,
          color: '#81D452',
          stroke: false
        }, {
          name: '成交量4',
          data: 98,
          color: '#F1BB41',
          stroke: false
        }],
      width: (375 * windowW),
      height: (250 * windowW),
      /*  */
      disablePieStroke: true,
      dataLabel: false,
      legend: false,
    });
    
  },
})