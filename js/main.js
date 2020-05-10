var app = new Vue({
  el: '#app',
  data: {
    selectDataNum: null,
    inputName: '',
    selected: '',
    inputAge: '',
    students: [
      {
        name: '田中太朗',
        sex: '男性',
        age: '24'
      },
      {
        name: '田中次郎',
        sex: '男性',
        age: '19'
      },
      {
        name: '田中花子',
        sex: '女性',
        age: '14'
      },
    ]
  },
  methods: {
    resetForm: function () {
      this.inputName = "";
      this.selected = "";
      this.inputAge = "";
      this.selectDataNum = null;
    },
    updataRecord: function () {
      Vue.set(this.students, this.selectDataNum, {name: this.inputName, sex:this.selected, age: this.inputAge})
      this.resetForm();
    },
    deleteData: function (index) {
      Vue.delete(this.students, index)
    },
    onEdit: function (index) {
      this.selectedDataNum = index;
      this.inputAge = this.students[index].age
      this.inputName = this.students[index].name
      this.selected = this.students[index].sex
    }
  },
})