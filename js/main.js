'use strict';
{

  new Vue({
    el: '#app',
    data: {

    },
    methods: {
      showEl: function () {
        console.log(this.$el)
        this.$el.innerHTML = "<h1>Hello Vue</h1>"
      }
    }

  })



}
