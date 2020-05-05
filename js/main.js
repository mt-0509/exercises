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
        // name: this.name,
        // sex: this.sex,
        // age: this.age, 

        name: one.value,
        sex: two.value,
        age: three.value, 
      });
      
      this.name = "",
      this.sex = "",
      this.age = ""
    },
    update: function (index) {
      // this.$refs.r1.value = this.students[index].name
      // this.$refs.r2.value = this.students[index].age
      // this.$refs.r3.value = this.students[index].sex

      let one = document.getElementById('one');
      let two = document.getElementById('two');
      let three = document.getElementById('three');

      one.value = this.students[index].name;
      two.value = this.students[index].age;
      three.value = this.students[index].sex;
      
      
      
    },
    sakujo: function (index) {
      this.students.splice(index, 1);
    }
  }
})