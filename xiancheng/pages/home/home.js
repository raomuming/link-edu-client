
var list;
Page({
  data:{
    list: []
  },
  onLoad:function(options){
    let self = this;
    // refer to: https://blog.csdn.net/YanzYan/article/details/54345828
    wx.request({
      url: "https://www.link-edu.net/courses",
      data: {},
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function(res) {
        self.setData({
          list: res.data
        });
      }
    });
  }
});