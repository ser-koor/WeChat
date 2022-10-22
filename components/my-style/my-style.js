// components/my-style/my-style.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '我是style组件标题',
      observer: function(newval, oldval) {
        // console.log(newval,oldval);
      }
    }
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
