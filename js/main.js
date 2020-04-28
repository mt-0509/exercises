var app = new Vue({
  el: "#app",
  data: {
    message: 'Vue.js練習問題'
  }
})

var app2 = new Vue({
  el: "#app2",
  data: {
    count: 0
  },
  methods: {
    ganba: function() {
      alert('こんにちは');
    },
    count_up: function () {
      this.count++;
    }
  }
})

var app3 = new Vue({
  el: "#app3",
  data: {
    count: 0
  },
  methods: {
    count_up: function () {
      this.count++;
    }
  }
})