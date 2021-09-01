import {fetchJSON} from "https://js.sabae.cc/fetchJSON.js";

let submit = document.getElementById('submit');

document.getElementById('username').innerHTML = "ユーザー名：" +  sessionStorage.getItem("username") ;
document.getElementById('status').innerHTML = "ステータス：" + sessionStorage.getItem("status");
document.getElementById('rate').innerHTML = "レート：" + sessionStorage.getItem("rate");
document.getElementById('evaluation').innerHTML = "いいね数：" + sessionStorage.getItem("evaluation");
document.getElementById('area').innerHTML = "マッチングエリア：" + sessionStorage.getItem("prefecture") + "　" + sessionStorage.getItem("city");


let sportslist = document.getElementById('sportslist');

var userid = Number(sessionStorage.getItem("userid"))



submit.onclick = async () => {
    console.log("click!!");
    if(sportslist.value == ""){
        location.reload();
        alert("スポーツを選択してください！");
    }

    else{
        const sports_name = await fetchJSON("api/account/findusersports",{
            name: sportslist.value,
            userid: userid,
        });


        if(sports_name == null){
            location.reload();
            alert("選択されたスポーツは追加済みです！");
        }
        
        else{
        const sports = await fetchJSON("api/account/add_sports",{
            name: sportslist.value,
            userid: userid,
        });
        alert("スポーツが追加されました！");
        location.reload();
    }

        
    }
}


