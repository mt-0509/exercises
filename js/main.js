var app = new Vue({
  el: "#app1",
  data: {
    name: "",
    age: "",
    sex: "",
    introduction: "",
    isActive: false,
    select: ""
  },
  methods: {
    fontsize: function () {
      this.isActive = !this.isActive
    },
    colorchange: function () {
      switch (this.select) {
        case "red":
          app1.style.color = "red";
          break;

        case "green":
          app1.style.color = "green";
          break;

        case "black":
          app1.style.color = "black";
          break;

        case "blue":
          app1.style.color = "blue";
          break;
      }
    }
  }
})