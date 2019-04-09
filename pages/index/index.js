//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    /* 手机号验证 */
    ajxtrue: false,
    name:"",
    
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 手机号/固定电话验证
  blurPhone: function (e) {
    var phone = e.detail.value;
    let that = this
    let str = /^((0\d{2,3}-\d{7,8})|(1[3458]\d{9}))$/;
    if (!(str.test(phone))) {
      this.setData({
        ajxtrue: false
      })
    } else {
      this.setData({
        ajxtrue: true
      })
      console.log('验证成功', that.data.ajxtrue)
    }
  },
  blurName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  // 表单提交
  formSubmit(e) {
    let that = this
    
    let ajxtrue = this.data.ajxtrue;
    console.log(ajxtrue);
    if (ajxtrue == false) {
      //表单提交进行
      wx.showToast({
        title: '手机号有误',
        icon: "none",
        duration: 2000
      })
    }else{
      let val = e.detail.value
      console.log(val);

     
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    //获得searchs组件
    this.searchTxt = this.selectComponent("#searchTxt");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
