// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToaest() {
    wx.showToast({
      title: '支付成功',
      duration: 3000,//显示时间 单位 ms
      icon: 'success',//显示图标
      mask: true,//遮罩层
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '主题',
      content: '我是内容，哈哈哈',
      cancelColor: '#f02121',
      confirmColor: '#21f021',
      cancelText: '退出',
      showCancel: true,//是否显示取消按钮
      success: res => {
        if (res.cancel) {
          console.log('你取消了');
        }
        if (res.confirm) {
          console.log('你同意了');
        }
      }
    })
  },
  handleShowLoding() {
    wx.showLoading({
      title: '加载中ing',
      mask: true
    })
    //加个定时器取消loading界面
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {console.log(res);},
      })
    }, 1000);
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相机', '相册'],
      success: res => {
        console.log(res.tapIndex);
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // console.log('ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log('show');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '分享页面',
      path: 'pages/logs/logs',
      imageUrl: 'https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg'
    }
  }
})