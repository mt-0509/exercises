new Vue({
  el: "#app",
  data: {
    students: [
      { name: '田中太朗', sex: '男性', age: '24' },
      { name: '田中次郎', sex: '男性', age: '19' },
      { name: '田中花子', sex: '女性', age: '14' },
    ],
    name: '',
    sex: '',
    age: '',
    inputName: '',
    selectedSex: '',
    inputAge: '',
    selectedDataNum: '',
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
        // name: this.students[index].name
      });

      //  = this.students[index].name;
      
      // v-modelからv-onに変更したことによって空にできなくなっている
      this.name = "",
      this.sex = "",
      this.age = ""
    },
    update: function (index) {

      let one = document.getElementById('one');
      let two = document.getElementById('two');
      let three = document.getElementById('three');

      one.value = this.students[index].name;
      two.value = this.students[index].age;
      three.value = this.students[index].sex;
      console.log(this.students[index]);

      // this.students[index].name = this.inputName
    },
    sakujo: function (index) {
      this.students.splice(index, 1);
    }
  }
}) 