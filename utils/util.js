//封装请求数据的接口
const getHttp=(url,cb,reStr)=>{
  wx.request({
    url: url,
    method: "get",
    header: {
      'content-type': 'json'
    },
    success: (res) => {
      cb(res.data,reStr);
    },
    fail: (error) => {
      console.log(error);
    }
  })
}
module.exports = {
  getHttp
}
