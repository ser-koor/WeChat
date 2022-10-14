// app.js
App({
  //小程序初始化完成时执行
  onLaunch() {
  //  console.log('onLaunch');
  },
  //小程序显示时执行
  onShow() {
    // console.log('onShow');
    wx.getUserInfo({
      success: (result) => {
        // console.log(result);
      }
    })
  },
  //小程序隐藏式执行
  onHide() {
    console.log('onHide');
  },
  //小程序产生一些错误时执行
  onError() {
    console.log('onError');
  },
  globalData: {
    name: 'chendada',
    age: 18
  }
})
