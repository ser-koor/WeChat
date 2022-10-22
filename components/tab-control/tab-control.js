// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    courrt: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(e) {
      // console.log(e);
      var index = e.currentTarget.dataset.index
      this.setData({
        courrt: index
      })
      this.triggerEvent('itemClick', {index, title: this.properties.title[index]})
    }
  }
})
