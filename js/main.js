'use strict';

{
  function add(x, y){
    if(typeof y == 'undefined') { //部分適用
      return function(y) {
        return x + y
      }
    }
    // 完全適用
    return x + y
  }
  add(1)(2) // 3
  add(1, 2) // 3
}





