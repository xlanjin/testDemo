// pages/forEach-wxcharts/forEach-wxcharts.js

// 引入wx-charts.js文件
const CHARTS = require('../../utils/wxcharts.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataInfo: [
      {
        id: 1,
        subNum: "C1609050001",
        percentage: 30,
        grade: "SPCC",
        spec: "2.5*1200*C",
        weight: 500
      },
      {
        id: 2,
        subNum: "A1609050001",
        percentage: 80,
        grade: "SPCC",
        spec: "3.5*1200*C",
        weight: 100
      },
      {
        id: 3,
        subNum: "C1609051321",
        percentage:50,
        grade: "SPCC",
        spec: "3.5*1400*C",
        weight: 70
      },
      {
        id: 4,
        subNum: "A2149050001",
        percentage: 70,
        grade: "SPCC",
        spec: "3.0*1220*C",
        weight:90
      },
      {
        id: 5,
        subNum: "D1605350001",
        percentage: 66,
        grade: "SPCC",
        spec: "3.5*1600*C",
        weight: 60
      },
      {
        id: 6,
        subNum: "A1464050001",
        percentage: 30,
        grade: "SPCC",
        spec: "3.5*2100*C",
        weight: 120
      }
    ]
  },

  onDetail:function(){
    wx.navigateTo({
      url: '/pages/newTu/newTu',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用 环形函数
    this.ringShow();
  },

  // 实验--饼图   数据为0时，图展示为：均分；但是字体标注为真是数字
  ringShow: function () {
    var stores = [{
      remaining:2,
      redeemed:4,
      delivering:5,
      delivered:1
    },{
        remaining: 4,
        redeemed: 6,
        delivering: 2,
        delivered: 1
    },{
        remaining:7,
        redeemed: 0,
        delivering: 3,
        delivered: 1
    },{
        remaining: 0,
        redeemed: 0,
        delivering: 0,
        delivered: 0
    }]
    for (var i in stores) {
      var item = stores[i];
      console.log(item)
      if (stores[i].remaining + stores[i].redeemed + stores[i].delivering + stores[i].delivered == 0) {
        console.log('*******  第几条数据全部为0： **********',stores[i])
        wx.setStorageSync('stores0', stores[i])
        stores[i].remaining = 1;
        stores[i].redeemed = 1;
        stores[i].delivering = 1;
        stores[i].delivered = 1;
      }
      console.log(stores)
      var stores0 = wx.getStorageSync('stores0');
      let ring = {
        canvasId: "ringGraph" + i, // 与canvas-id一致
        type: "pie",     // 图表类型，可选值为pie, line, column, area, ring
        series: [
          {
            data: stores[i].remaining,
            // name: stores[i].remaining,
            name: (stores[i].remaining + stores[i].redeemed + stores[i].delivering + stores[i].delivered) == 4 ? 0 : stores[i].remaining
          }, {
            data: stores[i].redeemed,
            // name: stores[i].redeemed
            name: (stores[i].remaining + stores[i].redeemed + stores[i].delivering + stores[i].delivered) == 4 ? 0 : stores[i].redeemed
          }, {
            data: stores[i].delivering,
            // name: stores[i].delivering
            name: (stores[i].remaining + stores[i].redeemed + stores[i].delivering + stores[i].delivered) == 4 ? 0 : stores[i].delivering
          }, {
            data: stores[i].delivered,
            // name: stores[i].delivered
            name: (stores[i].remaining + stores[i].redeemed + stores[i].delivering + stores[i].delivered) == 4 ? 0 : stores[i].delivered
          }
        ],
        width: 150,
        height: 140,
        dataLabel: true,
        legend: false,
        disablePieStroke: true,
        extra: {
          pie: {
            offsetAngle: -90
          }
        }
      };
      new CHARTS(ring);
    }
  },

  /***   环形 */
  // ringShow: function () {
  //   for (var i in this.data.dataInfo) {
  //     var item = this.data.dataInfo[i];
  //     let ring = {
  //       canvasId: "ringGraph" + item.id, // 与canvas-id一致
  //       type: "ring",
  //       series: [
  //         {
  //           name: "已完成",
  //           data: item.percentage,
  //           color: '#ff6600'
  //         },
  //         {
  //           name: "未完成",
  //           data: 100 - item.percentage,
  //           color: '#eeeeee'
  //         }
  //       ],
  //       width: 84,
  //       height: 80,
  //       dataLabel: false,
  //       legend: false,
  //       title: { // 显示百分比
  //         name: item.percentage + '%',
  //         color: '#333333',
  //         fontSize: 14
  //       },
  //       extra: {
  //         pie: {
  //           offsetAngle: -90
  //         },
  //         ringWidth: 6,
  //       }
  //     };
  //     new CHARTS(ring);
  //   }
  // },
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