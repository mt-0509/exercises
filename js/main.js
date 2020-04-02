'use strict';

{
  // クリックで色を変更する
  let one = document.getElementById('one');
  
  one.addEventListener('click', () => {
    one.style.backgroundColor = 'skyblue';
  })

  // クリックでカウントアップする
  let two = document.getElementById('two');
  let count = 0;

  function countUp() {
    document.getElementById('two').querySelector('p').innerHTML = ++count;
  }

  two.addEventListener('click', () => {
    countUp();
  })
  

  // マウスホバー
  let three = document.getElementById('three');
  
  // マウスが触れたとき
  three.addEventListener('mouseover', () => {
    three.style.backgroundColor = 'orange';
  }, false)

  // マウスが離れたとき
  three.addEventListener('mouseleave', () => {
    three.style.backgroundColor = 'pink';
  }, false)


  

}

