// pages/wxml/wxml.js
Page({
data: {
    isShow: false,
    movie: [
      [1,2,3,4],
      [5,6,4,7,8],
      [6,5,8,9,5,6,66]
    ]
},
handleColor() {
this.setData({
  isShow: !this.data.isShow
})
}
})