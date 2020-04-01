'use strict';

{
  let one = document.getElementById('one');

  one.addEventListener('click', () => {
    one.style.backgroundColor = 'skyblue';
  })

  let two = document.getElementById('two');

  function countUp() {
    document.getElementById('two').innerText = ++count;
  }
  let count = 0;

  two.addEventListener('click', () => {
    
    countUp();
  })
  
  

}

