'use strict';

{
  
  document.getElementById('ch').addEventListener('click', () => {
    function chbox() {
      var str = "";
  
      for(let i = 0; i < 6; i++) {
        if(document.chbox.elements[i].checked) {
          if(str != "") str = str + ",";
  
          str = str + document.chbox.elements[i].value;
        }
      }
  
      if(str == "") {
        alert("どれか選択してください。");
      } else {
        alert(str + "が選択されました。");
      }
    }
    
    chbox();
  })

      
  
}





