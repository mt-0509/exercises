'use strict';

{
  function Who(name) {
    this.name = name;
  };
  Who.prototype.getName = function() {
    console.log('Myname is ' + this.name);
  };
  var o = new Who('morita');
  o.getName();


}





