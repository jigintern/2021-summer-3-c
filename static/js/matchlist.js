import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

var userid = Number(sessionStorage.getItem("userid"))
let table = document.getElementById('match');  //表のオブジェクトを取得
var rate;
let btn;


const matches = await fetchJSON("api/account/resultmatchcheck", {
        userid: userid
    });

for(const m of matches){
    let newRow = table.insertRow();
    
    btn = document.createElement("button");
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(m[1]);
    newCell.appendChild(newText);
    
    const user =  await fetchJSON("api/account/find_users_byuserid", {
        userid: m[2]
        });

    for(const u of user){
        var name = u[1];
    }

    newCell = newRow.insertCell();
    newText = document.createTextNode(name);//依頼者
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(m[11]);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(m[6]);
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    newText = document.createTextNode(m[4]+" "+m[5]);
    newCell.appendChild(newText);

    if(m[7]=="on"){
        rate = "あり";
    }
    else{
        rate= "なし";
    }

    newCell = newRow.insertCell();
    newText = document.createTextNode(rate);
    newCell.appendChild(newText);
    

    newCell = newRow.insertCell();
    btn.innerHTML = "結果を送信";
    btn.onclick = async () => {
        sessionStorage.setItem("matchid",m[0])
        sessionStorage.setItem("enemyid",u[0])
        sessionStorage.setItem("ratematch",m[7])
        location.href = "/matchresult.html"
    };

    newCell.appendChild(btn);
    
}