new Vue({
  el: "#app",
  data: {
    students: [
      {id: this.index, name: '田中太朗', sex:'男性', age:'24'},
      {id: this.index, name: '田中次郎', sex:'男性', age:'19'},
      {id: this.index, name: '田中花子', sex:'女性', age:'14'},
    ],
    name: '',
    sex: '',
    age: ''
  },
  methods: {
    push: function () {
      this.students.push({
        id: this.index,
        name: this.name,
        sex: this.sex,
        age: this.age, 
      });
      
      this.name = "",
      this.sex = "",
      this.age = ""
    },
    update: function () {
      console.log(this.$refs.first[2].innerText);
      console.log(this.$refs.second);
      console.log(this.$refs.third);

      this.$refs.first[2].innerText = name.value;
      
      // this.$refs.second = this.sex,
      // this.$refs.third = this.age

      // console.log(this.students[2].name);
      // this.students.splice(2, 1, '山田')
      // console.log(this.students[3].name);
      // document.getElementById('a').name.value.push(this.students[2].name) 
    },
    sakujo: function () {
      this.students.splice(this.index, 1)
    }
  }
})