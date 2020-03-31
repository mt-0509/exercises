'use strict';

{
  // 自分
  var nob = Object.create(null);
  nob = {p:1}
  console.log(nob);

  // 回答
  const obj = Object.create({}, {p: {value: 1}});
  console.log(obj.p);

}