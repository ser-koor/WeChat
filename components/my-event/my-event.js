// components/my-event/my-event.js
Component({
  methods: {
    handleIndexAdd(event) {
      // console.log('.........');
      this.triggerEvent('indexAdd', {id: '1', name: '666'})
    }
  }
})
