let app = getApp()
Page({
  data: {
    isLoggin: false,
    userInfo: null
  },
  onLoad: function(options) {
    let self = this;
    console.log("app.globalData => ", app.globalData);
    self.setData({
      isLoggin: app.globalData.userInfo != null,
      userInfo: app.globalData.userInfo
    });
  }
});