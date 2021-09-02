//データベースに接続
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

export function Matching(spo) { //マッチング
    del();//今ある表の初期化
    const MyId = sessionStorage.getItem('userid');
    const MyName = sessionStorage.getItem('username');
    const MyRate = sessionStorage.getItem('rate');
    const MyEvaluation = sessionStorage.getItem('evaluation');
    const MyStatus = sessionStorage.getItem('status');
    const MyPrefecture = sessionStorage.getItem('prefecture');
    const MyCity = sessionStorage.getItem('city');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');


    const UserIds = await fetchJSON("api/matcing/find_userid_bysports", {
        sportsname: spo,
    });

    for (const UserId of UserIds) {
        if (UserId == MyId)
            continue;

        const UserName = await fetchJSON("/api/account/findsports", {
            userid: UserId,
        });
        const list = await fetchJSON("/api/account/findusername", {
            username: UserName,
        });
        td1.textContent = list.username;
        tr.appendChild(td1);
        td2.textContent = list.prefecture + list.city;
        tr.appendChild(td2);
        td3.textContent = list.evaluation;
        tr.appendChild(td3);
        table.appendChild(tr);

    }
}

function del() {
    const table = document.getElementById('match');
    const row = table.rows.length;

    for (let i = row; i > 1; i--) {
        table.deleteRow(1);
    }
}
