'use strict';

{
  let str = "JavaScriptで正規表現を使えば、高度な検索を行えます。";
  let rep; // 検索した文字列を格納する変数

  // 任意の文字を検索
  rep = str.match(/正規表現/);
  document.write(rep + "<br>");  //結果「正規表現」

  // 指定文字前後も含めて検索
  rep = str.match(/..表現/);
  document.write(rep + "<br>"); //結果「正規表現」

  rep = str.match(/を.../);
  document.write(rep + "<br>"); //結果「を使えば」

  // 指定文字の何かを検索
  rep = str.match(/[姓製正]/);
  document.write(rep + "<br>"); //結果「正」

  // 指定文字列の何かを検索
  rep = str.match(/姓規|製規|正規/);
  document.write(rep + "<br>"); //結果「正規」

  // 先頭文字を検索
  rep = str.match(/^正規表現/);
  document.write(rep + "<br>"); //結果「null」

  rep = str.match(/^JavaScript/);
  document.write(rep + "<br>"); //結果「JavaScript」
  
  rep = str.match(/^..../);
  document.write(rep + "<br>"); //結果「Java」

  // 末尾文字を検索
  rep = str.match(/正規表現$/);
  document.write(rep + "<br>"); //結果「null」

  rep = str.match(/...$/);
  document.write(rep + "<br>"); //結果「ます。」

  // 大文字小文字を区別しない
  rep = str.match(/javascript/i);
  document.write(rep + "<br>"); //結果「JavaScript」

  // 普通の検索は大文字小文字を区別する
  rep = str.match(/javascript/);
  document.write(rep + "<br>"); //結果「null」
  
}





