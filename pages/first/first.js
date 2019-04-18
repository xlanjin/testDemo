// pages/first/first.js
//引用全局的变量
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },
  //利用switchTab切换页面（路径后不能带参数），在App.json配置tabBar
  /* 如果不同的页面顶部需要不同的颜色，可以在自己的json里面配置  */
  enterIndex(){
    wx.switchTab({
      url: '/pages/news/news',
    })
  },
  // //点击【按钮】时，获取用户的昵称以及头像信息
  // getUserInfo(e){
  // //  /* 加载动画  */
  // //   wx.showLoading();
  // //   wx.getUserInfo({
  // //      success:(res)=>{
  // //        console.log(res.userInfo);
  // //        //更新数据
  // //        this.setData({
  // //          userInfo:res.userInfo
  // //        })
  // //      },
  // //      complete:()=>{
  // //        wx.hideLoading();
  // //      }
  // //   })
  // console.log(e);

  //   // /* 当我点击【开启吧】按钮时，修改昵称  */
  //   // this.setData({
  //   //   userInfo:"二十岁i"
  //   // })
  //   // // 将修改的结果打印到控制台
  //   // console.log(this.data.userInfo);
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo
      })
    }else{
      // 加载动画
      wx.showLoading()
      wx.getUserInfo({
        success:(res)=>{
          this.setData({
            userInfo:res.userInfo
          })
        },
        complete:()=>{
          wx.hideLoading();
        }
      })
    }
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
   * 
   * wx.navigateTo()---这是跳转到子级页面，会隐藏(不关闭)当前页面  执行onHide
   * 小程序切换到后台状态时：
   * wx.redirectTo()---这是跳转到新页面，会关闭当前页面  执行onUnload
   * 
   * wx.switchTab()---这是
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