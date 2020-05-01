new Vue ({
  el: "#app",
  data: {
    items: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
  },
  template:`
  <div>
   <ul>
    <li v-for="item in items">{{ item }}</li>
   </ul>
  </div>
  `
})