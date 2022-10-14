// pages/index/index.js
//获取App（）产生的示例对象
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
console.log(name, age);

Page({
  data: {
    list: [],
    counter: 0,
    students: [{
        name: 110,
        id: 1
      },
      {
        name: 110,
        id: 2
      },
      {
        name: 110,
        id: 3
      },
      {
        name: 110,
        id: 4
      }
    ]
  },
  handleAddClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleUserInfo(event) {
    console.log(event);
  },
  //生命周期回调—监听页面加载
  onLoad() {
    console.log('onLoad');
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/home/multidata',
      success: res => {
        console.log(res);
        console.log(this, 'this');
        const data = res.data.data.keywords.list;
        // this指向当前页面
        // 如果success不是箭头函数指向undefined
        this.setData({
          list: data
        })
        console.log(this.data.list);
      }
    })
  },
  //生命周期回调—监听页面显示
  onShow() {
    console.log('onShow');
  },
  //生命周期回调—监听页面初次渲染完成
  onReady() {
    console.log('onReady');
  },
  //生命周期回调—监听页面隐藏
  onHide() {
    console.log('onHide');
  },
  //生命周期回调—监听页面卸载
  onUnload() {
    console.log('onUNload');
  },
  onPageScroll(p) {
    // console.log(p);
  },
  onPullDownRefresh() {
    console.log('下拉刷新');
  },
  onReachBottom() {
    console.log('滚到顶了');
  }
})