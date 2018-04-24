Page({
  data: {
    orgnization: null
  },
  onLoad: function (options) {
    let self = this;
    if (options.id != null && options.id > 0) {
      self.fetchOrgnizationById(options.id, (course) => {
        if (course != null) {
          self.setData({
            course: course
          });
        }
      });
    }
  },
  fetchOrgnizationById(id, callback) {
    console.log('fetch orgnization by id: ' + id);
    wx.request({
      url: "https://www.link-edu.net/orgnization/" + id,
      data: {},
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log("fetch orgnization by id, result => ", res.data);
        callback(res.data);
      },
      fail: function () {

      }
    });
  }
});