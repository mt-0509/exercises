let selectedDataNum = null; //選択しているデータの背番号
let isEditMode = false; //編集モードであるかどうかの真偽値

var app = new Vue({
  el: '#app',
  data: {
    // selectDataNum: null,
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
      selectedDataNum = null;
      isEditMode = false;
    },
    insertNewRecord: function () {
      app.students.push({name:this.inputName,sex:this.selected,age:this.inputAge})
    },
    updataRecord: function () {
      Vue.set(app.students, selectedDataNum, {name: this.inputName, sex:this.selected, age: this.inputAge})
    },
    onFormSubmit: function() {
      if (isEditMode) {
        app.updataRecord();
      } else {
        app.insertNewRecord();
      }
      app.resetForm();
    },
    deleteData: function (index) {
      Vue.delete(app.students, index)
    },
    onEdit: function (index) {
      selectedDataNum = index;
      app.inputAge = app.students[selectedDataNum].age
      app.inputName = app.students[selectedDataNum].name
      app.selected = app.students[selectedDataNum].sex
      isEditMode = true;
    }
  },
})