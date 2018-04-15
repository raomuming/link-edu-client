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
  },
  loginUser: function() {
    let self = this;
    console.log("login User tapped.");
    wx.getSetting({
      success: function(res) {
        let authSetting = res.authSetting;
        if (self.isEmptyObject(authSetting)) {
          console.log("first time auth");
          app.login((user) => {
            self.setData({
              isLoggin: user != null,
              userInfo: user
            });
          });
        } else {
          console.log("authSetting => ", authSetting);
          if (authSetting["scope.userInfo"] === false) {
            wx.showModal({
              title: "用户未授权",
              content: "如需正常使用小程序功能，请按确认授权用户信息",
              showCancel: false,
              success: function(res) {
                wx.openSetting({
                  success: function(res) {
                    if (res.authSetting["scope.userInfo"] === true) {
                      app.login((user) => {
                        self.setData({
                          isLoggin: user != null,
                          userInfo: user
                        });
                      });
                    }
                  }
                });
              }
            });
          } else {
            app.login((user) => {
              self.setData({
                isLoggin: user != null,
                userInfo: user
              });
            });
          }
        }
      }
    });
  },
  isEmptyObject: function(e) {
    for (let t in e) {
      return !1;
    }
    return !0;
  }
});