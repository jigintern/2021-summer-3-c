import { DB } from "https://deno.land/x/sqlite@v3.0.0/mod.ts"
//ログインユーザーのidを取得
window.onload = function () {
    let username = document.getElementById('user_name').textContent;
    const user_id = db.queryEntries("select id from user_name where name = username", { })
}
document.getElementById('button').addEventListener('click', function () {
    let sport_id = this.id;
    /*データベースからデータを読み出す*/
    const lists = db.queryEntries("select name,place,rate from sports_table where sports = :sport", {
        sport: "sport_id"
    })
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
    for (const list of lists) {
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
    }

}, false);
