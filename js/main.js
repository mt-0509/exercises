new Vue({
  el: "#app",
  data: {
    isActive: false,
    number: "",
    items: ["0.算数: 田中先生　水曜4時限", "1.国語: 山田先生　火曜3時限", "2.社会: 鈴木先生　月曜2時限", "3.理科: 佐藤先生　木曜3時限", "4.道徳: 高橋先生　金曜2時限", "5.図工: 伊藤先生　金曜3時限"]
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive
    }
    
    
  }
})