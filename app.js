// app.js
const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  onLaunch() {
  //从缓存中取出token
  const token = wx.getStorageSync(TOKEN);
  //判断token是否有值
  if (token && token !== 0) {
    //验证token是否过期
    this.check_token(token)
  } else {
    this.login();
  }
   
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      header: {
        token
      },
      method: 'post',
      success: res => {
        if (!res.data.errCode) {
          //token有效
          console.log('token有效');
          this.globalData.token = token;
        } else {
          this.login()
        }
      },
      fail: err => {
        console.log(err);
      }
    })
  },
  login() {
    console.log('执行登录操作');
    wx.login({
      success: res => {
        //获取code
        const code = res.code;
       //将Ccode发送给服务器
       wx.request({
         url: 'http://123.207.32.32:3000/login',
         method: 'post',
         data: {
           code
         },
         success: res => {
           //取出token
           const token = res.data.token;
           //将token保存到gglobalData中
           this.globalData.token = token;
           //将token进行本地存储
           wx.setStorageSync(TOKEN, token)
         }
       })
      }
    })    
  }

})
