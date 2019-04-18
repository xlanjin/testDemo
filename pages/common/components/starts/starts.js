// pages/common/components/starts/starts.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /* 平均分的状态 */
    average: {
      type: String,
      value: 0
    },
    /* 星星的状态 */
    starts:{
      type:String,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    startArr:[]
  },

  /**
   * 组件的生命周期
   */
  ready(){
    this.conveyStarts();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    conveyStarts(){
      /* 获取到整颗星星 */
      var startNum = this.data.starts.toString().substring(0,1);
      var endNum = this.data.starts.toString().substring(1,2);
      var arr=[];
      for(var i=1;i<=5;i++){
        if (i <= startNum) {
          arr.push(1);
        }else{
          arr.push(0);
        }
      }
      if(endNum==5){
        arr[startNum]=2;
      }
      this.setData({
        startArr:arr
      })
      // console.log(this.data.startArr);
    }
  }
})
