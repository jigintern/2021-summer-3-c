window.onload = console.log("接続テスト");

/*import { DB } from "https://deno.land/x/sqlite@v3.0.0/mod.ts"
const db = new DB("data.db");

// 作ってなければスポーツテーブルを作成
db.query(`
  create table if not exists sport (
    id integer primary key autoincrement,
    sport 
  )
`)
//ログインユーザーのidを取得
const UserId = sessionStorage.getItem('user_id');*/

function Matching(spo) {
    del();
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');

    th1.textContent = '名前';
    tr.appendChild(th1);
    th2.textContent = '場所';
    tr.appendChild(th2);
    th3.textContent = '評価';
    tr.appendChild(th3);
    table.appendChild(tr);


    /*データベースからデータを読み出す*/
    /*const lists = db.queryEntries("select name,place,rate from sports_table where sports = :sport", {
        sport: "s"
    })*/

    /*for (const list of lists) {
        if (list.id == user_id)
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
    document.getElementById("match").appendChild(table);
}

function del() {
    let table = document.getElementById('match');
    if (table)
        let row = table.rows.length;
    while (row > -1)
        table.deleteRow(0);
}
