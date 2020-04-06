'use strict';

{
  let array = ['e', 'a', 'k', 'B', 'c'];

  // 比較関数
  function compareFunc(a,b) {
    if(a.toUpperCase() > b.toUpperCase()) {
      return 1;
    } else {
      return -1;
    }
  }

  array.sort(compareFunc);
  console.log(array);
      
  
}





