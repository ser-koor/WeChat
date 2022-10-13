// pages/index/index.js
Page({
  data: {
    counter: 0,
    students: [
      {name: 110,id: 1},
      {name: 110,id: 2},
      {name: 110,id: 3},
      {name: 110,id: 4}
    ]
  },
  handleAddClick() {
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleSubClick() {
    this.setData({
      counter: this.data.counter-1
    })
  }
})