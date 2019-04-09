// pages/components/searchs/searchs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    searchTxt: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    searchTxtValue: function (e) {
      this.setData({
        searchTxt: e.detail.value
      })
      // console.log("搜索的机构名字为：",this.data.searchTxt);
    },
  
    /* 
    * 新增 清空输入框功能
    * @time 04-12-v1.1.13
    */
    emptyValue: function () {
      this.setData({
        searchTxt: ""
      })
    }
  }
})
