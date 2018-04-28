Page({
  data: {
    orgnization: null
  },
  onLoad: function (options) {
    let self = this;
    if (options.id != null && options.id > 0) {
      self.fetchOrgnizationById(options.id, (orgnization) => {
        if (orgnization != null) {
          self.setData({
            orgnization: orgnization
          });
        }
      });
    }
  },
  onShareAppMessage: function() {
    let self = this;
    return {
      title: "邀请加入XXX",
      desc: "测试分享磕碜",
      path: "/pages/invite_to_orgnization/invite_to_orgnization"
    };

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