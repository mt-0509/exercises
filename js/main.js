var app = new Vue({
  el: "#app1",
  data: {
    name: "",
    age: "",
    sex: "",
    introduction: "",
    isActive: true
  },
  methods: {
    fontsize: function() {
      this.isActive = !this.isActive
    }

  }
})