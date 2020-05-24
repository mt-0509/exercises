'use strict';
{
  var vm = new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        // プロパティはあらかじめセットしておく
        fullName: '',
        now: '',
    },
    watch: {
        // firstName/lastName/now: 監視対象のプロパティ名
        // newValue: 更新後のプロパティの値
        // oldValue: 更新前のプロパティの値
        firstName: function (newValue, oldValue) {
            console.log(newValue, oldValue);
            this.fullName = newValue + ' ' + this.lastName
        },
        lastName: function (newValue, oldValue) {
            console.log(newValue, oldValue);
            this.fullName = this.firstName + ' ' + newValue
        },
        // 監視しているが、値に変化がないので変更されることはない
        now: function () {
            return Date.now()
        }
    }
})

}






