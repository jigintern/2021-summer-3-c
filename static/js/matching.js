window.onload = console.log("読み込みテスト");
//データベースに接続
/*import { DB } from "https://deno.land/x/sqlite@v3.0.0/mod.ts"
const db = new DB("data.db");

// 作ってなければスポーツテーブルを作成
db.query(`
  create table if not exists sport (
    id integer primary key autoincrement,
    sport 
  )
`)*/
//ログインユーザーのidを取得
const UserId = sessionStorage.getItem('user_id');

function Matching(spo) { //マッチング
    del();//今ある表の初期化

    let tr1 = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    //ここから
    td1.textContent = '〇〇';
    tr1.appendChild(td1);
    td2.textContent = '××';
    tr1.appendChild(td2);
    td3.textContent = '▽△';
    tr1.appendChild(td3);
    document.getElementById("match").appendChild(tr1);
    td4.textContent = '〇〇';
    tr2.appendChild(td4);
    td5.textContent = '××';
    tr2.appendChild(td5);
    td6.textContent = '▽△';
    tr2.appendChild(td6);
    document.getElementById("match").appendChild(tr2);
    //ここまで表示テスト

    /*   //データベースからデータを読み出す
       const lists = db.queryEntries("select name,place,rate from sports_table where sports = :sport", {
           sport: "spo"
       })
   
       for (const list of lists) {
           if (list.id == UserId)
               continue;
           let td1 = document.createElement('td');
           let td2 = document.createElement('td');
           let td3 = document.createElement('td');
           td1.textContent = list.name;
           tr.appendChild(td1);
           td2.textContent = list.place;
           tr.appendChild(td2);
           td3.textContent = list.rate;
           tr.appendChild(td3);
           table.appendChild(tr);
       }*/

}

function del() {
    location.reload();
    /*const table = document.getElementById('match');
    const row = table.rows.length;
    for (let i = row; i > 1; i--) {
        table.deleteRow(1);
        console.log(i);
    }*/
    setTimeOut('console.log("待機中")', 2000);
}
