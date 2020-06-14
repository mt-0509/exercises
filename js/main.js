'use strict';
{

  new Vue({
    el: '#app',
    data: {
      message: 'Hello World'
    },
    created: function () {
      this.message = 'Hello Vue'
      console.log('created')
      console.log(this.$el)
    },
    mounted: function () {
      
      console.log('mounted')
      console.log(this.$el)
    },
    methods: {
      showEl: function () {
        console.log(this.$el)
        this.$el.innerHTML = this.message
      }
    }

  })



}
