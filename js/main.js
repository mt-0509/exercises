'use strict';
{
  let myComponent = {
    template: '<p>{{ message }}</p>',
    data: function () {
      return {
        message: 'Hello Vue.js'
      }
    }
  }
  new Vue({
    el: '#app',
    components: {
      'my-component': myComponent
    },
    methods: {
      seikou: function () {
        console.log('ok');
      }
    }
  })

}
