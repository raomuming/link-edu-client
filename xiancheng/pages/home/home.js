// now, this list is for testing only
var list;
Page({
  data:{},
  onLoad:function(options){
    this.setData({
      list: list
    })
  }
});

// refer to: https://blog.csdn.net/YanzYan/article/details/54345828
wx.request({
  url: "https://www.link-edu.net/courses",
  data: {},
  method: "GET",
  header: {
    'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res.data);
    list = res.data;
  }
});