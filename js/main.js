new Vue({
  el: "#app",
  data: {
    students: [
      {name: '田中太朗', sex:'男性', age:'24'},
      {name: '田中次郎', sex:'男性', age:'19'},
      {name: '田中花子', sex:'女性', age:'14'},
    ],
    name: '',
    sex: '',
    age: ''
  },
  methods: {
    push: function () {
      this.students.push({
        name: this.name,
        sex: this.sex,
        age: this.age, 
      });
      
      this.name = "",
      this.sex = "",
      this.age = ""
    },
    update: function (index) {
      // 値を参照してinputタグに追加するところが不明
      this.students.index
      
    },
    sakujo: function (index) {
      this.students.splice(index, 1);
    }
  }
})