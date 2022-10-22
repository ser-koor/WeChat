// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  handleIndexAdd(event) {
    // console.log(event.detail);
    this.setData({
      count: this.data.count+1
    })
  },
  handleTabClick(event) {
    console.log(event);
  },
  //修改组件内的值
  handleCpn() {
    //获取组件对象
    var my_sel = this.selectComponent('.sel-class')
    // console.log(my_sel);
    //通过方法对数据进行修改
    my_sel.incrementCounter(10)
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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

  }
})