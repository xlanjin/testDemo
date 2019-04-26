// pages/newTu/newTu.js
// pages/projectsExamples/projectsExamples.js

/*   1、引入JS     */
import * as echarts from '../../utils/echarts';
import util from "../../utils/util";
//首先引入wxcharts.js插件
var wxCharts = require("../../utils/wxcharts.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW = 0;

/*  2、定义全局变量   */
var pieChart = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*  Eacharts图表写入方式 一   */
    ecBar: {
      onInit: function (canvas, width, height) {
        pieChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(pieChart);
        /*  将设置好的图表属性放置到容器中  注意：如果在这里放置则在Page外面定义getPieZ()函数  */
        pieChart.setOption(getPieZ())
        /*  实例化图表 */
        return pieChart;
      }
    },
    /* 背景颜色 */
    listItemStyle: [{
      color: '#42A0F7',
      title: '已兑换',
      rout: 'redeemed'
    }, {
      color: '#EA3F25',
      title: '剩余数',
      rout: 'remaining'
    }, {
      color: '#F1BB41',
      title: '已配送',
      rout: 'delivered'
    }, {
      color: '#81D452',
      title: '配送中',
      rout: 'delivering'
    }],
    productsDesc: null,
    emptyState: "display:none",
    emptyStroes: "display:none",

    contentEmpty: "display:block",

    canvasWidth: null,
    canvasHeight: null,
    canvasLeft: null,
    bottomHeight: null,

    storeLists: [{
      remaining: 25,
      redeemed: 10,
      delivering: 12,
      delivered: 3,
      name: '泡泡糖-N'
    }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
      name: '泡泡糖-V大大大大哒哒'
    }, {
      remaining: 25,
      redeemed: 10,
      delivering: 12,
      delivered: 3,
      name: '泡泡糖-F'
    }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
      name: '泡泡糖-D'
    }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
      name: '泡泡糖-A'
    }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
      name: '泡泡糖-L'
      }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
        name: '泡泡糖-M'
      }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
        name: '泡泡糖-U'
      }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
        name: '泡泡糖-Y'
      }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
        name: '泡泡糖-M'
      }, {
        remaining: 25,
        redeemed: 10,
        delivering: 12,
        delivered: 3,
        name: '泡泡糖-U'
      }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 屏幕宽度
    let windowWidth = wx.getSystemInfoSync().windowWidth
    // console.log('屏幕宽度为：', windowWidth)

    /*************************     对总计饼图进行适配问题      ***************************/
    //市面上常用手机尺寸（宽）有：375、414、320、411、412、360、480
    if ((windowWidth >= 360) && (windowWidth < 400)) {
      this.setData({
        canvasWidth: 228,
        canvasHeight: 210,
        canvasLeft: 36,
      })
    } else if ((windowWidth >= 400) && (windowWidth < 420)) {
      this.setData({
        canvasWidth: 250,
        canvasHeight: 220,
        canvasLeft: 39,
      })
    } else if ((windowWidth >= 420) && (windowWidth <= 480)) {
      this.setData({
        canvasWidth: 280,
        canvasHeight: 240,
        canvasLeft: 41,
      })
    } else if ((windowWidth >= 300) && (windowWidth < 330)) {
      this.setData({
        canvasWidth: 210,
        canvasHeight: 170,
        canvasLeft: 33,
      })
    } else {
      this.setData({
        canvasWidth: 215,
        canvasHeight: 200,
        canvasLeft: 34,
      })
    }

    this.getContentInfo()

  },
  /**
   *  点击【标题】跳转选择礼品
   * 
   */
  activeType: function () {
    wx.navigateTo({
      url: '/pages/eachartsDemo/eachartsDemo',
    })
  },

  getContentInfo: function () {

    var that = this;

    /* 对数据进行Eacharts数据格式处理 */
    var stores = that.data.storeLists;
    if (stores.length == 0) {
      that.setData({
        emptyStroes: "display:flex"
      })
    }

    /**********************   计算站点区域的高度  **********************/
    let bottomHeight = ((Math.ceil(stores.length / 2)) * 300)+80;
    that.setData({
      bottomHeight: bottomHeight
    })
    // console.log("*************   底部高度为：  **************", bottomHeight)
    /**************************  【站点】饼图图表统计  ***********************/
    for (let i = 0; i < stores.length; i++) {
      let ring = {
        canvasId: "ringGraph" + i, // 与canvas-id一致
        type: "pie",     // 图表类型，可选值为pie, line, column, area, ring
        series: [
          {
            data: stores[i].remaining,
            name: stores[i].remaining
          }, {
            data: stores[i].redeemed,
            name: stores[i].redeemed
          }, {
            data: stores[i].delivering,
            name: stores[i].delivering
          }, {
            data: stores[i].delivered,
            name: stores[i].delivered
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
      new wxCharts(ring);
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.onLoad();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.onReady();
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


/* 此函数定义在外面则是在data中定义初始图表 */
function getPieZ() {
  return {
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 15,
      top: 30,
      // bottom: 20
    },
    series: [{
      name: '访问来源',
      type: 'pie',
        /* 调整图表的整体大小 */
      radius: '62%',
      labelLine: {
        length: 4,
        length2: 4
      },
        /* 调整图表的在区域内的位置 */
      center: ['33%', '40%'],
        /* 图表的数据 */
      data: [
        { value: 328, name: '剩余:328', itemStyle: { color: '#EA3F25' }, label: { fontSize: 10 } },
        { value: 40, name: '已兑换:40', itemStyle: { color: '#42A0F7' }, label: { fontSize: 10 } },
        { value: 17, name: '配送中:17', itemStyle: { color: '#81D452' }, label: { fontSize: 10 } },
        { value: 131, name: '已配送:131', itemStyle: { color: '#F1BB41' }, label: { fontSize: 10 } }
      ]
    }]
  }
}