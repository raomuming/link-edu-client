Page({
  data: {
    course: null
  },
  onLoad: function(options) {
    let self = this;
    if (options.id != null && options.id > 0) {
      self.fetchCourseById(options.id, (course) => {
        if (course != null) {
          self.setData({
            course: course
          });
        }
      });
    }
  },
  fetchCourseById(id, callback) {
    console.log('fetch course by id: ' + id);
    wx.request({
      url: "https://www.link-edu.net/course/" + id,
      data: {},
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function(res){
        console.log("fetch course by id, result => ", res.data);
        callback(res.data);
      },
      fail: function() {

      }
    });
  },
  onShareAppMessage: function() {
    let self = this;
    return {
      title: "分享课程",
      desc: "测试分享磕碜",
      path: "/pages/course/course?id=" + self.data._id
    };
  }
});