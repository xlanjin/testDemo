// pages/common/components/swiper/swiper.js
Component({
  // 如果一个组件要使用多个slot，需在组件.js里去声明
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
      /* 定义外部的公开属性 */
      newsDataList:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:0,
      autoplay: true
  },

  /**
   * 组件的方法列表 （对外或——自己使用）
   */
  methods: {
      // fun1(){
      //   console.log("我是组件里的方法");
      // },
      // _fun2(){
      //   console.log("我是组件里面的私有方法");
      // },
      // _fun3(){
      //   //事件的名臣
      //   this.triggerEvent("obtain");
      // }
    goPic(e) {
      this.setData({
        currentIndex: e.detail.current
      })
    },
    /* 定义一个私有的方法 */
    _toPar(e) {
      //第二个参数是把当前点击的数据传递出去
      this.triggerEvent("toPagePar", e.currentTarget.dataset);
    },
    /* 轮播图的点击事件 */
    tapdot(e){
      this.setData({
        currentIndex: e.currentTarget.dataset.cur,
        autoplay: false
      })
      setTimeout(() => {
        this.setData({
          autoplay: true
        })
      }, 100)
    }
  }
})
