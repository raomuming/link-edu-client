//app.js
App({
  onLaunch: function () {
    let self = this;
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          self.login((userInfo)=>{
            if (userInfo) {
              self.globalData.userInfo = userInfo;
            }
          });
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  login: function(callback) {
    wx.login({
      success: function(res) {
        var code = res.code;
        console.log("login code => ", code);
        if (res.code) {
          wx.getUserInfo({
            fail: function(res){
              // checkSettingStatus()
            },
            success: function(data) {
              var encryptedData = data.encryptedData;
              var iv = data.iv;
              wx.request({
                url: "https://www.link-edu.net/login",
                data: {
                  "code": code,
                  "crypted_data": encryptedData,
                  "iv": iv
                },
                method: "POST",
                header: {
                  "content-type": "application/json"
                },
                success: function(res) {
                  console.log("login data =>", res.data);
                  callback(res.data);
                }
              });
            }
          });
        }
      }
    });
  }
})