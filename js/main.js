'use strict';
{
  Vue.component('comp-child', {
    template: '<div>...</div>',
    created: function () {
      // 自分自身のイベント
      this.$on('open', function () {
        console.log('なにか処理')
      })
    }
  })
  new Vue({
    el: '#app',
    methods: {
      handleClick: function () {
        // 子コンポーネントのイベントを発火
        this.$refs.child.$emit('open')
      }
    }
  })
  



}
