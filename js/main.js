'use strict';
{
  // inputタグを取得
  let write = document.getElementById('write');
  
  // 入力値に変更があった際にイベント発動
  write.addEventListener('change', () => {
    setInterval(change,1)
      if (write.value !== '') {
        const comment = document.getElementById('comment');
        comment.classList.add('delete');
      } else {
        comment.classList.remove('delete');
      }
  })

  // 入力値を反映する処理
  const change = () => {
    let sentence = document.getElementById('sentence');
    sentence.innerHTML = write.value;  
  }
}