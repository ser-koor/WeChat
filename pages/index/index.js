// pages/index/index.js
import request from '../../service/network'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    request({
      url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
    
    // post
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: '666',
    //     id: 1
    //   },
    //   //成功回调
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   //失败回调
    //   fail: err => {
    //     console.log(err);
    //   }
    // })
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