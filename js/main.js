'use strict';

{
  document.getElementById('change').addEventListener('change', () => {
        // セ・リーグのチームの配列
        let s_league = [
          "", "中日", "ヤクルト", "巨人", "阪神", "横浜", "広島",
        ];
        let p_league = [
          "", "ロッテ", "西武", "オリックス", "ソフトバンク", "楽天", "日本ハム" 
        ];
        
    
        function teamSet() {
          for (let i = 1; i < 7; i++) {
            switch(document.selbox.league.selectedIndex) {
              case 0: document.selbox.team.options[i].text = "";break;
              case 1: document.selbox.team.options[i].text = s_league[i];break;
              case 2: document.selbox.team.options[i].text = p_league[i];break;
            }
          }
    
          document.selbox.team.selectedIndex = 0;
        }
        teamSet();
        
  })


      
  
}





