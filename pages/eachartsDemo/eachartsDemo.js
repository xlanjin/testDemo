/*  1、引入js */
import * as echarts from '../../utils/echarts';
import util from "../../utils/util";
const app = getApp()

// 引入wx-charts.js文件
const CHARTS = require('../../utils/wxcharts.js');

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
    /*  Eacharts图表写入方式 二   */
    ec: {
      lazyLoad: false // 延迟加载
    }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**   Eacharts第二种方法 */
    this.piechartsComponnet = this.selectComponent('#mychart-dom-bar'); //饼图
    //调用图表
    this.init_pieCharts();


    /**调用 wxcharts图表 */
    this.lineShow();
  },
  /*  Eacharts第二种方法-----------初始化图表--饼图 */
  init_pieCharts: function () {
    this.piechartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const pieChart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      pieChart.setOption(this.getPieOption());
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return pieChart;
    });
  },
  /*  Eacharts第二种方法------setOption赋值--饼图 */
  getPieOption: function () {
    var option = {
      // tooltip: {
      //   show: true,
      //   formatter: "{a} <br/>{b} : {c} ({d}%)"
      // },
      // toolbox: {
      //   show: true,
      //   feature: {
      //     mark: {
      //       show: true
      //     },
      //     dataView: {
      //       show: true,
      //       readOnly: false
      //     },
      //     restore: {
      //       show: true
      //     },
      //     saveAsImage: {
      //       show: true
      //     }
      //   }
      // },
      color: ['#56cbff', '#ff6300'],
      calculable: true,
      series: [{
        name: '分类',
        type: 'pie',
        center: ['50%', '50%'],
        radius: 60,
        /*  将数据以百分比的形式显示出来 */
        itemStyle: {
          normal: {
            label: {
              show: true,
              position: 'inner',
              formatter: function (params) {
                return (params.percent - 0).toFixed(0) + '%'
              }
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            label: {
              show: true,
              formatter: "{b}\n{d}%"
            }
          }
        },
        data: [{
          value: 99,
          name: 'A'
        },
        {
          value: 1,
          name: 'B'
        }
        ]
      }]
    };
    return option;
  },


  /**
   *   使用 wxcharts进行单个图表使用
  */

  lineShow: function () {
    var random1 = Math.floor(Math.random() * (500 - 50 + 1) + 50);
    var random2 = Math.floor(Math.random() * (800 - 100 + 1) + 100);
    var random3 = Math.floor(Math.random() * (1000 - 200 + 1) + 200);
    var random4 = Math.floor(Math.random() * (300 - 10 + 1) + 10);
    var random5 = Math.floor(Math.random() * (600 - 300 + 1) + 300);

    let line = {
      canvasId: 'lineGraph', // canvas-id
      type: 'line', // 图表类型，可选值为pie, line, column, area, ring
      categories: ['2017-08', '2017-09', '2017-10', '2017-11', '2017-12'],
      series: [{ // 数据列表
        name: ' ',
        data: [random1, random2, random3, random4, random5]
      }],
      yAxis: {
        min: 0 // Y轴起始值
      },
      width: 310,
      height: 200,
      dataLabel: true, // 是否在图表中显示数据内容值
      legend: false, // 是否显示图表下方各类别的标识
      extra: {
        lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
      }
    }
    new CHARTS(line);
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

/* 此函数定义在外面则是在data中定义初始图表 */
function getPieZ() {
  return {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        /* 调整图表的整体大小 */
        radius: '96%',
        /* 调整图表的在区域内的位置 */
        center: ['50%', '50%'],
        /* 调整图表的s数值线 */
        labelLine: {
          normal: {
            show: false
          }
        },
        /* 调整图表的数据内容值在图表外面还是内部 */
        label: {
          normal: {
            position: 'inner'
          }
        },
        /* 图表的数据 */
        data: [
          { value:32, name: '剩余', itemStyle: { color: '#EA3F25' } },
          { value: 27, name: '已兑换', itemStyle: { color: '#42A0F7' } },
          { value: 30, name: '配送站', itemStyle: { color: '#81D452' } },
          { value: 42, name: '配送数', itemStyle: { color: '#F1BB41' } }
        ]
      }
    ]
  }
}