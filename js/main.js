'use strict';

{
  let str
 = "文字を置換するには、##replace()%%を使います。"
 + "括弧内の最初に##検索文字列%%、2番目に##置換文字列%%を記入します。"
 + "結果は、##最初にHitした文字列%%が置換された状態で返されます。";

 // 文字を置換する
 str = str.replace(/##/g, "<strong>");
 str = str.replace(/%%/g, "<strong>");

 document.write(str);
  
}





