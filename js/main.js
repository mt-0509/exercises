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

  // 男子女子を書き換える処理
  const malechange = () => {
    male.forEach(el => {
      el.innerHTML = '男子'
    });
  }
  const femalechange = () => {
    female.forEach(el => {
      el.innerHTML = '女子'
    });
  }

  
  // 男女全体を変更する処理
  btnone.addEventListener('click', () => {
    malechange();
    femalechange();
  });
  
  // 選択された行の男女を変更する
  btntwo.addEventListener('click', () => {

    // セレクトボタン
    const tr = document.select.tr;
    const sex = document.select.sex;
    // 値を取得
    const num1 = tr.selectedIndex;
    const num2 = sex.selectedIndex;
    // value値を取得
    const str1 = tr.options[num1].value;
    const str2 = sex.options[num2].value

    

    console.log(str1);
    console.log(str2);

    // if文でいったん選択したところの処理ができるか試してみる
    let maleone = document.querySelectorAll('.maleone');
    let maletwo = document.querySelectorAll('.maletwo');
    let malethree = document.querySelectorAll('.malethree');
    let malefour = document.querySelectorAll('.malefour');
    let malefive = document.querySelectorAll('.malefive');

    let femaleone = document.querySelectorAll('.femaleone');
    let femaletwo = document.querySelectorAll('.femaletwo');
    let femalethree = document.querySelectorAll('.femalethree');
    let femalefour = document.querySelectorAll('.femalefour');
    let femalefive = document.querySelectorAll('.femalefive');

    
    if(str1 === '1' && str2 === '男子') {
      maleone.forEach(el => {
        el.innerHTML = '男子';
      });
    } else if (str1 === '1' && str2 === '女子') {
      femaleone.forEach(el => {
        el.innerHTML = '女子';
      });
    }

    if(str1 === '2' && str2 === '男子') {
      maletwo.forEach(el => {
        el.innerHTML = '男子';
      });
    } else if (str1 === '2' && str2 === '女子') {
      femaletwo.forEach(el => {
        el.innerHTML = '女子';
      });
    }

    if(str1 === '3' && str2 === '男子') {
      malethree.forEach(el => {
        el.innerHTML = '男子';
      });
    } else if (str1 === '3' && str2 === '女子') {
      femalethree.forEach(el => {
        el.innerHTML = '女子';
      });
    }
    if(str1 === '4' && str2 === '男子') {
      malefour.forEach(el => {
        el.innerHTML = '男子';
      });
    } else if (str1 === '4' && str2 === '女子') {
      femalefour.forEach(el => {
        el.innerHTML = '女子';
      });
    }
    if(str1 === '5' && str2 === '男子') {
      malefive.forEach(el => {
        el.innerHTML = '男子';
      });
    } else if (str1 === '5' && str2 === '女子') {
      femalefive.forEach(el => {
        el.innerHTML = '女子';
      });
    }










  });
}