// ref: https://blog.csdn.net/wujiangwei567/article/details/52795656
let app = getApp();
Page({
  data: {
    toastHidden: true,
    submitConfirmHidden: true,
    resetConfirmHidden: true
  },
  onLoad: function(options) {

  },
  formSubmit: function(e) {
    let self = this;
    console.log("formSubmit e => ", e);
    let orgnization = {};
    if (e.detail.value.name && e.detail.value.name.length > 0) {
      orgnization.name = e.detail.value.name;
    }

    if (e.detail.value.description && e.detail.value.description.length > 0) {
      orgnization.description = e.detail.value.description;
    }

    orgnization.open_id = app.globalData.userInfo.open_id;

    console.log("orgnization body => ", orgnization);

    self.setData({
      submitConfirmHidden: false
    });

    wx.request({
      url: "https://www.link-edu.net/orgnization",
      data: orgnization,
      method: "PUT",
      hader: {
        "content-type": "application/json"
      },
      success: function(res) {
        console.log("create orgnization successfully.");
        self.setData({
          submitConfirmHidden: false,
          id: res.data._id
        });
      }
    });
  },
  formReset: function() {
    let self = this;
    console.log("form reset");
    self.setData({
      resetConfirmHidden: false
    });
  },
  confirmReset: function(e) {
    this.setData({
      resetConfirmHidden: true
    });
  },
  confirmSubmit: function(e) {
    let self = this;
    console.log("confirm Submit => ", e);
    this.setData({
      submitConfirmHidden: true,
      toastHidden: false,
      noticeStr: "提交成功"
    });
    wx.redirectTo({
      url: "/pages/orgnization/orgnization?id=" + self.data.id
    })
  },
  toastChange: function(e) {
    this.setData({
      toastHidden: true
    });
  }
});