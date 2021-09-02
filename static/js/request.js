import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

var userid = Number(sessionStorage.getItem("userid"))
let table = document.getElementById('match');  //表のオブジェクトを取得
var rate;

const matches = await fetchJSON("api/account/matchcheck", {
        userid: userid
    });

for(const m of matches){
    let newRow = table.insertRow();
    let btn = document.createElement("button");

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
    btn.innerHTML = "承諾";
    btn.onclick = async () => {
        const data = await fetchJSON("api/account/add_match", {
            name:      m[1],
            userid:    sessionStorage.getItem("userid"),
            enemyid:   m[2],
            date:      m[4],
            time:      m[5],
            place:     m[6],
            ratematch: m[7],
            status: "true",
            sports: m[11]
        });

        const update = await fetchJSON("api/account/updatedata", {
            tablename: "matchlog",
            id:        m[0],
            key:       "status",
            value:     "true",
        });
        alert("依頼を承諾しました！");
        
        location.reload;
    };

    newCell.appendChild(btn);
    
}