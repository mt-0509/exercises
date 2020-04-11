'use strict';

{
  // 文字であることを確認した
  let a = '10';
  let kata =  typeof a;
  console.log(kata);

  // 数字ではないことを確認した
  let check = isNaN(a);
  console.log(check);

  // 文字を数字に変換した
  let result = a.toString();
  console.log(result);
}





