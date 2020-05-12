'use strict';
{
  // 男子と女子のクラスを取得
  const male = document.querySelectorAll('.male');
  const female = document.querySelectorAll('.female');

  // ボタンのID取得
  const btnone = document.getElementById('btnone');
  const btntwo = document.getElementById('btntwo');

  // テーブル
  const list = document.getElementById('list');
  let row = list.rows;
  console.log(row[1]);

  // 男女全体を変更する処理
  btnone.addEventListener('click', () => {
    male.forEach(el => {
      el.innerHTML = '男子'
    });
    female.forEach(el => {
      el.innerHTML = '女子'
    })
  });

  // 選択された行の男女を変更する
  btntwo.addEventListener('click', () => {

  })
}